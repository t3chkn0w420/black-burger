import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../context/auth';
import FooterList from '../components/Footer/FooterList';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Account = ({ navigation }) => {
      const [ email, setEmail ] = useState('');
      const [ name, setName ] = useState('');
      const [ password, setPassword ] = useState('');
      const [ role, setRole ] = useState('');
      const [ image, setImage ] = useState({ url: '', public_id: '' });      
      const [ state, setState ] = useContext(AuthContext);
      const [ uploadImage, setUploadImage ] = useState(" ");
            
      useEffect(() => {
         if (state) {
            const { name, email, role, image } = state.user;
               setName(name);
               setEmail(email);
               setRole(role);
               setImage(image);
         }
      }, [state]);

   const loginUser = async () => {
      if ( email === '' || password === '') {
         alert ("All Fields are Required");
         return;
      }
      const resp = await axios.post("http://localhost:4200/api/auth/signin", { email, password });
         if(resp.data.error)
            alert(resp.data.error)
         else {
            setState(resp.data);
            await AsyncStorage.setItem("auth-rn", JSON.stringify(resp.data));
            alert("Signin Success");
            navigation.navigate("Home");
         }
   };
   
   const handleUpload = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionAsync();
         if (permissionResult.granted === false ) {
            alert("Camera Access is REQUIRED!");
            return;
         }
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
         allowsEditing: true,
         aspect: [4, 3],
         base64: true,
      });
      
      if (pickerResult.cancelled === true) {
         return;
      }
      let base64Image = `data:image/jpg;base64,${pickerResult.base64}`;
         setUploadImage(base64Image);
      
      let storedData = await AsyncStorage.getItem("auth-rn");
      const parsed = JSON.parsed(storedData);
         
         const { data } = await axios.post("http://192.168.1.9:4200/api/upload-image", {
            image: base64Image,
            user: parsed.user
      });
         console.log("UPLOADED RESPONSE => ", data);
         
         // update async storage
         const stored = JSON.parsed(await AsyncStorage.getItem("auth-rn"));
            stored.user = data;
         await AsyncStorage.setItem("auth-rn", JSON.stringify(stored));
         
         // update context
            setState({ ...state, user: data });
            setImage(data.image);
            alert("Image Profile Saved");
   };
   
   return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
         <View style={{ marginVertical: 100 }}>
            
            <View style={styles.imageContainer}>
               { image && image.url ? <Image source={{ uri: image.url }} style={styles.imageStyle} /> : 
                 uploadImage ? <Image source={{ uri: uploadImage }} style={styles.imageStyle} /> : (
                   <TouchableOpacity onPress={() => handleUpload()}>
                     <FontAwesome5 name="camera" size={25} color="darkmagenta" />
                    </TouchableOpacity>
               )}            
            </View>
            { image && image.url ? (
               <TouchableOpacity onPress={() => handleUpload()}>
                  <FontAwesome5 name="camera" size={25} color="darkmagenta" style={styles.iconStyle} />
               </TouchableOpacity>
            ) : (
               <></>
            )}
              <Text style={styles.signupText}>{name}</Text> 
              <Text style={styles.emailText}>{email}</Text> 
              <Text style={styles.roleText}>{role}</Text> 
              
            <View style={{ marginHorizontal: 24}}>
               <Text style={{ fontSize: 16, color: '#8e93a1'}}> PASSWORD </Text>
               <TextInput style={styles.signupInput} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} />
            </View>
            
            <TouchableOpacity onPress={loginUser} style={styles.buttonStyle}>
               <Text style={styles.buttonText}> Update Password </Text>
            </TouchableOpacity>
         </View> 
      </KeyboardAwareScrollView>
   )
}

const styles = StyleSheet.create({
   iconStyle: { marginTop: -5, marginBottom: 10, alignSelf: "center" },
   container: { flex: 1, justifyContent: "space-between" },
   signupText: { fontSize: 30, textAlign: 'center', paddingBottom: 10 },
   emailText: { fontSize: 18, textAlign: 'center', paddingBottom: 10 },
   roleText: { fontSize: 16, textAlign: 'center', paddingBottom: 10, color: 'gray' },
   signupInput: { borderBottomWidth: 0.5, height: 48, borderBottomColor: "#8e93a1", marginBottom: 30 },
   buttonStyle: { backgroundColor: 'darkmagenta', height: 50, marginBottom: 20, justifyContent: 'center', marginHorizontal: 15, borderRadius: 15 },
   buttonText: { fontSize: 20, textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold', color: '#fff' },
   imageContainer: { justifyContent: "center", alignItems: "center" },
   imageStyle: { width: 100, height: 100, marginVertical: 20 }
})

export default Account;
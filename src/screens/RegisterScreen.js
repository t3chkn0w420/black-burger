import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { AuthContext } from '../context/auth';

const Register = ({ navigation }) => {
   const [name, setName] = useState(" ");
   const [email, setEmail] = useState(" ");
   const [password, setPassword] = useState(" ");
   const [state, setState] = useContext(AuthContext);
   
   const loginUser = async () => {
      if ( name === '' || email === '' || password === '') {
         alert("All Fields Are Required");
            return;
      }
      const resp = await axios.post("http://localhost:4200/api/auth/signin", { email, password });
      if (resp.data.error)
         alert(resp.data.error)
         
      else {
         setState(resp.data);
         await AsyncStorage.setItem("auth-rn", JSON.stringify(resp.data));
             alert("Registration Successfull");
             navigation.navigate("Home");
   }
};

   return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
         <View style={{ marginVertical: 100 }}>
            <Text style={styles.regTxt}> Login </Text>
               
               <View stle={styles.imageContainer}>
                  <Image source={require("../asset/images/logo.png")} style={styles.imageStyles} />
               </View>
               
            
               <View style={{ marginHorizontal: 24 }}>
                  <Text style={{ fontSize: 16, color: '#8e93a1'}}> Name </Text>
                     <TextInput style={styles.regInput} value={name} onChangeText={text => setName(text)} autoCapitalize="words" autoComplete='true' autoCorrect={false} />
               </View>
         
               <View style={{ marginHorizontal: 24 }}>
                  <Text style={{ fontSize: 16, color: '#8e93a1'}}> Email  </Text>
                     <TextInput style={styles.regInput} value={email} onChangeText={text => setEmail(text)} autoComplete="email" keyboardType='email-address' />
               </View>
               
               <View style={{ marginHorizontal: 24 }}>
                  <Text style={{ fontSize: 16, color: '#8e93a1'}}> Password </Text>
                     <TextInput style={styles.regInput} value={password} onChangeText={text => setPassword(text)} secureTextEntry autoCompleteType="password" />
               </View>
               
                  <View>
                     <TouchableOpacity
                        onPress={()  => {
                           loginUser();
                        }}
                     >
                           <Text>
                              LOGIN
                           </Text>
                     </TouchableOpacity>
                  </View>
                  
                  <Text
                     style={{ color: 'darkred', fontWeight: 'bold', fontSize: 12, textAlign: 'center' }}
                     onPress={() => navigation.navigate("Login")}>   
                         Already Have An Account? 
                  </Text>
         
                  <Text style={{ marginHorizontal: 24}}> {JSON.stringify({ name, email, password })} </Text>
               
         </View>
      </KeyboardAwareScrollView>
   )
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center'
   },
   regTxt: {
      fontSize: 30,
      textAlign: 'center'
   },
   regInput: {
      borderBottomWidth: .5,
      height: 48,
      borderBottomColor: "#8e93a1",
      marginBottom:  30
   },
   buttonStyle: {
      backgroundColor: "darkmagenta",
      height: 50,
      marginBottom: 20,
      justifyContent: 'center',
      marginBottom: 15,
      borderRadius: 15
   },
   buttonText: {
      fontSize: 20,
      textAlign: 'center',
      color: '#fff',
      textTransform: 'uppercase',
      fontWeight: 'bold'
   },
   imageContainer: {
      justifyContent: "center", alignItems: "center"},
      imageStyles: { width: 100, height: 100, marginVertical: 20}
})

export default Register;
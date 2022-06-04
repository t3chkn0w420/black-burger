// import React, { useState, useContext } from 'react';
// import { StyleSheet, Image, Text, View, TextInput } from 'react-native';
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { TouchableOpacity } from 'react-native-gesture-handler';

// import axios from 'axios';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { AuthContext } from '../context/auth';

// const Login = ({ navigation }) => {
//    const [email, setEmail] = useState("");
//    const [password, setPassword] = useState("");
//    // const [state, setState] = useContext(AuthContext);
   
//    const loginUser = async () => {
//       if ( email === '' || password === '') {
//          alert("All Fields Are Required");
//             return;
//       }
//      const resp = await axios.post("http://192.168.1.9:4200/api/auth/signin", { email, password });
//          console.log(resp.data);
//             alert("Success");
//                navigation.navigate("Home");
// };

//    return (
//       <KeyboardAwareScrollView contentContainerStyle={styles.container}>
//          <View style={{ marginVertical: 100 }}>
               
//                <View stle={styles.imageContainer}>
//                    <Image source={require("../asset/images/logo.png")} style={styles.imageStyles} />
//                </View>
               
//                <Text
//                      style={{ color: 'darkred', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}
//                        onPress={() => navigation.navigate("Home")}>   
//                             Go to HOME! 
//                   </Text>
         
//                <View style={{ marginHorizontal: 24 }}>
//                      <TextInput style={styles.logInput} value={email} onChangeText={text => setEmail(text)} keyboardType='email-address' placeholder='Email Address'/>
//                </View>
               
//                <View style={{ marginHorizontal: 24 }}>
//                   {/* <Text style={{ fontSize: 16, color: '#8e93a1'}}> Password </Text> */}
//                      <TextInput style={styles.logInput} value={password} onChangeText={text => setPassword(text)} secureTextEntry autoCompleteType="password" placeholder='Password' />
//                </View>
               
//                   <View>
//                      <TouchableOpacity
//                         onPress={()  => {
//                            loginUser()
//                         }}
//                         style={styles.buttonStyle}
//                      >
                     
//                         {/* <Ionicons name={log-in-outline} size={25} /> */}
//                            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>
//                               LOGIN
//                            </Text>
//                      </TouchableOpacity>
//                   </View>
                  
//                   <Text
//                      style={{ color: 'darkred', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}
//                        onPress={() => navigation.navigate("Register")}>   
//                             Dont't Have an Account Yet? 
//                   </Text>
         
//                   {/* <Text style={{ marginHorizontal: 24}}> {JSON.stringify({ email, password })} </Text> */}
//                <View>
//                  <Text
//                      style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}
//                        onPress={() => navigation.navigate("PhoneInput")}>   
//                             Use SMS
//                   </Text>
//                </View>
         
//          </View>
//       </KeyboardAwareScrollView>
//    )
// }


// const styles = StyleSheet.create({
//    container: {
//       flex: 1,
//       justifyContent: 'center'
//    },
//    logTxt: {
//       fontSize: 30,
//       textAlign: 'center'
//    },
//    logInput: {
//       borderRadius: 5,
//       borderBottomWidth: .5,
//       height: 48,
//       borderBottomColor: "#8e93a1",
//       marginBottom:  30,
//       backgroundColor: '#ccc',
//       color: '#000'
//    },
//    buttonStyle: {
//       textAlign: 'center',
//       backgroundColor: '#000',
//       height: 50,
//       width: '50%',
//       marginBottom: 20,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginBottom: 15,
//       borderRadius: 15,
//       marginLeft: 100
//    },
//    buttonText: {
//       fontSize: 20,
//       textAlign: 'center',
//       color: '#fff',
//       textTransform: 'uppercase',
//       fontWeight: 'bold'
//   },
//   imageContainer: { justifyContent: "center", alignItems: "center", marginLeft: 150 },
//   imageStyles: { width: 200, height: 200, marginVertical: 20, marginLeft: 80 }
// })

// export default Login;

import { TouchableOpacity, SafeAreaView } from "react-native-gesture-handler";
import React, { useState, useContext } from 'react';

import { AuthContext } from "../../context/auth";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HeaderTabs = () => {
   const [ state, setState ] = useContext(AuthContext);
   
   const logOut = async () => {
      //   setState({ token: "", user: null });
        setState({ token: "", user: "" });
      await AsyncStorage.removeItem("auth-rn");
   };
   
   return (
      <SafeAreaView>
         <TouchableOpacity onPress={logOut}>
            <Ionicons name="log-out-outline" size={25} color="darkmagenta" />
         </TouchableOpacity>
      </SafeAreaView>
   )
}

export default HeaderTabs;
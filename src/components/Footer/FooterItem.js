import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";

const FooterItem = ({ name, text, handlePress, screenName, routeName }) => {
      const activeScreenColor = screenName === routeName && "darkMagenta";
      
   return (
      <View>
         <TouchableOpacity onPress={handlePress}>
            <>
               <Ionicons name={name} size={25} style={styles.fontStyle} color={activeScreenColor} />
               <Text style={styles.iconText}>{text}</Text>
            </> 
         </TouchableOpacity>  
      </View>
   )
}

const styles = StyleSheet.create({
   fontStyle: { marginBottom: 3, alignSelf: "center" },
   iconText: { fontSize: 12, textAlign: 'center', textTransform: 'uppercase' }
})

export default FooterItem;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from 'react-native-curved-bottom-bar/src/components/CurvedBottomBar/components/navigator/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const FooterItem = ({ name, text }) => {
   <TouchableOpacity>
      <>
         <FontAwesome5 name={name} size={25} style={styles.fontStyle} />
         <Text style={styles.iconText}>{text}</Text>
      </> 
   
   </TouchableOpacity>
}

const styles = StyleSheet.create({
   fontStyle: { marginBottom: 3, alignSelf: "center" },
   iconText: { fontSize: 12, textAlign: 'center', textTransform: 'uppercase' }
})

export default FooterItem();
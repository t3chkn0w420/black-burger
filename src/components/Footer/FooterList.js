import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from 'react-native-curved-bottom-bar/src/components/CurvedBottomBar/components/navigator/styles';
import FooterItem from './FooterItem';

const FooterList = () => {
   return (
      <View style={styles.container}>
         <FooterItem text="Home" name="Home" />
         <FooterItem text="Post" name="Post" />
         <FooterItem text="Links" name="Links" />
         <FooterItem text="Account" name="Account" />
      </View>
   )
}


const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      margin: 10,
      marginHorizontal: 10,
      justifyContent: "space-between",
   }
})

export default FooterList();
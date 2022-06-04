import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FooterItem from './FooterItem';

const FooterList = () => {
   const navigation = useNavigation();
   const route = useRoute();

   return (
      <View style={styles.container}>
         <FooterItem text="Home" name="home-outline" screenName="Home" handlePress={() => navigation.navigate("Home")} routeName={route.name}/>
         <FooterItem text="Post" name="add-outline" screenName="Post" handlePress={() => navigation.navigate("Post")} routeName={route.name} />
         <FooterItem text="Links" name="link-outline" screenName="Links" handlePress={() => navigation.navigate("Links")} routeName={route.name}/>
         <FooterItem text="Account" name="person-circle-outline" screenName="Account" handlePress={() => navigation.navigate("Account")} routeName={route.name}/>
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

export default FooterList;
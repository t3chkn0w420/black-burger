import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import FooterList from '../components/Footer/FooterList';

const Post = () => {
   return (
      <SafeAreaView style={styles.container}>
         <Text style={styles.mainText}> Post Component </Text>
            <FooterList />
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: { flex: 1, justifyContent: "space-between" },
   mainText: { fontSize: 30, textAlign: 'center' }
})

export default Post;
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Bottom2 = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome Bottom2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Bottom2;

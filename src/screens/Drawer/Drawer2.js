import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Drawer2 = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome Drawer2</Text>
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

export default Drawer2;

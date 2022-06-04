import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import FooterList from '../components/Footer/FooterList';

const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
    return (
        <View>
                <Text style={styles.mainText}> Home Component </Text>
                     <FooterList />
        </View>
    );
  };

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between '},
  mainText: { fontSize: 30, textAlign: 'center'}
});

export default HomeScreen;

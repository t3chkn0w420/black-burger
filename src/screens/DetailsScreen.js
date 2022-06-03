import React from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet, View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import {SecondaryButton} from '../components/Button';

const DetailsScreen = ({ navigation, route }) => {
  const item = route.params;

  return (
    <SafeAreaView style={{backgroundColor: Colors.white}}>
      <View style={style.header}>
          <TouchableOpacity
                onPress={() => {navigation.goBack()}}
              >
                  <Image source={require('../asset/icons/back.png')} style={{
                    width: 30,
                    height: 30,
                    tintColor: 'black'
              }}/>
          </TouchableOpacity>
          
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={item.image} style={{height: 220, width: 220}} />
        </View>
        
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: Colors.white}}>
              {item.name}
            </Text>
            
            <View style={style.iconContainer}>
              <Image source={require('../asset/icons/fav.png')} style={{
                      width: 28,
                      height: 28,
                      tintColor: 'black'
                }}></Image>
            </View>
          </View>
          
          <Text style={style.detailsText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries.
          </Text>
          
          <View style={{marginTop: 40, marginBottom: 40}}>
            <SecondaryButton title="Add To Cart" />
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: Colors.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: Colors.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: Colors.white,
  },
});

export default DetailsScreen;

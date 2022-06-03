import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';

import Colors from '../constants/Colors';
import Foods from '../constants/Foods';

import {PrimaryButton} from '../components/Button';

const CartScreen = ({ navigation }) => {
  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 80, width: 80}} />
            <View
              style={{
                height: 100,
                marginLeft: 10,
                paddingVertical: 20,
                flex: 1,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
              
              <Text style={{fontSize: 13, color: Colors.dark}}>
                   {item.ingredients}
              </Text>
              
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>₱{item.price}</Text>
            </View>
        
        <View style={{marginRight: 20, alignItems: 'center'}}>
          
          <Text style={{fontWeight: 'bold', fontSize: 18}}> 2{item.cart} </Text>
          
          <View style={style.actionBtn}>
          
              <Image source={require('../asset/icons/minuss.png')} style={{
                      width: 28,
                      height: 28,
                      tintColor: 'black'
                }}></Image>
                
              <Image source={require('../asset/icons/add.png')} style={{
                      width: 28,
                      height: 28,
                      tintColor: 'black'
                }}></Image>
                
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: Colors.white, flex: 1}}>
      
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
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>Cart</Text>
      </View>
      
      <FlatList
        showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 80}}
            data={Foods}
        
        renderItem={({item}) => <CartCard item={item} />}
          
          ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
          
          ListFooterComponent={() => (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 15,
                  }}>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    Total Price
                  </Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>₱50</Text>
                </View>
                <View style={{marginHorizontal: 30}}>
                   <PrimaryButton title="CHECKOUT" />
            </View>
          </View>
        )}
      />
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
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CartScreen;

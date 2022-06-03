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

import Colors from '../constants/Colors';
import Categories from '../constants/Categories';
import Foods from '../constants/Foods';
import { styles } from 'react-native-curved-bottom-bar/src/components/CurvedBottomBar/components/navigator/styles';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({navigation}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const ListCategories = () => {
    return (
                  // VERTICAL MENU
      <KeyboardAvoidingView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={style.categoriesListContainer}>
            {Categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => setSelectedCategoryIndex(index)}>
                  <View
                    style={{
                      backgroundColor:
                        selectedCategoryIndex == index
                          ? Colors.grey
                          : Colors.light,
                      ...style.categoryBtn,
                    }}>
                    <View style={style.categoryBtnImgCon}>
                      <Image
                        source={category.image}
                        style={{height: 35, width: 35, resizeMode: 'cover', tintColor: '#000'}}
                      />
                    </View>
                    
                    <Text
                      style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          marginLeft: 10,
                          color:
                            selectedCategoryIndex == index
                              ? '#fff'
                              : '#000',
                      }}>
                      {category.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </KeyboardAvoidingView>
    );
  };
  
  // CARD MENU
  const Card = ({ Food }) => {
    return (
      <TouchableHighlight
        underlayColor={Colors.dark}
         activeOpacity={0.9}
           onPress={() => navigation.navigate('Details', Food)}>
        
        <View style={style.card}>
          <View style={{alignItems: 'center', top: -45}}>
            <Image source={Food.image} style={{height: 120, width: 120}} />
          </View>
          
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{Food.name}</Text>
            
            <Text style={{fontSize: 14, color: Colors.grey, marginTop: 2}}> 
              {Food.ingredients}
            </Text>
          </View>
          
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            
            <Text style={{fontSize: 15, fontWeight: '700', color: Colors.dark }}>
              ₱{Food.price}
            </Text>
            
            <View style={style.addToCartBtn}>
              <Image source={require('../asset/icons/add.png')} style={{
                  width: 28,
                  height: 28,
                  tintColor: 'black',
              }}></Image>
            </View>
            
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  
  
  return (
  // HEADER
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <View style={style.header}>
        <View style={{ flexDirection: 'row'}}>
        
          <View style={styles.menu}>
              <Image
                source={require('../asset/icons/burger-menu.png')}
                style={{height: 40, width: 40, borderRadius: 25}}
              />
          </View>
        
          <View style={{flexDirection: 'row', marginLeft: 35 }}>
          
            <Text style={{fontSize: 28}}>Hello,</Text>
            
            <Text style={{fontSize: 28, fontWeight: 'bold', color: Colors.dark, marginLeft: 10}}>
              Admin
            </Text>
          </View>
          
        </View>
          <Image
            source={require('../asset/icons/cart.png')}
            style={{height: 50, width: 50, borderRadius: 25}}
          />
        </View>

          {/* <>
          <Text style={{marginTop: 5, fontSize: 15, color: Colors.grey }}>
            What do you want today
          </Text>          
          </> */}
          
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        
        <View style={style.inputContainer}>
            <Image source={require('../asset/icons/search.png')} style={{
                width: 28,
                height: 28,
                tintColor: 'black',
              }}></Image>
          <TextInput
            style={{flex: 1, fontSize: 15}}
            placeholder="Search for Food"
          />
        </View>
        
        {/* <View style={style.sortBtn}>
        <Image source={require('../asset/icons/filter.png')} style={{
                width: 30,
                height: 30,
                tintColor: 'black',
              }}></Image>
        </View> */}
        
      </View>
      
      <View>
        <ListCategories />
      </View>
      
      <FlatList
        showsVerticalScrollIndicator={false}
            numColumns={2}
            data={Foods}
        renderItem={({item}) => <Card Food={item} />}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: Colors.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  
  categoryBtnImgCon: {
    height: 40,
    width: 40,
    // backgroundColor: Colors.dark,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  card: {
    borderColor: Colors.dark,
    borderWidth: 3,
    height: 235,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 45,
    borderRadius: 15,
    elevation: 13,
    // backgroundColor: Colors.dark,
    backgroundColor: '#fff',
    shadowColor: 'blue',
    shadowOffset: {
    	width: 5,
    	height: 5,
    },
    shadowOpacity: 0.26,
    shadowRadius: 13.97,
    elevation: 8,
  },
  
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

  shadow: {
    shadowColor: "#808080",
    shadowOffset: {
      width: 5,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  
  
  
  
  
  
  //HEADER
  Hi can somebody plz help with header styling in expo and react native. I want my header to look like this:

enter image description here

right now I only get this:

enter image description here

<Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerTitle: (props) => (
                    <Image
                        resizeMode='center'
                        style={{width: 180, height: 60, resizeMode: 'contain'}}
                        source={require('../assets/images/audienz_ws_no_slogan.png')}
                    />
                ),
                headerTintColor: 'transparent',
                headerTitleContainerStyle: {justifyContent: 'center', alignItems: 'center'},
                headerStyle: {
                    backgroundColor: Colors.pink,
                    borderBottomLeftRadius: 300,
                    borderBottomRightRadius: 300,
                    height: 120
                },
                headerBackTitleStyle: {
                    color: 'transparent',
                },
                headerBackTitleVisible: false,
            }}
        >
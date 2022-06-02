import CustomDrawerContentComponent from '../components/Drawer';

const MainStack = createDrawerNavigator({
  Menu: {
    screen: MenuStack,
  },
  Reservation: {
    screen: Reservation,
  },
  Orders: {
    screen: Orders,
  },
  Favorites: {
    screen: Favorites,
  },
  Highlights: {
    screen: Highlights,
  },
  About: {
    screen: About,
  },
  Contact: {
    screen: Contact,
  }
},{
  initialRouteName: 'Menu',
  contentComponent: CustomDrawerContentComponent,
  contentOptions: {
    activeTintColor: '#000000',
    activeBackgroundColor: '#e6e6e6',
  }
});
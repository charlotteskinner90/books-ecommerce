import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import BookListerScreen from '../screens/BookListerScreen';
import DetailsScreen from '../screens/DetailsScreen';

const NavStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  BookListerScreen: {
    screen: BookListerScreen,
  },
  DetailsScreen: {
    screen: DetailsScreen
  },
})

const AppNavigator = createAppContainer(NavStack);

export default AppNavigator;

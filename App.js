import 'react-native-gesture-handler';
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from './src/screens/Welcome';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ScanScreen from './src/screens/ScanScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import Details from './src/screens/Details';
import ForgetPassword from './src/component/ForgetPassword';

// Code for stack navigation
const navigator = createStackNavigator({    
    Welcome: Welcome,
    WelcomeScreen: WelcomeScreen,
    LoginScreen: LoginScreen,
    RegisterScreen: RegisterScreen,
    HomeScreen: HomeScreen,
    ScanScreen: ScanScreen,
    DetailsScreen: DetailsScreen,
    Details: Details,
    ForgetPassword: ForgetPassword
}, 

// Code for header not to be visible
{
  headerMode: 'none',
  defaultNavigationOptions: {
    headerVisible: false,
  }
});

const App = createAppContainer(navigator)

export default () => {
  return <App />
};

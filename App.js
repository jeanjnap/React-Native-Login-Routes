import React from 'react';

import { StackNavigator, NavigationActions } from 'react-navigation';

console.disableYellowBox = true;

import H2 from './src/Components/Home';
import OtherPage from './src/Components/OtherPage';
import Login from './src/Components/Login';
import Index from './src/Components/Index';
import Register from './src/Components/Register';
import Register2 from './src/Components/Register2';



class HomeScreen extends React.Component {
  render() {
    return (
      <H2 navigation={this.props.navigation} />
    );
  }
}

export default StackNavigator({
  Index: { screen: Index},  
  Login: { screen: Login, navigationOptions: { title: "Login" } },
  Register: { screen: Register, navigationOptions: { title: "Register" } },
  Register2: { screen: Register2, navigationOptions: { title: "Register 2" } },  
  Home: { screen: HomeScreen, navigationOptions: { title: "Home" } },
  OtherPage: { screen: OtherPage, navigationOptions: { title: "OtherPage" } },
  
}, {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1cb3ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
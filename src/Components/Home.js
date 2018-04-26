
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  BackHandler,
  ToastAndroid,
  AsyncStorage
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Logado: false
    }
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  logout = () => {
    AsyncStorage.setItem('Logado','0');
    this.props.navigation.replace('Login')
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Home Screan!
        </Text>
        <Text style={styles.instructions}>
          It's your Drashboard.
        </Text>

        <Button title="Go to other Page" onPress={() => this.props.navigation.navigate('OtherPage')} />
        <Button title="Logout" onPress={() => this.logout()} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    marginBottom: 20
  }
});

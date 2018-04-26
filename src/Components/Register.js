
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      Logado: false
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Register!
        </Text>
        <Text style={styles.instructions}>
          Create your account.
        </Text>

        <Button title="Go to next step" onPress={() => this.props.navigation.replace('Register2') } />

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
  instructions:{
    marginBottom: 20
  }
});

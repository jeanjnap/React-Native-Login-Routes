
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
    

  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          More one Screan!
        </Text>
        <Text style={styles.instructions}>
          It's your other screan.
        </Text>

        <Button title="Go to Other Page again" onPress={() => this.props.navigation.navigate('OtherPage')} />
        <Button title="Go to Root" onPress={() => this.props.navigation.popToTop()} />
        
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

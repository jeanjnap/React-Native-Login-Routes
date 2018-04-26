
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    ToastAndroid,
    AsyncStorage
} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    logar = () => {
        AsyncStorage.setItem('Logado','1');
        this.props.navigation.replace('Home')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Login
                </Text>
                <Text style={styles.instructions}>
                    Login with your account.
                </Text>

                <Button title="Login" onPress={ () => this.logar() } />
                <Button title="Create an account" onPress={() => this.props.navigation.navigate("Register")} />

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

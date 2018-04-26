
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    AsyncStorage
} from 'react-native';

import { NavigationActions } from 'react-navigation';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Logado: false
        }
    }

    render() {

        resetNavigation = (targetRoute) => {
            AsyncStorage.setItem('Logado','1');

            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: targetRoute }),
                ],
            });
            this.props.navigation.dispatch(resetAction);
        }

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Register Step 2!
                </Text>
                <Text style={styles.instructions}>
                    Finish the account creation.
                </Text>

                <Button title="Finsh" onPress={() => resetNavigation('Home') } />

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

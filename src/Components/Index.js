
import React, { Component } from 'react';

import {
    ToastAndroid,
    AsyncStorage,
    View,
    Image
} from 'react-native';

import { NavigationActions } from 'react-navigation';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Logado: '',
            val: 3,
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('Logado', (err, result) => {
            this.setState({ Logado: result });
            /*
            if(result == '1'){
                //ToastAndroid.show("Logado: "+result,ToastAndroid.SHORT);
                //this.props.navigation.dispatch(this.props.navigation.replace("Home"));
            }
            else{
                //ToastAndroid.show("Deslogado: "+result,ToastAndroid.SHORT);
                //this.props.navigation.dispatch(this.props.navigation.replace("Login"));
            }
            */
        });

        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        var n = this.state.val;
        n -= 1;
        this.setState({
            val: n,
        });
    }

    resetNavigation = (targetRoute) => {


        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: targetRoute }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }



    render() {
        if (this.state.val <= 0) {
            if (this.state.Logado == 1) {
                this.resetNavigation('Home')
            }
            else {
                this.resetNavigation('Login')
            }
        }




        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image source={require('../imgs/clip-art-splash-6.jpg')} style={{ width: 200, height: 200 }} />
            </View>
        );
    }
}
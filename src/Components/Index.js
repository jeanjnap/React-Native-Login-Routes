
import React, { Component } from 'react';

import { 
    ToastAndroid,
    AsyncStorage
} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Logado: ''
        }
    }

    componentWillMount(){
        AsyncStorage.getItem('Logado', (err, result) => {
            //this.setState({Logado: result});
            if(result == '1'){
                //ToastAndroid.show("Logado: "+result,ToastAndroid.SHORT);
                this.props.navigation.dispatch(this.props.navigation.replace("Home"));
            }
            else{
                //ToastAndroid.show("Deslogado: "+result,ToastAndroid.SHORT);
                this.props.navigation.dispatch(this.props.navigation.replace("Login"));
            }
        });
    }

    render() {
        return null;
    }
}
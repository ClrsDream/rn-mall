

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Dimensions = require('Dimensions')
var {width,height} =  Dimensions.get('window')

import  Homebt from  './homebt'
import  Hometop from  './hometop'
export default class home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Homebt/>
                <Hometop/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

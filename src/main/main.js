

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var Dimensions = require('Dimensions')
var {width,height} =  Dimensions.get('window')


import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from 'react-native-tab-navigator/TabNavigatorItem';
import { Navigator } from 'react-native-deprecated-custom-components'

import  Home from  '../home/home'
import  Shopping from  '../shopping/shopping'
import  Indent from  '../indent/indent'

export default class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isshow: 'home',
        };

    }
    render() {
        return (
            <TabNavigator>
                {this.TabNavigatorItems('首页',require('../img/home/home.png'),require('../img/home/homeclick.png'),'home','首页',Home,25,25,)}
                {this.TabNavigatorItems('购物车',require('../img/home/sho.png'),require('../img/home/shoclik.png'),'mess','购物车',Shopping,25,25,)}
                {this.TabNavigatorItems('订单',require('../img/home/dd.png'),require('../img/home/ddclick.png'),'ability','订单',Indent,25,25,)}
            </TabNavigator>
        );
    }

    TabNavigatorItems(title,renderIcon,renderSelectedIcon,isshows,name,componentname,iconwidth,iconheight,) {
        return (
            <TabNavigatorItem
                title={title}
                renderIcon={()=> <Image source={renderIcon} style={{width:iconwidth,height:iconheight,}}/>}
                renderSelectedIcon={()=> <Image source={renderSelectedIcon} style={{width:iconwidth,height:iconheight}}/>}
                onPress={() => this.setState({ isshow: isshows})}
                selected={this.state.isshow === isshows}
                selectedTitleStyle={{color:'red'}}
                
            >
                <Navigator
                    initialRoute = {{ name: name, component: componentname }}
                    configureScene = {(route) => {
                        return Navigator.SceneConfigs.HorizontalSwipeJump ;
                    }}
                    renderScene = {(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator = {navigator} />
                    }} />
            </TabNavigatorItem>
        )
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
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

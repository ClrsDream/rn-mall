

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions')
var {width,height} =  Dimensions.get('window')

import  Utli   from  './util'
export default class homebt extends Component {

    constructor(props) {
        super(props);
        this.state = {
            homebt:'',
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="rgba(0,0,0,0.2)"
                    barStyle="light-content"
                    translucent={true}
                />
                {this.showtitle()}
            </View>
        );
    }
    componentDidMount(){
        {this.gettitle()}
    }
    gettitle(){
        var thiz =  this
         var aa = Utli.getmingchen()
        aa.then(function (data) {
            thiz.setState({
                homebt:data
            })
        })
    }
    showtitle(){
        let aa = this.state.homebt
        if(aa==''){
            return
        }else {
            return(
                <View  style={styles.topview}>
                    <View style={{width:width,marginLeft:0,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <TouchableOpacity>
                        <Image source={require('../img/home/fh.png')} style={{width:11,height:18,marginLeft:10}}/>
                        </TouchableOpacity>
                        <Text style={{textAlign:'center',fontSize:18,color:'#000'}}>{aa.data.value}</Text>
                        <TouchableOpacity>
                        <Image source={require('../img/home/xq.png')}  style={{width:21,height:5,marginRight:10}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }

    }

}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },
    topview:{
        height:60,
        backgroundColor:'#FFF',
        paddingTop:25,

    },
});

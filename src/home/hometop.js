

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

var Dimensions = require('Dimensions')
var {width,height} =  Dimensions.get('window')

import  Util from  './util'
export default class indent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            actionpage:0,
        };

    }
    render() {
        return (
            <View>
                <ScrollView
                    style={styles.lunboScroll}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
                >
                    {this.showlunbtu()}
                </ScrollView>

                <View style={styles.sanviewview}>
                    {this.dh()}
                </View>

            </View>
        );
    }

    componentDidMount(){
        {this.getlunbo()}
    }
    getlunbo(){
        var  thiz = this
        let aa =  Util.getlunbotu()
        aa.then(function (data) {
            thiz.setState({
                    data:data
                })
        })
    }

    showlunbtu(){
        var aa = this.state.data
        if(aa==''){
            return
        }
        var arr = []
        for(let i = 0 ;i < aa.data.length ; i++ ){
            arr.push(
                <Image source={{uri:aa.data[i].picUrl}} style={{width:width ,height:200}}/>
            )
        }
        return arr
    }


    dh(){
        var aa = this.state.data
        if(aa==''){
            return
        }

        var arr = [],style
        for(var i = 0 ; i < aa.data.length ; i++){
            if( i == this.state.actionpage){
                arr.push(
                    <View key={i} style={{backgroundColor:'#0E95FF',width:10,height:10,borderRadius:5,marginLeft:5}}></View>
                )
            }else{
                arr.push(
                    <View key={i} style={{backgroundColor:'#eee',width:10,height:10,borderRadius:5,marginLeft:5}}></View>
                )
            }
        }
        return arr
    }
    //当一帧结束的时候调用
    onAnimationEnd(e){
        //    求当前页码
        var  actionpa = Math.floor( e.nativeEvent.contentOffset.x/width )
        //    刷新状态机
        this.setState({
            actionpage:actionpa,
        })
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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


    sanviewview:{
        height:35,
        marginTop:-20,

        flexDirection:'row',
        justifyContent:'center',
        // alignItems:'center',
    },
    sanView:{
        width:15,
        height:5,
        backgroundColor:'#ccc',
        marginLeft:5,
        marginTop:23,
    }
});

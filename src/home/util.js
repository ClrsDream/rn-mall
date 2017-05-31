import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window')


var datas = ''
export default class util extends Component {

    // get 轮播 图片
    static  async  getlunbotu() {
        let urls = 'https://api.it120.cc/mall/banner/list'
        let opts = {
            method: "GET"
        }
        await fetch(urls, opts)
            .then((response) => {
                return response.json();
            })
            .then((responses) => {
                datas = responses
            })
            .catch((error) => {
                alert('获取轮播图 错误了 ...' + error);
            })

        return datas
    }

    // get 名称
    static  async  getmingchen() {
        let urls = 'https://api.it120.cc/mall/config/get-value?key=mallName'
        let opts = {
            method: "GET"
        }
        await fetch(urls, opts)
            .then((response) => {
                return response.json();
            })
            .then((responses) => {
                datas = responses
            })
            .catch((error) => {
                alert('获取名称 错误了 ...' + error);
            })

        return datas
    }





}
/**
 * Created by happi on 2017/4/5.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class WFMessage extends Component {

    render () {
        return (
            <View style={styles.container}>
                <Text>
                    消息
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5F5F5',
    }
});/**
 * Created by happi on 2017/4/5.
 */

/**
 * Created by happi on 2017/4/5.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PixelRatio,
    Image,
} from 'react-native';

export default class WFTabBar extends Component {

    static propTypes = {
        goToPage: React.PropTypes.func, //跳转到Tab的方法
        activeTab: React.PropTypes.number,//选中的下标
        tabs: React.PropTypes.array,//tabs的集合!像OC items的数组

        //接下来!我们扩展自定义的属性
        tabNames:React.PropTypes.array,//保存图片的名称
        tabIconNames:React.PropTypes.array,//Item图片的名称
        tabIconSelectedNames:React.PropTypes.array,//保存选中图片集合!
    };

    render () {
        return (
            <View style={styles.tabsStyle}>
                {this.props.tabs.map((tab,i)=>this.renderItem(tab,i))}
            </View>
        );
    }
    renderItem(tab,i) {
        //判断当前i是不是当前选择的tab!!
        const color = this.props.activeTab == i ? "#FD8224":"#707070";
        const currentImages = this.props.activeTab == i ? this.props.tabIconSelectedNames:this.props.tabIconNames;

        return(
            <TouchableOpacity activeOpacity={1}
                              onPress={()=>this.props.goToPage(i)}
                              key={i}
                              style={styles.tab}>
                <View style={styles.tabItem}>
                    <Image source={{uri:currentImages[i],scale:PixelRatio.get()}} style={{width:30,height:30}}/>
                    <Text style={{color:color}}>
                        {this.props.tabNames[i]}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    tabsStyle:{
        flexDirection:'row',
        height:50,
    },
    tab:{
        flex:1,
    },
    tabItem:{
        alignItems:'center',
    },
});
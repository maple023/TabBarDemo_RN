/**
 * Created by happi on 2017/4/5.
 */

import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

//引入三方框架
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';

import WFHome from './WFHome';
import WFMine from './WFMine';
import WFFind from './WFFind';
import WFMessage from './WFMessage';

import WFTabBar from './WFTabBar';

export default class  WFMain extends Component {

    constructor(props) {
        super(props);
        this.state={
            tabNames:['首页','我的','发现','消息'],
            tabIconNames:['tabbar_home','tabbar_profile','tabbar_discover','tabbar_message_center'],
            tabSelectImags:['tabbar_home_highlighted','tabbar_profile_highlighted','tabbar_discover_highlighted','tabbar_message_center_highlighted'],
        }
    }

    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames=this.state.tabIconNames;
        let tabSelectedImages = this.state.tabSelectImags;
        return (
            <ScrollableTabView renderTabBar={()=><WFTabBar tabNames={tabNames} tabIconNames={tabIconNames} tabIconSelectedNames={tabSelectedImages}/>}
                               tabBarPosition="bottom"
                               //切换效果
                               scrollWithoutAnimation={true}
                               //锁住滚动
                               locked={true}
                               //常用属性
                                onChangeTab={(obj)=>{
                                    console.log('切换到了' + obj.i + '个');
                                }}
                               onScroll={(posit)=>{
                                   console.log('监听到滚动' + posit);
                               }}
            >

                <Navigator
                    tabLabel="首页"
                    initialRoute={{
                        component:WFHome,
                        params:{
                            title:'首页'
                        }
                    }}
                    renderScene={(route,navigator)=><route.component navigator={navigator} {...route.params}/>}
                />

                <Navigator
                    tabLabel="我的"
                    initialRoute={{
                        component:WFMine,
                        params:{
                            title:'我的',
                        }
                    }}
                    renderScene={(route,navigator)=><route.component navigator={navigator} {...route.params}/>}
                />

                <Navigator
                    tabLabel="发现"
                    initialRoute={{
                        component:WFFind,
                        params:{
                            title:'发现'
                        }
                    }}
                    renderScene={(route,navigator)=><route.component navigator={navigator} {...route.params}/>}
                />

                <Navigator
                    tabLabel="消息"
                    initialRoute={{
                        component:WFMessage,
                        params:{
                            title:'消息'
                        }
                    }}
                    renderScene={(route,navigator)=>
                        <route.component navigator={navigator} {...route.params} />
                    }
                />

            </ScrollableTabView>
        );
    }
}
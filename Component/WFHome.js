/**
 * Created by happi on 2017/4/5.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image,
    AlertIOS
} from 'react-native';

import WFCellView from './WFCellView'

export default class WFHome extends Component {

    constructor(props) {
        super(props);
        this.state={
            base_url:'http://api.budejie.com/api/api_open.php?a=list&c=data&type=29',
            dataSource:new ListView.DataSource({
                rowHasChanged:(r1,r2) => r1 !== r2
            }),
        }
    }

    render () {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                style={{backgroundColor:'#dddddd',paddingTop:10}}
            />
        );
    }

    renderRow(rowData){
        var obj = this;
        return(

            <TouchableOpacity activeOpacity={0.0}
                              onPress={()=>{
                                    obj.props.navigator.push({
                                        component:WFCellView,
                                        params:{
                                            title:'cell'
                                        }
                                    }
                                    )
                              }}>

            <View style={styles.cellStyle}>
                {/*上部分*/}
                <View style={styles.topViewStyle}>
                    <Image source={{uri:rowData.profile_image}} style={{width:40,height:40,borderRadius:20}}/>
                    {/*名字*/}
                    <Text style={styles.nameStyle}>{rowData.name}</Text>
                </View>
                {/*正文*/}
                <Text style={styles.textStyle}>{rowData.text}</Text>

            </View>
            </TouchableOpacity>
        );

    }

    componentDidMount() {
        //发送网络请求
        this.loadData();
    }
    loadData() {
        fetch(this.state.base_url)
            .then((response)=> response.json())
            .then((responseJson)=>{
                console.log(responseJson);

                //拿到数据
                var jsonData = responseJson.list;
                //更新数据
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(jsonData),
                });
            })
    }

}

const styles = StyleSheet.create({
    cellStyle : {
        //height:250,
        marginTop:10,
        marginLeft:5,
        marginRight:5,
        borderBottomWidth:0.5,
        borderBottomColor:'#dddddd',
        backgroundColor:'white',
        padding:5
    },
    topViewStyle:{
        flexDirection:'row'
    },
    nameStyle:{
        lineHeight:40,
        textAlign:"center",
        paddingLeft:15,
    },
    textStyle:{
        padding:5
    }
});
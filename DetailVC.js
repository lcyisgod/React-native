import React,{Component} from 'react';
import {Text, StyleSheet, View,Button,SectionList,ListHeaderComponent,Platform,Alert} from 'react-native';
import RightButton from "./Common/RightNavigationAction";

var REQUEST_URL = "http://xy.alog.com:9010/api/v1/countries/getCountryCode";
export default class DetailVC extends Component{


    static navigationOptions =({navigation, screenProps}) => ({
        //RightButton是一个组件,组件的有两个属性title和method
        // headerRight:<RightButton title={"测试"} method={() =>navigation.state.params.navigatePress()}/>,
    });

    constructor(props) {
        super(props);
        this.state = {
          data:[],
          loaded:false,
        };
        this.fetachData = this.fetachData.bind(this);
    }

    componentDidMount(): void {
        this.props.navigation.setParams({
            navigatePress: this.rightButtonClick
        });
        this.fetachData();
    }

    fetachData =() =>{
        fetch(REQUEST_URL)
            .then(response =>response.json())
            .then(responseData=>{
               this.setState({
                   data:this.state.data.concat(responseData.result),
                   loaded:true
               });
            });
    }

    rightButtonClick =() =>{
        const { goBack} = this.props.navigation;//跳转页面
        goBack();
    }

    render(): React.ReactNode {
        if (!this.state.loaded){
            return this.renderLoadingView();
        }

        let sections = this.state.data;
        let temArr = sections.map((item,index) => {
            let tempData = {};
            tempData.key = item.word;
            tempData.data = item.data;
            return tempData
        });

        //获取上个界面传过来的参数
        let content = this.props.navigation.state.params.content;
        console.log(content);
        return(
            <View style={styles.container}>
                <SectionList
                    sections={temArr}
                    keyExtractor={(item,index) =>index}
                    renderItem={this.renderCityName}
                    renderSectionHeader={this.renderCountryHeader}
                    style = {styles.sectionList}
                />
            </View>
        );
    }

    //没有数据时加载的函数
    renderLoadingView(){
        return(
            <View style = {styles.container}>
                <Text>Loading data...</Text>
            </View>
        );
    }

    //获取Section函数
    renderCountryHeader(info){
        let section = info.section.key;
        return(
        <Text style = {styles.sectionHeader}>
            {section}
        </Text>
        );
    }

    //获取城市名称
    renderCityName(info){
        let item = info.item.cname;
        return(
            <Text style={styles.item}>
                {item}
            </Text>
        );
    }

    confirmButton (){
        console.log("321");
        Alert.alert('跳出');
    }


}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#F5FCFF",
    },
    sectionList:{
        marginTop:30,
    },
    text:{
        height: 30,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    sectionHeader:{
        paddingTop:2,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:2,
        fontSize:14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item:{
        padding:10,
        fontSize: 18,
        height:Platform.OS == "ios"?44:22,
    }
});

import React,{Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    Alert,
    Image,
    TouchableWithoutFeedback,
    Dimensions,
    FlatList,
    StatusBar,
} from 'react-native';


import RightButton from "./Common/RightNavigationAction";

type Props = {};
export default class MainVC extends Component<Props>{
    //在static中不能直接调用this属性
    static navigationOptions = ({navigation, screenProps}) => ({
        //RightButton是一个组件,组件的有两个属性title和method
        headerRight:<RightButton title={"设置"} method={() =>navigation.state.params.navigatePress()}/>,
    });

    constructor(props){
        super(props);
        this.state={
            modalVisible:false
        }
    }

    componentDidMount(){//在初始化render之后只执行一次，在这个方法内，可以访问任何组件，componentDidMount()方法中的子组件在父组件之前执行
        //对路由参数进行更改
        this.props.navigation.setParams({
          navigatePress:this.onPressToChangPwd
        })
    }

    onPressToChangPwd =()=> {//跳回主页退出
        const { navigate } = this.props.navigation;//跳转页面
        navigate('DetailVC',{content:'第二页'});
    }

    gotoNextPage(info){
        if (info === "View"){
            this.props.navigation.navigate('ViewVC');
        }else if (info === "Text"){
            this.props.navigation.navigate('TextVC');
        }else if (info === "Image"){
            this.props.navigation.navigate('ImageVC');
        }else if (info === "TextInput"){
            this.props.navigation.navigate('TextInputVC');
        }else if (info === "SectionList"){
            this.props.navigation.navigate('DetailVC',{content:'第二页'});
        }else if (info === "Alert"){
            Alert.alert("标题","这是一个弹出框");
        }else if (info === "Slider"){
            this.props.navigation.navigate('SliderVC');
        }else if (info === "Switch"){
            this.props.navigation.navigate('SwitchVC');
        }else if (info === "Picker"){
            this.props.navigation.navigate('PickerVC');
        }else if (info === "Animation"){
            this.props.navigation.navigate('WebViewVC');
        }else if (info === "Gesture"){
            this.props.navigation.navigate('GestureVC');
        }
    }



    render(): React.ReactNode {

      return(
        <View style = {styles.container}>
            <FlatList
                data={[
                    {key:'View'},
                    {key:'Text'},
                    {key:'Image'},
                    {key:'TextInput'},
                    {key:'SectionList'},
                    {key:'Slider'},
                    {key:'Switch'},
                    {key:'Alert'},
                    {key:'Picker'},
                    {key:'Animation'},
                    {key:'Gesture'}]}
                renderItem={({item})=>
                    <TouchableWithoutFeedback onPress={()=>{this.gotoNextPage(item.key)}}>
                        <Text style={styles.itemStyle}>{item.key}</Text>
                    </TouchableWithoutFeedback>
                }
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={()=><View style={{height:0.5,backgroundColor:'#D8D8D8',marginLeft: 24,marginRight: 24}}/>}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "flex-start",
        alignItems:"center",
        backgroundColor:"#F5FCFF",
    },
    itemStyle:{
        paddingLeft:24,
        fontSize:18,
        color:'#333333',
        height:44,
        textAlign: 'left',
        lineHeight:44,
        width:Dimensions.get('window').width,
    }
});


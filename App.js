/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {Text,View,Image} from 'react-native';
import {createStackNavigator,createBottomTabNavigator,createAppContainer,createMaterialTopTabNavigator} from 'react-navigation';

import MainVC from './MainVC';
import DetailVC from './DetailVC';
import ViewVC from './ViewPage';
import TextVC from './TextPage';
import ImageVC from './ImagePage'
import TextInputVC from './TextInputPage';
import SliderVC from './SliderPage';
import SwitchVC from './SwitchPage';
import PickerVC from './PickerPage';
import WebViewVC from './WebViewPage';


const HomeStackNavigator = createStackNavigator({
    MainVC:{
        screen:MainVC,
        navigationOptions:({navigation}) => ({
            headerTitle:'React入门',
            headerBackTitle:'To Main',
        }),
    },
    ViewVC:{
        screen:ViewVC,
        navigationOptions:({navigation}) => ({
            headerTitle:'View',
            tabBarVisible:false,
        }),
    },
    TextVC:{
        screen:TextVC,
        navigationOptions:(navigation) =>({
            headerTitle:'Text',
        }),
    },
    ImageVC:{
        screen:ImageVC,
        navigationOptions:(navigation) =>({
            headerTitle:'Image',
        })
    },
    TextInputVC:{
        screen:TextInputVC,
        navigationOptions:(navigation) =>({
            headerTitle:'TextInput',
        })
    },
    DetailVC:{
        screen:DetailVC,
        navigationOptions:({navigation}) =>({
            headerTitle: 'SectionList'
        }),
    },
    SliderVC:{
        screen:SliderVC,
        navigationOptions:({navigation}) =>({
            headerTitle:'Slider'
        }),
    },
    SwitchVC:{
        screen:SwitchVC,
        navigationOptions:({navigation}) =>({
            headerTitle:'Switch'
        }),
    },
    PickerVC:{
        screen:PickerVC,
        navigationOptions:({navigation}) =>({
            headerTitle:'Picker'
        })
    },
    WebViewVC:{
        screen:WebViewVC,
        navigationOptions:({navigation}) =>({
            headerTitle:'WebView'
        })
    },
});

HomeStackNavigator.navigationOptions=({navigation}) =>{
    return{
        tabBarVisible: navigation.state.index===0,
    }
};


const FindStackNavigator = createStackNavigator({
    DetailVC:{
        screen:DetailVC,
        navigationOptions:({navigation}) =>({
            headerTitle: 'SectionList'
        }),
    },
});

FindStackNavigator.navigationOptions=({navigation}) =>{
    return{
        tabBarVisible: navigation.state.index===0,
    }
};

//顶部样式
const createTap = createMaterialTopTabNavigator({
    Home:{
        screen:HomeStackNavigator,
        navigationOptions:()=>({
            tabBarLabel:'首页',
        })
    },
    Find:{
        screen:FindStackNavigator,
        navigationOptions:()=>({
            tabBarLabel:'发现',
        })
    }
})

//底部样式
const TabNavigator = createBottomTabNavigator([
    HomeStackNavigator,
    FindStackNavigator,
]);

const TabNavigator1 = createBottomTabNavigator({
    Home:{
        screen:HomeStackNavigator,
        navigationOptions:()=>({
            tabBarLabel:'首页',
            tabBarIcon:({focused,tintColor})=>(
                <Image source={focused?require('./Resouce/Image/meSelect.png'):require('./Resouce/Image/meUnSelect.png')}/>
            ),
        }),
    },
    Find:{
        screen:FindStackNavigator,
        navigationOptions:()=>({
            tabBarLabel:'发现',
            tabBarIcon:({focused,tintColor})=>(
                <Image source={focused?require('./Resouce/Image/findSelect.png'):require('./Resouce/Image/findUnSelect.png')}/>
            ),
        }),
    }
},{
    initialRouteName:'Home',
    order:['Home','Find'],
    lazy:true,
    tabBarOptions:{
        inactiveTintColor:"#8F8F8F",
        activeTintColor:"#ED5601",
        labelStyle:{
            fontSize:11
        }
    }
})

const App = createAppContainer(TabNavigator1);

export default App;

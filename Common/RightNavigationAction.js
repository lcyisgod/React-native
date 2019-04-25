//定义了一个带有Button的组件，props是属性，由外界传入
import React,{Component,ReactPropTypes} from 'react';
import {Button,View} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';

export default class RightNavigationAction extends Component{
    constructor(props){
        super(props);
    }


    render(): React.ReactNode {
        return(
            <View>
                <Button title={this.props.title} onPress={this.props.method}/>
            </View>
        );
    }
}

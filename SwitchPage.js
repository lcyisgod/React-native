import React,{Component} from 'react';
import {Switch,Dimensions,Text, StyleSheet, View} from 'react-native';

export default class SwitchPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
          switchValue:false
        };
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let str = "当前的开关状态是"+this.state.switchValue;
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>这是一个Switch组件</Text>
                <Text style={styles.textStyle}>{str}</Text>
                <Switch style = {styles.switchStyle}
                        value={this.state.switchValue}
                        onValueChange={(value) =>{
                            this.setState({
                                switchValue:value
                            },()=>{console.log("开关变化"+this.state.switchValue)})
                }}></Switch>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:"#F5FCFF",
    },
    textStyle:{
        color:'#333333',
        fontSize:16,
        textAlign: 'center',
        width:Dimensions.get('window').width,
    },
    switchStyle:{
        marginTop:50,
        width: 100,
        height:50,
    }
})

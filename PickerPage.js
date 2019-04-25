import React,{Component} from 'react';
import {View,Text,StyleSheet,Dimensions,TouchableWithoutFeedback,Picker} from 'react-native';

export default class PickerPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pickerValue:""
        };
    }
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>这是一个Picker例子</Text>
                <TouchableWithoutFeedback onPress={()=>{alert("弹出")}}>
                    <Text style={styles.textStyle}>点击一下</Text>
                </TouchableWithoutFeedback>
                <Picker style={styles.pickerStyle}
                        //值变化时
                        onValueChange={(value)=>{this.setState({
                            pickerValue:value
                        })}}
                        //默认选中的值
                        selectedValue={this.state.pickerValue}
                        //在android上使用 指定在用户点击选择器时，以怎样的形式呈现选项
                        mode={'dialog'}>
                    <Picker.Item
                        label = 'iOS'
                        value = 'iOS'
                    />

                    <Picker.Item
                        label = 'Java'
                        value = 'Java'
                    />
                </Picker>
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
    pickerStyle:{
        marginTop:20,
        width:200,
        height:150,
    },
})

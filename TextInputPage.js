import React,{Component} from 'react';
import {StyleSheet,TextInput,Dimensions,View} from 'react-native';


export default class TextInputPage extends Component{
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle}
                           //关闭拼写修正
                           autoCorrect={false}
                           autoFocis={true}
                           //隐藏光标
                           // caretHidden={true}
                           //是否显示右侧清除按钮,只在ios下有用
                           clearButtonMode='while-editing'
                           placeholder="请输入"
                           onBlur={()=>alert("输入框失去了焦点")}
                           //当文本框内容变化时调用此回调函数
                           // onChange={(event)=>console.log(event.target.text)}
                           //当文本框内容变化时调用此回调函数
                           onChangeText={(Text)=>console.log(Text)}
                           onEndEditing={()=>alert("编辑结束")}
                ></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#F5FCFF",
    },
    textInputStyle:{
        height:20,
        width:Dimensions.get('window').width-48,
    },
})

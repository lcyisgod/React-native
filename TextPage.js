import React,{Component} from 'react';
import {Text,View,Dimensions,StyleSheet} from 'react-native'

export default class TextPage extends Component{
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}
                      //是否接收长按复制
                      // selectable={true}
                      //文字过长时的截取方式，结合numbleLine使用
                      ellipsizeMode='tail'
                      //文本的行数
                      numberOfLines={1}
                      //长按操作
                      onLongPress={()=>{alert('被长按了')}}
                    >
                    这是一串文本这是一串文本这是一串文本这是一串文本
                    这是一串文本这是一串文本这是一串文本这是一串文本
                </Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#F5FCFF",
    },
    textStyle:{
        height:100,
        width:Dimensions.get('window').width,
        textAlign:'center',
        fontSize:15,
        color:'#246895',
        //字符间距
        letterSpacing:5,
        //横线位置
        textDecorationLine:'underline',
    },
})

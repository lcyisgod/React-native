import React, {Component} from 'react';
import {StyleSheet,View,Dimensions,Text,PixelRatio} from 'react-native';

export default class ViewPage extends Component {
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>这是一个简单的View</Text>
                <View style={styles.propsStyle}
                      //获取该控件相对于父控件的位置
                      onLayout={(event) =>console.log('event',event.nativeEvent.layout)}
                      //触摸事件开始时,回调该函数询问是否要成为事件响应者
                      onStartShouldSetResponder={(event)=>{return true}}
                      //是否成为移动事件的响应者
                      onMoveShouldSetResponder={(event)=>{return true}}
                      //事件响应申请成功,在事件发生时会调用
                      // onResponderGrant={(event)=>alert('申请成功')}
                      //事件响应申请失败,在事件发生时会调用
                      // onResponderReject={(event)=>alert('申请失败')}
                      onResponderStart={(event)=>{console.log('父控件触摸开始',event.nativeEvent.locationX/PixelRatio.get())}}
                      onResponderMove={(event)=>{console.log('移动过程中')}}
                      onResponderRelease={(event)=>{console.log('触摸完成')}}
                      onResponderEnd={(event)=>{console.log('组件结束事件响应回调')}}
                      //在该组件成为事件响应者期间,其他组件申请了事件处理，RN通过该函数询问是否释放事件给其他角色
                      onResponderTerminationRequest={(event)=>{return true}}
                      //如果该组件有子组件,子组件也申请成为响应者时调用此方法可以阻止子组件
                      onStartShouldSetResponderCapture={(event)=>{return false}}
                >
                    <View style={styles.childStyle}
                        //触摸事件开始时,回调该函数询问是否要成为事件响应者
                        onStartShouldSetResponder={(event)=>{return true}}
                        onResponderStart={(event)=>{console.log('子控件触摸开始')}}>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'white',
    },
    textStyle:{
        paddingTop:5,
        height:30,
        width:Dimensions.get('window').width,
        fontSize:15,
        color:'#333333',
        textAlign: 'left',
    },
    propsStyle:{
        justifyContent:'flex-start',
        alignItems:'center',
        width:Dimensions.get('window').width,
        height: 100,
        backgroundColor: 'red',
    },
    childStyle:{
        height:50,
        width:Dimensions.get('window').width,
        backgroundColor:'#333333',
    },
});

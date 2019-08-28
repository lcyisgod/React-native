import React,{Component} from 'react';
import {View, Text,AppRegistry,PanResponder, StyleSheet, Dimensions} from 'react-native'

export default class GesturePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: 'red',
            width:100,
        };
       this.width = this.state.width;
    }

    componentWillMount(): void {
        this._panResponder = PanResponder.create({
            //这个属性接受一个回调函数，如果返回true就是申请成为触摸事件的响应者。
            onStartShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },
            //这个属性接受一个回调函数，如果返回true就是申请成为触摸事件的响应者。
            onMoveShouldSetPanResponder:  (evt, gestureState) => {
                return true;
            },
            //尝试成为响应者时会触发下面两个方法
            //开始响应手势
            onPanResponderGrant: (evt, gestureState) => {
                this._highlight();
            },
            //手势被占用
            onPanResponderReject:(evt,gestureState) => {

            },
            //已经成为手势响应者
            //手势移动时
            onPanResponderMove: (evt, gestureState) => {
                console.log(`gestureState.dx : ${gestureState.dx}   gestureState.dy : ${gestureState.dy}`);
                if (this.width+gestureState.dx < Dimensions.get('window').width && gestureState.dx>=0){
                    this.setState({
                        width:this.width+gestureState.dx,
                    });
                }
            },
            //手势释放时
            onPanResponderRelease: (evt, gestureState) => {
                this._unhighlight();
                this.width=100;
            },
            //有其他组件请求接替响应者，是否放权等操作
            onPanResponderTerminate: (evt, gestureState) => {
            },
        });
    }

    _unhighlight(){
        this.setState({
            backgroundColor: 'red',
            width:100,
        });
    }

    _highlight(){
        this.setState({
            backgroundColor: 'blue',
        });
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
       return (
           <View style={styles.container}>
               <Text style={styles.textStyle}>这是一个手势测试</Text>
               <View style={[styles.redView,{
                   backgroundColor: this.state.backgroundColor,
                   width: this.state.width,
               }]}
                     {...this._panResponder.panHandlers}
               ></View>
           </View>
       )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        backgroundColor:"#F5FCFF",
    },
    textStyle:{
        width: Dimensions.get('window').width,
        height: 20,
        marginTop: 0,
        textAlign: 'center',
    },
    redView: {
        marginTop:70,
        marginLeft:0,
        height: 100,
        borderRadius: 50,
    },
})

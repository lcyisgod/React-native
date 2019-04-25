import React,{Component} from 'react';
import {Slider,Dimensions,StyleSheet,View,Text} from 'react-native';

export default class SliderPage extends Component{
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>这是一个简单的SliderDemon</Text>
                <Slider style={styles.sliderStyle}
                        //滑块轨道左侧的颜色
                        minimumTrackTintColor={"#C3D4Fb"}
                        //值发生改变时
                        onValueChange={(value)=>{console.log("值变啦"+value)}}
                        //初始值
                        value={0.1}
                        //每次滑动时改变的距离
                        // step={0.5}
                        //用户松开滑块的时候调用此回调，无论值是否变化
                        onSlidingComplete={()=>{alert("滑动结束")}}></Slider>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "flex-start",
        alignItems:"center",
        backgroundColor:"#F5FCFF",
    },
    textStyle:{
        color:'#333333',
        fontSize:16,
        textAlign: 'center',
        width:Dimensions.get('window').width,
    },
    sliderStyle:{
        marginTop:10,
        width: 100,
    }
})

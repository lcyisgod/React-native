import React,{Component} from 'react';
import {StyleSheet, Text, View, Animated, TouchableOpacity, Image, Dimensions} from 'react-native';

export default class SpringPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            springValue:new Animated.Value(1),
        };

        this.springAnimated = Animated.spring(
            this.state.springValue,//初始值
            {
                toValue:1,//结束值
                friction:2,//弹跳系数
                tension:10,//控制速度
            }
        );
    }

    _startAnimated() {
        this.state.springValue.setValue(0.1);
        this.springAnimated.start();
    }

    _gotoNextPagge() {
        this.props.navigation.navigate('DecayVC');
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View style = {styles.container}>
                <Animated.View
                    style={{
                        width: 282,
                        height: 51,
                        transform:[
                            {scale:this.state.springValue}
                        ]
                    }}
                >
                    <Text style={{marginTop: 20,width:Dimensions.get('window').width,height:51,textAlign:'center'}}>
                        这是一段测试文字
                    </Text>
                </Animated.View>

                <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
                    <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>这是一个弹簧动画</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._gotoNextPagge.bind(this)}>
                    <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>进入下一个界面</Text>
                </TouchableOpacity>
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
        fontSize:13,
        height:20,
        width:Dimensions.get('window').width,
        color:'#333333',
        textAlign:'left',
        marginTop:10,
    },
})

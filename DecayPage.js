import React,{Component} from 'react';
import {StyleSheet, Text, View, Animated, TouchableOpacity, Dimensions, Image} from 'react-native';

export default class DecayPage extends Component{
    constructor(props){
        super(props);
        this.state = {
          decayValue:new Animated.ValueXY({x:0,y:0}),
        };

        this.decayAnimated = Animated.decay(
            this.state.decayValue,
            {
                velocity:5,          //起始速度，必填
                deceleration:0.95,   //速度衰减比例
            }
        )
    }

    _startAnimated() {
        this.decayAnimated.start();
    }

    _gotoNextPagge() {
        this.props.navigation.navigate('DecayVC');
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <View style={styles.container}>
                <Animated.View
                    style={{
                        width: 100,
                        height: 150,
                        transform:[
                            {translateX:this.state.decayValue.x},    //x偏移
                            {translateY:this.state.decayValue.y},    //y偏移
                        ]
                    }}>
                    <Image ref="image"
                           style={{width:50,height:50}}
                           source={{uri:'https://facebook.github.io/react-native/docs/assets/favicon.png'}}>

                    </Image>
                </Animated.View>
                <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
                    <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>这是一个衰减动画</Text>
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

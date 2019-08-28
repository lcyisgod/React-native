import React,{Component} from 'react';
import {Animated,Text,View,StyleSheet,Dimensions,TouchableOpacity,Image} from 'react-native';

class FadeInView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),  // 透明度初始值设为0
    }

    componentDidMount() {
        Animated.timing(                  // 随时间变化而执行动画
            this.state.fadeAnim,            // 动画中的变量值
            {
                toValue: 1,                   // 透明度最终变为1，即完全不透明
                duration: 10000,              // 让动画持续一段时间
            }
        ).start();                        // 开始执行动画
    }

    render() {
        let { fadeAnim } = this.state;

        return (
            <Animated.View                 // 使用专门的可动画化的View组件
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,         // 将透明度指定为动画变量值
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}

export default class WebViewPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeOutOpacity: new Animated.Value(1),
        }

        this.fadeOutAnimated = Animated.timing(
            this.state.fadeOutOpacity,
            {
                toValue:0,
                duration:3000,
            }
        )
    }

    _startAnimated() {
        this.fadeOutAnimated.start(() => this.state.fadeOutOpacity.setValue(1));
    }

    _gotoNextPagge() {
        this.props.navigation.navigate('SpringVC');
    }


     render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
             <View style = {styles.container}>
                 {/*<Text style={styles.textStyle}>这是一个简单的动画</Text>*/}
                 {/*<FadeInView style={{width: 250, height: 100, backgroundColor: 'powderblue'}}>*/}
                 {/*    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>*/}
                 {/*</FadeInView>*/}
                 {/*<Text style={styles.textStyle}>这是另一个简单动画</Text>*/}
                 <Animated.View style={{width:200,height:300,opacity: this.state.fadeOutOpacity}}>
                     <Image ref="image"
                            style={{width:50,height:50}}
                            source={{uri:'https://facebook.github.io/react-native/docs/assets/favicon.png'}}>

                     </Image>
                 </Animated.View>
                 <TouchableOpacity onPress={this._startAnimated.bind(this)}>
                     <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>点击开始动画</Text>
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
        width: Dimensions.get('window').width,
        height: 20,
        marginTop: 0,
        textAlign: 'center',
    },
})

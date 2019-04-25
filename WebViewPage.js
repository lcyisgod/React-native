import React,{Component} from 'react';
import {Text,View,StyleSheet,Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

export default class WebViewPage extends Component {
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View style = {styles.container}>
                <Text style={styles.textStyle}>这是一个WebView</Text>
                <WebView source={{uri:'http://www.jianshu.com/u/d5b531888b2b'}}
                         style={{height:'100%',width: '100%'}}></WebView>
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
})

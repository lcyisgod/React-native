import React,{Component} from 'react'
import {StyleSheet,View,Text,Dimensions,Image} from 'react-native';

export default class ImagePage extends Component{
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        //预加载一个网络图片
        var prefetchTask = Image.prefetch('https://facebook.github.io/react-native/docs/assets/favicon.png');
        prefetchTask.then(()=>{
            console.log('加载图片成功');
        }),error => {
            console.log('加载图片失败');
        }
        //查询图片的磁盘缓存状态
        console.log('图片磁盘地址',Image.queryCache(['https://facebook.github.io/react-native/docs/assets/favicon.png']))
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>加载网络图片需要手动指定图片大小</Text>
                <Image style={{width:50,height:50}}
                       onLoadStart={()=>console.log('开始加载')}
                       onLoad={()=>console.log('加载成功')}
                       onLoadEnd={()=>console.log('加载结束')}
                       onError={()=>console.log('加载失败')}
                       source={{uri:'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                <Text style={styles.textStyle}>加载本地图片</Text>
                <Image source={require('./defaultHead_Account.png')}/>
            </View>
        );
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

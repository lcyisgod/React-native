import Reacta,{Component} from 'react';
import {StyleSheet, Text, View, Animated, Dimensions} from 'react-native';

export class GropPage extends Component{
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View style={styles.container}>
                
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


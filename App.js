import React, { Component } from 'react'  
import { View,StyleSheet} from 'react-native'  
import {WebView} from 'react-native-webview'  
  
export default class App extends Component {  
    render() {  
        return (  
            <View style = {styles.container}>  
                {/*<WebView 
                    source={{html: '<h1>Hello javaTpoint</h1>'}} 
                />*/}  
             {/*   <WebView 
                    source={require("./resources/index.html")} 
                />*/}  
                <WebView  
                    source = {{ uri:'https://quoc-pet-shop.netlify.app' }}  
                />  
            </View>  
        )  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    }  
}) 
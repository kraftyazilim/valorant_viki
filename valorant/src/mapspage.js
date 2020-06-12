import background_File from './res/main.png';
import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Image,
  ImageBackground,
} from 'react-native';

export class mapspage extends Component {
        constructor(props) {
          super(props);
      }

      nextScreen = () =>{
        this.props.navigation.navigate('choosepage');}
      

  render(){
    return (
      <View style = {styles.container}>
      <ImageBackground
              style={{width: '100%', height: '100%'}}
              source={background_File} >
  
             <View  style = {styles.stylestart} >
             <Button title='Başla' onPress={this.nextScreen} color='#ff0054' />
             </View>
  
      </ImageBackground>
  </View>
    );
}
}

const styles = StyleSheet.create({
  stylestart : {
    marginTop:'auto',
    marginBottom:60,
    marginLeft : 70,
    marginRight : 70,

  },
  container: {
    flex: 1,
    backgroundColor : '#7EB3FF',
  },

});



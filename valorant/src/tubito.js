import background_File from './res/main.png';
import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Image,
  ImageBackground,
} from 'react-native';

export class bos extends Component {
    constructor(props) {
      super(props);
    }
  
   
    
    render() {
      return (
        

        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://raw.githubusercontent.com/kraftyazilim/valorant_viki/master/valorant/src/res/smgs.png',
        }}
      />
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
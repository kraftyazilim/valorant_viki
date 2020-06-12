import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Image,
  ImageBackground,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';

import background_File from './res/sections.png';
import agents from './res/agents.jpg';
import weapons from './res/weapons.jpg';
import maps from './res/maps.jpg';
import modes from './res/modes.jpeg';

const DATA = [
  {
    id: '1',
    title: 'AJANLAR',
    image : agents
  },
  {
    id: '2',
    title: 'SİLAHLAR',
    image : weapons
  },
  {
    id: '3',
    title: 'HARİTALAR',
    image : maps
  },
  {
    id: '4',
    title: 'MODLAR',
    image : modes
  }
];



export class choosepage extends Component {
  constructor(props) {
    super(props);
  }

  Item = ({ item }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => this.nextScreen({ item })}  >
          <ImageBackground style={styles.item}
            source={item.image}
            resizeMode="stretch"
          >
            <Text style={styles.box_Text}>{item.title} </Text>
          </ImageBackground>
  
        </TouchableOpacity>
      </View>
    );
  }

  nextScreen = ({item}) => {
    if (item.title == 'AJANLAR'){
    this.props.navigation.navigate('agentspage');} 

    if (item.title == 'SİLAHLAR'){
      this.props.navigation.navigate('agentspage');} 

    if (item.title == 'HARİTALAR'){
    this.props.navigation.navigate('agentspage');} 

    if (item.title == 'MODLAR'){
      this.props.navigation.navigate('agentspage');} 
    
  }
  
  render() {
    return (
      <View>
        <ImageBackground
          style={{ width: '100%', height: '100%' }}
          source={background_File} >
          <View>
            <FlatList
              style={styles.flatList}
              data={DATA}
              renderItem={this.Item}
              keyExtractor={item => item.id}
            />
          </View>
        </ImageBackground>

      </View >
    );
  }
}

const styles = StyleSheet.create({

  item: {
    padding: 1,
    marginHorizontal: 10,
    height: 120,
    width: 'auto',
    marginBottom: 30,
    textAlign: 'center',

  },
  title: {
    fontSize: 32,
  },
  flatList: {
    marginTop: '30%'

  },
  box_Text: {
    fontFamily: 'valorant',
    textAlign: 'center',
    color : 'red',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 20
  }


});



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

import background_File from './res/background.png';
import range from './res/maps_page/range.png';
import bind from './res/maps_page/bind.png';
import split from './res/maps_page/split.png';
import haven from './res/maps_page/haven.png';
import ascent from './res/maps_page/ascent.png';




const DATA = [
  {
    id: '1',
    title: 'POLIGON',
    image : range
  },
  {
    id: '2',
    title: 'BIND',
    image : bind
  },
  {
    id: '3',
    title: 'SPLIT',
    image : split
  },
  {
    id: '4',
    title: 'HAVEN',
    image : haven
  },
  {
    id: '5',
    title: 'ASCENT',
    image : ascent
  }
];



export class mapspage extends Component {
  constructor(props) {
    super(props);
  }

  Item = ({ item }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => this.nextScreen({ item })}  >
          <ImageBackground style={styles.item}
            source={item.image}
            resizeMode="contain"
          >
            <Text style={styles.box_Text}>{item.title} </Text>
          </ImageBackground>
  
        </TouchableOpacity>
      </View>
    );
  }

  nextScreen = ({item}) => {
    
    this.props.navigation.navigate('agentpage',{agent:item.title});}
  
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
    height: 80,
    width: 'auto',
    marginBottom: 30,
    textAlign: 'center'
  },
  title: {
    fontSize: 32,
    
  },
  flatList: {
    marginTop: '30%'

  },
  box_Text: {

    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 20,
    fontFamily : 'valorant',
    color : 'red'
  }


});



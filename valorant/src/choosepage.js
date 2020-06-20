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

import background_File from './res/background.jpg';
import agents from './res/choose_page/choose_agents.png';
import weapons from './res/choose_page/choose_weapons.png';
import maps from './res/choose_page/choose_maps.png';
import modes from './res/choose_page/choose_modes.png';

const DATA = [
  {
    id: '1',
    title: 'AJANLAR',
    image: agents
  },
  {
    id: '2',
    title: 'SILAHLAR',
    image: weapons
  },
  {
    id: '3',
    title: 'HARITALAR',
    image: maps
  },
  {
    id: '4',
    title: 'MODLAR',
    image: modes
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
            resizeMode="contain" >

            <Text style={styles.box_Text}>{item.title} </Text>

          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }

  nextScreen = ({ item }) => {
    if (item.title == 'AJANLAR') {
      this.props.navigation.navigate('agentspage');
    }

    if (item.title == 'SILAHLAR') {
      this.props.navigation.navigate('weaponspage');
    }

    if (item.title == 'HARITALAR') {
      this.props.navigation.navigate('mapspage');
    }

    if (item.title == 'MODLAR') {
      this.props.navigation.navigate('modespage');
    }

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
    height: 150,
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
    color: 'red',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 20
  }


});



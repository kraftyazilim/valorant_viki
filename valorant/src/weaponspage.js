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
import sidearm from './res/sidearms.png';
import smgs from './res/smgs.png';
import rifles from './res/rifles.png';
import shotguns from './res/shotguns.png';
import heavies from './res/heavies.png';
import snipers from './res/snipers.png';
import melees from './res/melees.png';



const DATA = [
  {
    id: '1',
    title: 'TABANCA',
    image : sidearm
  },
  {
    id: '2',
    title: 'HAFIF MAKINELI',
    image : smgs
  },
  {
    id: '3',
    title: 'TUFEK',
    image : rifles
  },
  {
    id: '4',
    title: 'POMPALI',
    image : shotguns
  },
  {
    id: '5',
    title: 'AGIR MAKINELI',
    image : heavies
  },
  {
    id: '6',
    title: 'KESKIN NISANCI',
    image : snipers
  },
  {
    id: '7',
    title: 'BICAK',
    image : melees
  }
];



export class weaponspage extends Component {
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



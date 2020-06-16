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
import background_File from './res/arkaplan.png';
import section_Box from './res/section_Box.png';
import breach from './res/Breach.png';
import brimstone from './res/Brimstone.png';
import cypher from './res/Cypher.png';
import jett from './res/Jett.png';
import omen from './res/Omen.png';





const DATA = [
  {
    id: '1',
    title: 'BREACH',
    image: breach
  },
  {
    id: '2',
    title: 'BRIMSTONE',
    image: brimstone
  },
  {
    id: '3',
    title: 'CYPHER',
    image: cypher
  },
  {
    id: '4',
    title: 'JETT',
    image: jett
  },
  {
    id: '5',
    title: 'OMEN',
    image: omen
  },
  {
    id: '6',
    title: 'PHOENIX',
  },
  {
    id: '7',
    title: 'RAZE',
  },
  {
    id: '8',
    title: 'REYNA',
  },
  {
    id: '9',
    title: 'SAGE',
  },
  {
    id: '10',
    title: 'SOVA',
  },
  {
    id: '11',
    title: 'VIPER',
  }
];



export class agentspage extends Component {
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

              <Text style = {styles.header}> AGENTS</Text>

            
          </View>

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
    height: 500,
    width: 'auto',
    marginBottom: 30,
    textAlign: 'center'
  },
  title: {
    fontSize: 32,
  },
  flatList: {
    marginTop: '5%'

  },
  box_Text: {

    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 20,
    fontFamily : 'valorant',
    color: 'white'
  },

  header : {

    fontFamily : 'valorant',
    fontSize : 45,
    color : 'white',
    marginBottom : 'auto',
    marginTop : 47,
    textAlign : 'center',





  }


});



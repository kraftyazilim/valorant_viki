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
import section_Box from './res/section_Box.png';




const DATA = [
  {
    id: '1',
    title: 'BREACH',
  },
  {
    id: '2',
    title: 'BRIMSTONE',
  },
  {
    id: '3',
    title: 'CYPHER',
  },
  {
    id: '4',
    title: 'JETT',
  },
  {
    id: '5',
    title: 'OMEN',
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
            source={section_Box}
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
    fontSize: 20
  }


});



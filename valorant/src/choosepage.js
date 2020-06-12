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
import { ScrollView } from 'react-native-gesture-handler';


const DATA = [
  {
    id: '1',
    title: 'AJANLAR',
  },
  {
    id: '2',
    title: 'SİLAHLAR',
  },
  {
    id: '3',
    title: 'HARİTALAR',
  },
  {
    id: '4',
    title: 'MODLAR',
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



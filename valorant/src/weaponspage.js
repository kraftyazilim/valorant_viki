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



const DATA = [
  {
    id: '1',
    image : a
  },
  {
    id: '2',
    image : d
  },

  {
    id: '3',
    image : a  
  },
  {
    id: '4',
    image : a    
  },
  {
    id: '5',
    image : a  
  },
  {
    id: '6',
    image : a  
  },
  {
    id: '7',
    image :   acos  
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
            resizeMode="contain" >


            <Text style={styles.box_Text}> </Text>
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
    height: 200,
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

    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 20,
    fontFamily : 'valorant',
    color : 'red'
  }


});



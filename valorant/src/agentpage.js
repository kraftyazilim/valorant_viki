import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Image,
  ImageBackground,
  border,
  borderRadius,
  backgroundColor,
  color,
  Text,
} from 'react-native';

export class agentpage extends Component {

  constructor(props) {
    super(props);
    this.state = {

      link: "dasdsa"
    }
    this.props.navigation.addListener('focus', () => {


      {
      fetch("https://raw.githubusercontent.com/kraftyazilim/valorant_viki/master/data/agents.json")
      .then((res) => res.json())
      .then((json) => {
        json.agents.map(agents => {
          if (agents.name == this.props.route.params.agent) {
            this.setState({ name: agents.name })
            this.setState({ text: agents.text });
            this.setState({ image: agents.image });
          }
        })
      })
      }
    });

  }

  componentDidMount = () => {
    {
      fetch("https://raw.githubusercontent.com/kraftyazilim/valorant_viki/master/data/agents.json")
      .then((res) => res.json())
      .then((json) => {
      json.agents.map(agents => {
        if (agents.name == this.props.route.params.agent) {
          this.setState({ name: agents.name })
            this.setState({ text: agents.text });
            this.setState({ image: agents.image });
        }
      })
    })

    }
  }

  render() {

    return (

      <View style={{ backgroundColor: '#fcfcfc' }} >
        <View>


          <Text>{this.state.name}</Text>
          <Text>{this.state.text}</Text>
          <Image
        style={styles.tinyLogo}
        source={{
          uri: this.state.image,
        }}
      />
          
        
        </View>
      </View>




    );
  }
}


const styles = StyleSheet.create({

  video: {
    marginHorizontal: 'auto',
    width: 200,
    height: 100,
    borderRadius: 10,
  },

  Container: {
    flex: 0
  },


  textBoxStyle: {
    height: '60%',
    

  },

  videoStyle: {
    width: '100%',
    height: '40%'

  },

  titleStyle: {
    fontFamily: 'Ubuntu-R',
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 25,
    color: '#1f4059'

  },

  textStyle: {
    marginHorizontal: '2%',
    fontFamily: 'Ubuntu-L',
    marginTop: '5%',
    textAlign: 'left',
    fontSize: 16,
    color: '#1f4059'

  },

  btnNExt: {



    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    marginBottom: 30




  }


});

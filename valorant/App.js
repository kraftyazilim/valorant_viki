import 'react-native-gesture-handler';
import * as React from 'react';
import { CardStyleInterpolators,createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { mainpage } from './src/mainpage';
import { choosepage } from './src/choosepage';
import { agentspage } from './src/agentspage';
import { weaponspage } from './src/weaponspage';
import { mapspage } from './src/mapspage';
import { modespage } from './src/modespage';
import { agentpage } from './src/agentpage';
import { bos } from './src/tubito';


const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
  }}
  >
       
       
       <Stack.Screen name="mainpage" component={mainpage} />
       <Stack.Screen name="choosepage" component={choosepage} />
       <Stack.Screen name="agentspage" component={agentspage} />
       <Stack.Screen name="weaponspage" component={weaponspage} />
       <Stack.Screen name="mapspage" component={mapspage} />
       <Stack.Screen name="modespage" component={modespage} />
       <Stack.Screen name="agentpage" component={agentpage} />
       <Stack.Screen name="bos" component={bos} />
       

      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
<Stack.Screen name="heavies" component={heavies} />
       <Stack.Screen name="rifles" component={rifles} />
       <Stack.Screen name="shotguns" component={shotguns} />
       <Stack.Screen name="sidearms" component={sidearms} />
       <Stack.Screen name="smgs" component={smgs} />
       <Stack.Screen name="snipers" component={snipers} />


       import { heavies } from './src/weapons/heavies';
import { rifles } from './src/weapons/rifles';
import { shotguns } from './src/weapons/shotguns';
import { sidearms } from './src/weapons/sidearms';
import { smgs } from './src/weapons/smgs';
import { snipers } from './src/weapons/snipers';


*/
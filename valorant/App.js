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

      </Stack.Navigator>
    </NavigationContainer>
  );
}
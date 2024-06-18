import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from '../types/screenStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/home/Home';
import {Album} from '../screens/album/Album';
import {RandomPlayListStack} from '../screens/randomPlaylist/RandomPlaylistStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Album" component={Album} />
        <Stack.Screen name="RandomPlaylist" component={RandomPlayListStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

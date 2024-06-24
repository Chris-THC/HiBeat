import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Album} from '../screens/album/Album';
import {Artist} from '../screens/artist/Artist';
import {Home} from '../screens/home/Home';
import {Player} from '../screens/player/Player';
import {RandomPlayListStack} from '../screens/randomPlaylist/RandomPlaylistStack';
import {RootStackParamList} from '../types/screenStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Album" component={Album} />
        <Stack.Screen name="RandomPlaylist" component={RandomPlayListStack} />
        <Stack.Screen name="Artist" component={Artist} />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Album} from '../screens/album/Album';
import {Artist} from '../screens/artist/Artist';
import {Home} from '../screens/home/Home';
import {Player} from '../screens/player/Player';
import {RandomPlayListStack} from '../screens/randomPlaylist/RandomPlaylistStack';
import {Search} from '../screens/search/Search';
import {StackPlayer} from '../screens/stack/StackPlayer';
import {RootStackParamList} from '../types/screenStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Album" component={Album} />
        <Stack.Screen name="RandomPlaylist" component={RandomPlayListStack} />
        <Stack.Screen name="ArtistScren" component={Artist} />
        <Stack.Screen name="Player" component={Player} />
        <Stack.Screen name="StackPlayer" component={StackPlayer} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

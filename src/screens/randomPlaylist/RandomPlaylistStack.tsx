import React from 'react';
import PlaylistAllItemsList from '../../components/RandomPlaylist/views/PlaylistAllItemsList';
import {useRandomPlaylistStore} from '../../store/randomPlatlistStore/randomPlaylistStore';
import Styles from './styles/RandPlaylistStyles';
import {ScrollView, View} from 'react-native';

export const RandomPlayListStack = () => {
  const {randomPlaylistStore} = useRandomPlaylistStore();
  return (
    <View style={Styles.homeContainer}>
      <ScrollView>
        <PlaylistAllItemsList playlist={randomPlaylistStore} />
      </ScrollView>
    </View>
  );
};

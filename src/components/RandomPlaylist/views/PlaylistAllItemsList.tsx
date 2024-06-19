import React from 'react';
import {FlatList, StyleSheet, View, TouchableOpacity} from 'react-native';
import {RandomPlaylistInterface} from '../../../interfaces/randomPlayList/RandomPlaylist';
import {PlaylistCard} from '../components/PlaylistCard';

interface PropRandomPlaylistInfo {
  playlist: RandomPlaylistInterface[] | null | undefined;
}

const PlaylistAllItemsList: React.FC<PropRandomPlaylistInfo> = ({playlist}) => {
  return (
    <View>
      <FlatList
        data={playlist}
        numColumns={2}
        columnWrapperStyle={{gap: 10, paddingHorizontal: 8}}
        contentContainerStyle={{gap: 10, marginTop: 20}}
        showsHorizontalScrollIndicator={false}
        renderItem={playlistItem => {
          return <PlaylistCard playlist={playlistItem.item} />;
        }}
      />
    </View>
  );
};

export default PlaylistAllItemsList;

const styles = StyleSheet.create({});

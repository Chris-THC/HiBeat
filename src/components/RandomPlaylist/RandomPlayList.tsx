import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/RandPlayliStyle';
import {useRandomPlaylist} from '../../hooks/UsePlaylist/UsePlaylist';
import {PlaylistCard} from './components/PlaylistCard';

export const RandomPlayList = () => {
  const {isLoading, data: albumsArray} = useRandomPlaylist();
  if (isLoading) {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text>RandomPlayList</Text>
      </View>
      <View>
        <Text>Contenido del playlist</Text>
        <View>
          {albumsArray!.slice(0, 10).map((albumItem, index) => (
            <PlaylistCard key={index} playlistInfo={albumItem} />
          ))}
        </View>
      </View>
    </View>
  );
};

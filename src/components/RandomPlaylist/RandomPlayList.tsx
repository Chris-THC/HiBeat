import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles/RandPlayliStyle';
import {useRandomPlaylist} from '../../hooks/UsePlaylist/UsePlaylist';
import {PlaylistCard} from './components/PlaylistCard';
import {FontAwesome6} from '@expo/vector-icons';

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
    <View>
      <TouchableOpacity style={styles.mainTitleContainer}>
        <View>
          <Text style={styles.randomPlaylistMainTitle}>
            Some random playlist
          </Text>
        </View>
        <View>
          <View>
            <Text>
              <FontAwesome6 name="arrow-right-long" size={30} color="#fff" />
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <ScrollView horizontal={true}>
        <View style={styles.mainContainer}>
          {albumsArray!.slice(0, 10).map((albumItem, index) => (
            <TouchableOpacity key={index}>
              <PlaylistCard playlistInfo={albumItem} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

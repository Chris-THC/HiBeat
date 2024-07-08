import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useAlbumRelase} from '../../../hooks/UseAlbumsRelase/UseAlbumRelase';
import {AlbumRelaseCrad} from '../components/AlbumRelaseCrad';
import styles from '../styles/AlbResale';
import {FontAwesome6} from '@expo/vector-icons';
import {RecientlyAlbumLoader} from '../../../utils/skeleton/loaders/RecientlyAlbums/RecientlyAudioLoader';

export const AlbumsResale = () => {
  const {isLoading: loadAlbum, data: albumsRelase, isError} = useAlbumRelase();

  if (loadAlbum) {
    return <RecientlyAlbumLoader />;
  } else if (isError) {
    return <Text>Something went wrong</Text>;
  }

  return (
    <View style={styles.albResaleContainer}>
      <TouchableOpacity style={styles.mainTitleContainer}>
        <View>
          <Text style={styles.albumsResaleMainTitle}>Recently albums</Text>
        </View>
        <View>
          <View>
            <Text>
              <FontAwesome6 name="arrow-right-long" size={30} color="#fff" />
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.albumGrid}>
        {albumsRelase!.slice(0, 9).map((albumItem, index) => (
          <AlbumRelaseCrad key={index} albumRealseInfo={albumItem} />
        ))}
      </View>
    </View>
  );
};

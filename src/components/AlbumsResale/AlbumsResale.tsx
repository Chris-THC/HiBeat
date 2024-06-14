import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useAlbumRelase} from '../../hooks/UseAlbumsRelase/UseAlbumRelase';
import {AlbumRelaseCrad} from './components/AlbumRelaseCrad';
import styles from './styles/AlbResale';

export const AlbumsResale = () => {
  const {isLoading: loadAlbum, data: albumsRelase} = useAlbumRelase();

  if (loadAlbum) {
    return <Text style={{color: '#fff'}}>Cargando albums...</Text>;
  }

  return (
    <View style={styles.albResaleContainer}>
      <View
        style={styles.mainTitleContainer}>
        <View>
          <Text style={styles.albumsResaleMainTitle}>Recently albums</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={{color: '#fff', fontSize: 30}}>{'-->'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.albumGrid}>
        {albumsRelase!.slice(0, 9).map((albumItem, index) => (
          <AlbumRelaseCrad key={index} albumRealseInfo={albumItem} />
        ))}
      </View>
    </View>
  );
};

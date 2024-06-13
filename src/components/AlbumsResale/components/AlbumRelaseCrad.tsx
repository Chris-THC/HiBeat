import React from 'react';
import {Text, View, Image} from 'react-native';
import {AlbumRelaseInterface} from '../../../interfaces/AlbumsRelase/AlbumsRelase';
import styles from '../styles/AlbReleasedCrad';

interface ArtistCard {
  albumRealseInfo: AlbumRelaseInterface;
}

export const AlbumRelaseCrad: React.FC<ArtistCard> = ({albumRealseInfo}) => {
  return (
    <View style={styles.contentCard}>
      <Image
        style={styles.imageAlbumCard}
        source={{uri: albumRealseInfo.artwork}}
      />
      <Text
        style={styles.textArtistName}
        numberOfLines={1}
        ellipsizeMode="tail">
        {albumRealseInfo.artist}
      </Text>
    </View>
  );
};

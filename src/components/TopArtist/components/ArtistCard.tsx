import React from 'react';
import {Text, View, Image} from 'react-native';

import styles from './../styles/ArtistCard';
import {TopArtistInterface} from '../../../interfaces/TopArtistInterface/TopArtist';

interface PropsArtistCard {
  artistInfo: TopArtistInterface;
}

export const ArtistCard: React.FC<PropsArtistCard> = ({artistInfo}) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={styles.artistContentInfo}>
        <View style={styles.artistContentInfoContText}>
          <Text style={styles.artistName}>{artistInfo.nameArtist}</Text>
        </View>
        <Image
          style={styles.imageArtistCard}
          source={{
            uri: artistInfo.imgCover[1].url,
          }}
        />
      </View>
    </View>
  );
};

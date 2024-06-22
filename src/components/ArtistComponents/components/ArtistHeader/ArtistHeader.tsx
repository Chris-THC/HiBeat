import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './ArtistHeaderStyles';
import {ArtistFull} from 'ytmusic-api';
import FastImage from 'react-native-fast-image';

interface PropArtist {
  artistInfo: ArtistFull | null | undefined;
}

export const ArtistHeader: React.FC<PropArtist> = ({artistInfo}) => {
  return (
    <View style={styles.artistHeaderContainer}>
      <Text style={styles.textArtistName}>{artistInfo!.name}</Text>
      <FastImage
        style={{height: 200, width: '100%'}}
        source={{
          uri: artistInfo!.thumbnails[1].url,
          priority: FastImage.priority.high,
        }}
      />
    </View>
  );
};

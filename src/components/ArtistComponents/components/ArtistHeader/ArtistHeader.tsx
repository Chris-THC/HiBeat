import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './ArtistHeaderStyles';
import {ArtistFull} from 'ytmusic-api';
import FastImage from 'react-native-fast-image';

interface PropArtist {
  artistInfo: ArtistFull | null | undefined;
}

export const ArtistImage: React.FC<PropArtist> = ({artistInfo}) => {
  return (
    <FastImage
      style={{height: 285, width: '100%'}}
      source={{
        uri: artistInfo!.thumbnails[1].url,
        priority: FastImage.priority.high,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

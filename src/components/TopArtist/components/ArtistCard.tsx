import RNBounceable from '@freakycoder/react-native-bounceable';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TopArtistInterface } from '../../../interfaces/TopArtistInterface/TopArtist';
import { AndroidColors } from '../../../interfaces/colorsInterface/Colors';
import { ImageColorPalette } from '../../../utils/colors/ColorsFromImg';
import styles from './../styles/ArtistCard';

interface PropsArtistCard {
  artistInfo: TopArtistInterface;
}

export const ArtistCard: React.FC<PropsArtistCard> = ({artistInfo}) => {
  const [colorTaget, setColorTaget] = useState<AndroidColors | null | undefined>(null);

  const GetColorImage = async () => {
    const colorImg = await ImageColorPalette(artistInfo.imgCover[1].url);
    setColorTaget(colorImg);
  };

  useEffect(() => {
    GetColorImage();
  }, []);

  return (
    <RNBounceable
      onPress={() => {
        console.log(artistInfo.idArtist);
      }}
      style={[styles.fullContainer]}>
      <View
        style={[
          styles.artistContentInfo,
          {
            backgroundColor: `${!colorTaget ? '#22242a' : colorTaget?.muted}`,
          },
        ]}>
        <View style={styles.artistContentInfoContText}>
          <Text style={styles.artistName}>{artistInfo.nameArtist}</Text>
        </View>

        <FastImage
          style={styles.imageArtistCard}
          source={{
            uri: artistInfo.imgCover[1].url,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
    </RNBounceable>
  );
};

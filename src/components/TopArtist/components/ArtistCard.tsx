import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './../styles/ArtistCard';
import {TopArtistInterface} from '../../../interfaces/TopArtistInterface/TopArtist';
import {ImageColorPalette} from '../../../utils/colors/ColorsFromImg';
import {AndroidColors} from '../../../interfaces/colorsInterface/Colors';

interface PropsArtistCard {
  artistInfo: TopArtistInterface;
}

export const ArtistCard: React.FC<PropsArtistCard> = ({artistInfo}) => {
  const [colorTaget, setColorTaget] = useState<AndroidColors | null | undefined>(null);

  useEffect(() => {
    const GetColorImage = async () => {
      const colorImg = await ImageColorPalette(artistInfo.imgCover[1].url);
      setColorTaget(colorImg);
    };
    GetColorImage();
  }, []);

  return (
    <View style={styles.fullContainer}>
      <View
        style={[
          styles.artistContentInfo,
          {
            backgroundColor: `${
              !colorTaget ? '#22242a' : colorTaget?.dominant
            }`,
          },
        ]}>
        <View style={styles.artistContentInfoContText}>
          <Text
            style={[
              styles.artistName,
              {color: `${!colorTaget ? '#fff' : colorTaget?.muted}`},
            ]}>
            {artistInfo.nameArtist}
          </Text>
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

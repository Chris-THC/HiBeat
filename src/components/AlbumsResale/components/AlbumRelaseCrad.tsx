import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import {AlbumRelaseInterface} from '../../../interfaces/AlbumsRelase/AlbumsRelase';
import styles from '../styles/AlbReleasedCrad';
import {AndroidColors} from '../../../interfaces/colorsInterface/Colors';
import {ImageColorPalette} from '../../../utils/colors/ColorsFromImg';

interface ArtistCard {
  albumRealseInfo: AlbumRelaseInterface;
}

export const AlbumRelaseCrad: React.FC<ArtistCard> = ({albumRealseInfo}) => {
  const [colorTaget, setColorTaget] = useState<
    AndroidColors | null | undefined
  >(null);

  useEffect(() => {
    const GetColorImage = async () => {
      const colorImg = await ImageColorPalette(albumRealseInfo.artwork);
      setColorTaget(colorImg);
    };
    GetColorImage();
  }, []);

  return (
    <View
      style={[
        styles.contentCard,
        {
          backgroundColor: `${!colorTaget ? '#22242a' : colorTaget?.darkMuted}`,
          borderRadius: 10,
        },
      ]}>
      <Image
        style={styles.imageAlbumCard}
        source={{uri: albumRealseInfo.artwork}}
      />
      <Text
        style={[styles.textArtistName]}
        numberOfLines={1}
        ellipsizeMode="tail">
        {albumRealseInfo.title}
      </Text>
    </View>
  );
};

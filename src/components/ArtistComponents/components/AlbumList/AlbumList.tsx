import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AlbumSummary} from '../../../../interfaces/ArtistInterface/YTMuiscArtistInterface';
import {FlashList} from '@shopify/flash-list';
import FastImage from 'react-native-fast-image';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {AndroidColors} from '../../../../interfaces/colorsInterface/Colors';
import {ImageColorPalette} from '../../../../utils/colors/ColorsFromImg';

import styles from './styles/AlbumListStyles';
import {FontAwesome} from '@expo/vector-icons';

interface AlbumListProps {
  topAlbums: AlbumSummary[];
}

interface AlbumCradProp {
  album: AlbumSummary;
}

const AlbumCard: React.FC<AlbumCradProp> = ({album}) => {
  const [colorTaget, setColorTaget] = useState<
    AndroidColors | null | undefined
  >(null);

  const GetColorImage = async () => {
    const colorImg = await ImageColorPalette(album.thumbnails[1].url);
    setColorTaget(colorImg);
  };

  useEffect(() => {
    GetColorImage();
  }, []);

  return (
    <RNBounceable
      onPress={() => {
        console.log(album.albumId);
      }}
      style={[
        styles.playlistCard,
        {
          backgroundColor: `${!colorTaget ? '#22242a' : colorTaget?.dominant}`,
          borderColor: `${!colorTaget ? '#22242a' : colorTaget?.muted}`,
        },
      ]}>
      <FastImage
        style={styles.imageCrad}
        source={{
          uri: album?.thumbnails?.[1]?.url || album?.thumbnails?.[0]?.url,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <Text style={styles.titleCrad} numberOfLines={1} ellipsizeMode="tail">
        {album.name}
      </Text>

      <View style={styles.playIconOnImage}>
        <FontAwesome name="play" size={25} color="#fff" />
      </View>
    </RNBounceable>
  );
};

export const AlbumList: React.FC<AlbumListProps> = ({topAlbums}) => {
  return (
    <FlashList
      data={topAlbums}
      numColumns={1}
      horizontal={true}
      scrollEnabled={true}
      estimatedItemSize={10}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <AlbumCard album={item} />}
    />
  );
};

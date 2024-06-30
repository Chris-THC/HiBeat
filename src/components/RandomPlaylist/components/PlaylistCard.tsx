import {FontAwesome} from '@expo/vector-icons';
import RNBounceable from '@freakycoder/react-native-bounceable';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AndroidColors} from '../../../interfaces/colorsInterface/Colors';
import {RandomPlaylistInterface} from '../../../interfaces/randomPlayList/RandomPlaylist';
import {ImageColorPalette} from '../../../utils/colors/ColorsFromImg';
import styles from '../styles/PlaylistCardstyles';

interface PropCard {
  playlist: RandomPlaylistInterface;
}

export const PlaylistCard: React.FC<PropCard> = ({playlist}) => {
  const [colorTaget, setColorTaget] = useState<AndroidColors | null | undefined>(null);

  const GetColorImage = async () => {
    const colorImg = await ImageColorPalette(playlist.artwork);
    setColorTaget(colorImg);
  };

  useEffect(() => {
    GetColorImage();
  }, []);

  return (
    <RNBounceable
      onPress={() => {
        console.log(playlist.browseId);
      }}
      style={[
        styles.playlistCard,
        {
          backgroundColor: `${!colorTaget ? '#22242a' : colorTaget?.muted}`,
          borderColor: `${!colorTaget ? '#22242a' : colorTaget?.darkMuted}`,
        },
      ]}>
      <FastImage
        style={styles.imageCrad}
        source={{
          uri: playlist.artwork,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <Text style={styles.titleCrad} numberOfLines={1} ellipsizeMode="tail">
        {playlist.title}
      </Text>

      <View style={styles.playIconOnImage}>
        <FontAwesome name="play" size={25} color="#fff" />
      </View>
    </RNBounceable>
  );
};

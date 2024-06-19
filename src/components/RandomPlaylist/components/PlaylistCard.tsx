import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import {RandomPlaylistInterface} from '../../../interfaces/randomPlayList/RandomPlaylist';
import styles from '../styles/PlaylistCardstyles';
import {FontAwesome} from '@expo/vector-icons';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {AndroidColors} from '../../../interfaces/colorsInterface/Colors';
import {ImageColorPalette} from '../../../utils/colors/ColorsFromImg';

interface PropCard {
  playlist: RandomPlaylistInterface;
}

export const PlaylistCard: React.FC<PropCard> = ({playlist}) => {
  const [colorTaget, setColorTaget] = useState<
    AndroidColors | null | undefined
  >(null);

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
      <Image style={styles.imageCrad} source={{uri: playlist.artwork}} />

      <Text style={styles.titleCrad} numberOfLines={1} ellipsizeMode="tail">
        {playlist.title}
      </Text>

      <View style={styles.playIconOnImage}>
        <FontAwesome name="play" size={25} color="#fff" />
      </View>
    </RNBounceable>
  );
};

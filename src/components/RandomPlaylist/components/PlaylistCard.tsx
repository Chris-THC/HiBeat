import React from 'react';
import {Text, View, Image} from 'react-native';
import {RandomPlaylistInterface} from '../../../interfaces/randomPlayList/RandomPlaylist';
import styles from '../styles/PlaylistCardstyles';
import {FontAwesome} from '@expo/vector-icons';

interface PropsPlaylistCard {
  playlistInfo: RandomPlaylistInterface;
}

export const PlaylistCard: React.FC<PropsPlaylistCard> = ({playlistInfo}) => {
  return (
    <View style={styles.playlistCard}>
      <View>
        <View style={styles.iconPlayOnImageCover}>
          <FontAwesome name="play" size={25} color="#fff" />
        </View>

        <Image
          style={styles.imgPlaylist}
          source={{uri: playlistInfo.artwork}}
        />
      </View>
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.textCard}>
        {playlistInfo.title}
      </Text>
    </View>
  );
};

import React from 'react';
import {Text, View, Image} from 'react-native';
import {RandomPlaylistInterface} from '../../../interfaces/randomPlayList/RandomPlaylist';
import styles from '../styles/PlaylistCardstyles';

interface PropsPlaylistCard {
  playlistInfo: RandomPlaylistInterface;
}

export const PlaylistCard: React.FC<PropsPlaylistCard> = ({playlistInfo}) => {
  return (
    <View style={styles.playlistCard}>
      <View>
        <View
          style={{
            zIndex: 1,
            position: 'absolute',
            bottom: 10,
            left: '10%',
            backgroundColor: '#fff',
            height: 50,
            width: 50,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#111',
              backgroundColor: '#ccc',
            }}>
            Play
          </Text>
        </View>

        <Image
          style={styles.imgPlaylist}
          source={{uri: playlistInfo.artwork}}
        />
      </View>
      <Text style={styles.textCard}>{playlistInfo.title}</Text>
    </View>
  );
};

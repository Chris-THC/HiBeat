import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RandomPlaylistInterface} from '../../../interfaces/randomPlayList/RandomPlaylist';
import Styles from '../styles/PlaylistStackStyles';

interface PropRandomPlaylistInfo {
  playlist: RandomPlaylistInterface[] | null | undefined;
}

const PlaylistAllItemsList: React.FC<PropRandomPlaylistInfo> = ({playlist}) => {
  return (
    <View style={Styles.mainContainer}>
      {playlist!.map((playlist, index) => (
        <View key={index}>
          <Text>{playlist.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default PlaylistAllItemsList;

const styles = StyleSheet.create({});

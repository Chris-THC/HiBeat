import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colorBase} from '../../enums/AppColors';
import {StatusUpBar} from '../../components/StatusBar/StatusUpBar';
import {StackTracks} from '../../components/stackComponents/components/TracksStack';
import TrackPlayer, {Track} from 'react-native-track-player';
import {useTrackStackStore} from '../../store/trackStackStore/GetTrackStore';

export const StackPlayer: React.FC = () => {
  const {trackOnStack} = useTrackStackStore();

  return (
    <View style={styles.contentStack}>
      <StatusUpBar backgroundColor={colorBase} />
      <StackTracks topSongs={trackOnStack!} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentStack: {
    flex: 1,
    backgroundColor: colorBase,
  },
  textStyles: {
    fontSize: 16,
    color: '#fff',
  },
});

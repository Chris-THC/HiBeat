import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useActiveTrack} from 'react-native-track-player';
import {coverImageDefault} from '../../../utils/assets/Images';

export const TrackCover: React.FC = () => {
  const activeTrack = useActiveTrack();
  return (
    <View>
      <FastImage
        style={styles.imgStyles}
        source={{
          uri: activeTrack?.artwork || coverImageDefault,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyles: {
    height: 390,
    width: 390,
    borderRadius: 10,
  },
});

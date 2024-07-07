import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {coverImageDefault} from '../../../utils/assets/Images';

interface PropsTrack {
  cover: string;
}

export const TrackCover: React.FC<PropsTrack> = ({cover}) => {
  return (
    <View>
      <FastImage
        style={styles.imgStyles}
        source={{
          uri: cover || coverImageDefault,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyles: {
    height: 375,
    width: 375,
    borderRadius: 10,
  },
});

import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useActiveTrack} from 'react-native-track-player';
import {colorBase} from '../../../enums/AppColors';
import {AndroidColors} from '../../../interfaces/colorsInterface/Colors';
import {coverImageDefault} from '../../../utils/assets/Images';
import {ImageColorPalette} from '../../../utils/colors/ColorsFromImg';
import {ActionsAndOptions} from '../components/ActionsAndOptions';
import {ProgressAndTrackInfo} from '../components/ProgressAndTrackInfo';
import {TrackCover} from '../components/TrackCover';
import {TrackPlayerControls} from '../components/TrackPlayerControls';
import {StatusUpBar} from '../../StatusBar/StatusUpBar';

export const PlayerScreen = () => {
  const activeTrack = useActiveTrack();
  const [colorCover, setColorCover] = useState<AndroidColors | null>(null);

  const GetColorImage = async () => {
    const colorImg = await ImageColorPalette(
      activeTrack?.artwork || coverImageDefault,
    );
    setColorCover(colorImg);
  };

  useEffect(() => {
    GetColorImage();
  }, [colorCover]);

  return (
    <LinearGradient
      style={styles.container}
      colors={[colorCover?.dominant || colorBase, colorBase]}>
      <StatusUpBar backgroundColor={colorCover?.dominant || colorBase} />
      <View style={styles.imageContainer}>
        <TrackCover />
      </View>
      <View style={styles.titleProgressContainer}>
        <ProgressAndTrackInfo
          // vibrant={colorCover?.muted || '#00457d'}
          lightMuted={colorCover?.vibrant || '#5361b5'}
          mutued={colorCover?.vibrant || '#088bba'}
        />
      </View>
      <View style={styles.controlsContainer}>
        <TrackPlayerControls />
      </View>
      <View style={styles.actionsContainer}>
        <ActionsAndOptions />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 'auto',
  },
  imageContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleProgressContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  controlsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

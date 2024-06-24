import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TrackPlayer, {
  useActiveTrack,
  useProgress,
} from 'react-native-track-player';
import FastImage from 'react-native-fast-image';
import {coverImageDefault} from '../../../utils/assets/Images';
import Slider from '@react-native-community/slider';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {FontAwesome} from '@expo/vector-icons';
import {isTrackPlaying} from '../../../services/TrackPlayerService/TrackPlayerStates';
import {
  handlerNextTrack,
  handlerPause,
  handlerPlay,
  handlerPreviousTrack,
} from '../../../services/TrackPlayerService/TrackPlayerEvents';
import {SimpleLineIcons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';

const TrackCover: React.FC = () => {
  const activeTrack = useActiveTrack();

  return (
    <View>
      <FastImage
        style={{
          height: 390,
          width: 390,
          borderRadius: 10,
        }}
        source={{
          uri: activeTrack?.artwork || coverImageDefault,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

const ProgressAndInfoTrack: React.FC = () => {
  const activeTrack = useActiveTrack();
  const progress = useProgress();

  const format = (seconds: number): string => {
    let mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <View>
      <Slider
        style={styles.progressBar}
        value={progress.position}
        minimumValue={0}
        maximumValue={progress.duration}
        // thumbTintColor={colors.vibrant}
        // maximumTrackTintColor={colors.lightMuted}
        // minimumTrackTintColor={colors.vibrant}
        thumbTintColor={'#00457d'}
        maximumTrackTintColor={'#5361b5'}
        minimumTrackTintColor={'#b281f4'}
        onSlidingComplete={async value => {
          await TrackPlayer.seekTo(Math.round(value));
        }}
      />

      <View style={styles.contentTextSeconds}>
        <Text style={styles.textSeconds}>{format(progress.position)}</Text>
        <Text style={styles.textSeconds}>{format(progress.duration)}</Text>
      </View>

      <View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.artistName}>
          {activeTrack?.title || 'Waiting a new track'}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.titleTrack}>
          {activeTrack?.artist || 'Waiting a new track'}
        </Text>
      </View>
    </View>
  );
};

const TrackPlayerControls: React.FC = () => {
  const isPlaying = isTrackPlaying();

  const StartPlaying = () => {
    isPlaying === false ? handlerPlay() : handlerPause();
  };

  const NextTrack = () => {
    handlerNextTrack();
  };

  const PreviousTrack = () => {
    handlerPreviousTrack();
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '80%',
        height: 50,
      }}>
      <RNBounceable onPress={PreviousTrack}>
        <FontAwesome name="step-backward" size={35} color="#fff" />
      </RNBounceable>

      <RNBounceable onPress={StartPlaying}>
        {isPlaying ? (
          <FontAwesome name="pause" size={35} color="#fff" />
        ) : (
          <FontAwesome name="play" size={35} color="#fff" />
        )}
      </RNBounceable>

      <RNBounceable onPress={NextTrack}>
        <FontAwesome name="step-forward" size={35} color="#fff" />
      </RNBounceable>
    </View>
  );
};

const ActionsAndOptions: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 50,
      }}>
      <RNBounceable
        style={{
          width: 40,
          height: 40,
          marginHorizontal: 10,
        }}>
        <MaterialIcons name="queue-music" size={40} color="#fff" />
      </RNBounceable>
      <RNBounceable>
        <SimpleLineIcons name="options-vertical" size={30} color="#fff" />
      </RNBounceable>
    </View>
  );
};

export const PlayerScreen = () => {
  // const activeTrack = useActiveTrack();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TrackCover />
      </View>
      <View style={styles.titleProgressContainer}>
        <ProgressAndInfoTrack />
      </View>
      <View style={styles.controlsContainer}>
        <TrackPlayerControls />
      </View>
      <View style={styles.actionsContainer}>
        <ActionsAndOptions />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 6, // Ocupa 50% del espacio disponible
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#00b2ff',
  },
  titleProgressContainer: {
    flex: 2, // Ocupa 30% del espacio disponible
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: '#00d4ff',
  },
  controlsContainer: {
    flex: 1, // Ocupa 10% del espacio disponible
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#00fdf2',
  },
  actionsContainer: {
    flex: 1, // Ocupa 10% del espacio disponible
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#a1ffe3',
  },

  // Progress styles:
  progressBar: {
    alignSelf: 'stretch',
    marginTop: 20,
  },
  textSeconds: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  contentTextSeconds: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
  // text trackInfo
  artistName: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  titleTrack: {
    fontSize: 16,
    color: '#ccc',
    fontWeight: '600',
    marginVertical: 8,
    textAlign: 'center',
  },
});

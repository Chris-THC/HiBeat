import {FontAwesome} from '@expo/vector-icons';
import RNBounceable from '@freakycoder/react-native-bounceable';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  handlerNextTrack,
  handlerPreviousTrack,
  togglePlayback,
} from '../../../services/TrackPlayerService/TrackPlayerEvents';
import {useIsTrackPlaying} from '../../../services/TrackPlayerService/TrackPlayerStates';

export const TrackPlayerControls: React.FC = () => {
  const isPlaying = useIsTrackPlaying();

  const NextTrack = () => {
    handlerNextTrack();
  };

  const PreviousTrack = () => {
    handlerPreviousTrack();
  };

  return (
    <View style={styles.controlsContainer}>
      <RNBounceable onPress={PreviousTrack}>
        <FontAwesome name="step-backward" size={35} color="#fff" />
      </RNBounceable>

      <RNBounceable onPress={togglePlayback}>
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

const styles = StyleSheet.create({
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '80%',
    height: 50,
  },
});

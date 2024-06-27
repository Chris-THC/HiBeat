import Slider from '@react-native-community/slider';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TrackPlayer, {
  useActiveTrack,
  useProgress,
} from 'react-native-track-player';

interface PropsColors {
  lightMuted: string;
  mutued: string;
}

export const ProgressAndTrackInfo: React.FC<PropsColors> = ({
  lightMuted,
  mutued,
}) => {
  const activeTrack = useActiveTrack();
  const progress = useProgress();

  const formatToSeconds = (seconds: number): string => {
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
        thumbTintColor={mutued}
        maximumTrackTintColor={lightMuted}
        minimumTrackTintColor={mutued}
        // thumbTintColor={'#00457d'}
        // maximumTrackTintColor={'#5361b5'}
        // minimumTrackTintColor={'#208ed8'}
        onSlidingComplete={async (time: number) => {
          await TrackPlayer.seekTo(Math.round(time));
        }}
      />

      <View style={styles.contentTextSeconds}>
        <Text style={styles.textSeconds}>
          {formatToSeconds(progress.position)}
        </Text>
        <Text style={styles.textSeconds}>
          {formatToSeconds(progress.duration)}
        </Text>
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

const styles = StyleSheet.create({
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

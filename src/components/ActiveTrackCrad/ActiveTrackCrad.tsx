import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {FontAwesome} from '@expo/vector-icons';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import TextTicker from 'react-native-text-ticker';
import {useActiveTrack} from 'react-native-track-player';
import {useIsTrackPlaying} from '../../services/TrackPlayerService/TrackPlayerStates';
import {RootStackParamList} from '../../types/screenStack';
import {coverImageDefault} from '../../utils/assets/Images';
import {togglePlayback} from '../../services/TrackPlayerService/TrackPlayerEvents';

export const ActiveTrackCrad: React.FC = () => {
  const activeTrack = useActiveTrack();
  const isPlaying = useIsTrackPlaying();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <RNBounceable
      onPress={() => navigation.navigate('Player')}
      style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: activeTrack?.artwork || coverImageDefault,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.infoContainer}>
        <TextTicker
          style={styles.artistName}
          duration={9000}
          loop
          bounce={true}
          repeatSpacer={40}
          marqueeDelay={30}>
          {`${activeTrack?.title || 'Waiting a new track'}  •  ${
            activeTrack?.artist || 'Waiting Artist'
          }`}
        </TextTicker>
      </View>
      <RNBounceable onPress={togglePlayback} style={styles.actionsContainer}>
        {isPlaying ? (
          <FontAwesome name="pause" size={22} color="#fff" />
        ) : (
          <FontAwesome name="play" size={22} color="#fff" />
        )}
      </RNBounceable>
    </RNBounceable>
  );
};

const styles = StyleSheet.create({
  navPlayerContent: {
    height: 58,
    backgroundColor: '#202125',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white', // Para que el texto sea visible sobre el fondo semitransparente
  },

  // TrackSection
  container: {
    height: 65,
    backgroundColor: '#202125',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 2,
  },
  imageContainer: {
    flex: 1, // 10%
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 55,
    width: 55,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 4, // 40%
    justifyContent: 'center',
    marginLeft: 10,
    height: '100%',
  },
  trackName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  artistName: {
    color: '#ccc',
    fontSize: 16,
    fontWeight: '500',
  },
  actionsContainer: {
    flex: 2 / 3,
    alignItems: 'center',
    height: 45,
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 5,
  },
});

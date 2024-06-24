import {FontAwesome} from '@expo/vector-icons';
import RNBounceable from '@freakycoder/react-native-bounceable';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useActiveTrack} from 'react-native-track-player';
import {
  handlerPause,
  handlerPlay,
} from '../../services/TrackPlayerService/TrackPlayerEvents';
import {isTrackPlaying} from '../../services/TrackPlayerService/TrackPlayerStates';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/screenStack';
import {coverImageDefault} from '../../utils/assets/Images';

export const ActiveTrackCrad: React.FC = () => {
  const activeTrack = useActiveTrack();
  const isPlaying = isTrackPlaying();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <RNBounceable
      onPress={() => {
        // console.log('Click');
        navigation.navigate('Player');
      }}
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
        <Text style={styles.artistName}>
          {`${activeTrack?.title || 'Waiting a new track'}  •  ${
            activeTrack?.artist || 'Waiting Artist'
          }`}
        </Text>
      </View>
      <RNBounceable
        onPress={() => {
          isPlaying === false ? handlerPlay() : handlerPause();
        }}
        style={styles.actionsContainer}>
        {isPlaying ? (
          <FontAwesome name="pause" size={25} color="#fff" />
        ) : (
          <FontAwesome name="play" size={25} color="#fff" />
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
    flex: 4, //40%
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
    flex: 1, // 20%
    alignItems: 'center',
  },
});

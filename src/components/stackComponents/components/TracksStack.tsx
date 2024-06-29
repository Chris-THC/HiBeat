import {Entypo} from '@expo/vector-icons';
import RNBounceable from '@freakycoder/react-native-bounceable';
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import TrackPlayer, {Track} from 'react-native-track-player';
import {handlerPlay} from '../../../services/TrackPlayerService/TrackPlayerEvents';
import {formatToSeconds} from '../../../utils/time/SecondsToMinutes';
import {FlashList} from '@shopify/flash-list';

interface PropsTrackList {
  topSongs: Track[];
}

interface PropTrackCard {
  track: Track;
  position: number;
  onTrackSelect: (position: number) => void;
}

const TrackCard: React.FC<PropTrackCard> = ({
  track,
  position,
  onTrackSelect,
}) => {
  return (
    <RNBounceable
      onPress={() => onTrackSelect(position)}
      style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: track.artwork,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.trackName}>
          {track.title}
        </Text>
        <Text style={styles.artistName}>
          {`${track.artist}  •  ${formatToSeconds(track.duration!)}`}
        </Text>
      </View>
      <RNBounceable
        onPress={() => console.log('Opciones')}
        style={styles.actionsContainer}>
        <Entypo name="dots-three-horizontal" size={25} color="#fff" />
      </RNBounceable>
    </RNBounceable>
  );
};

export const StackTracks: React.FC<PropsTrackList> = ({topSongs}) => {
  const handleSelectTrack = async (position: number) => {
    await TrackPlayer.skip(position);
    handlerPlay();
  };

  return (
    <View style={{minHeight: '100%'}}>
      <View style={styles.contentSubTitles}>
        <Text style={styles.subTitleText}>Tracks into the stack</Text>
      </View>

      <FlashList
        data={topSongs}
        numColumns={1}
        scrollEnabled={true}
        estimatedItemSize={40}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TrackCard
            track={item}
            position={index}
            onTrackSelect={handleSelectTrack}
          />
        )}
      />

      {/* <ScrollView style={{flex: 1}}>
        {topSongs!.map((track, index) => (
          <TrackCard
            track={track}
            position={index}
            onTrackSelect={handleSelectTrack}
          />
        ))}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  imageContainer: {
    flex: 1, // 10%
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 60,
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

  contentSubTitles: {
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  subTitleText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
    marginLeft: 5,
    marginVertical: 10,
  },

  btnPlayAll: {
    height: 40,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnPlayAllText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#ccc',
    flexShrink: 1,
    textShadowColor: 'rgba(1, 0, 0, 1)',
    textShadowOffset: {width: -0.5, height: 1},
    textShadowRadius: 1,
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {Song} from '../../../../interfaces/ArtistInterface/YTMuiscArtistInterface';
import FastImage from 'react-native-fast-image';
import {Entypo} from '@expo/vector-icons';

interface PropsTrackList {
  topSongs: Song[];
}

interface PropTrackCard {
  track: Song;
}

const TrackCard: React.FC<PropTrackCard> = ({track}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: track?.thumbnails?.[1]?.url || track?.thumbnails?.[0]?.url,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.trackName}>
          {track.name}
        </Text>
        <Text style={styles.artistName}>
          {`${track.artist.name}  •  ${track.type}`}
        </Text>
      </View>
      <View style={styles.actionsContainer}>
        <Entypo name="dots-three-horizontal" size={25} color="#fff" />
      </View>
    </View>
  );
};

export const TrackList: React.FC<PropsTrackList> = ({topSongs}) => {
  return (
    <FlashList
      data={topSongs}
      numColumns={1}
      scrollEnabled={true}
      estimatedItemSize={8}
      renderItem={({item}) => <TrackCard track={item} />}
    />
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
});

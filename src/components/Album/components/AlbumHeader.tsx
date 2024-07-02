import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AlbumDetailed} from '../../../interfaces/SerachInterface/AlbumDetails';
import {AlbumSearch} from '../../../interfaces/AlbumSearch/AlbumSearch';

interface PropArtist {
  albumInfoSelected: AlbumSearch;
}

export const AlbumHeader: React.FC<PropArtist> = ({albumInfoSelected}) => {
  return (
    <View style={styles.contenAlbumHeader}>
      <View>
        <FastImage
          style={styles.imageStyles}
          source={{
            uri:
              albumInfoSelected?.thumbnails?.[4]?.url ||
              albumInfoSelected?.thumbnails?.[3]?.url,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.contentText}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.artistName}>
          {albumInfoSelected!.name}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.artistArtist}>
          {albumInfoSelected!.artist.name}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.yearText}>{`Year • ${albumInfoSelected!.year}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyles: {
    height: 150,
    width: 150,
    borderRadius: 5,
  },
  contenAlbumHeader: {
    height: 250,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  contentText: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'center',
    color: '#fff',
    marginLeft: 10,
    height: '85%',
    width: '60%',
  },

  artistName: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 2,
    color: '#fff',
    marginTop: 8,
    flexShrink: 1,
    textShadowColor: 'rgba(1, 0, 0, 1)',
    textShadowOffset: {width: -0.5, height: 1},
    textShadowRadius: 10,
  },
  artistArtist: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginHorizontal: 2,
    color: '#fff',
    marginTop: 8,
    flexShrink: 1,
    textShadowColor: 'rgba(1, 0, 0, 1)',
    textShadowOffset: {width: -0.5, height: 1},
    textShadowRadius: 3,
  },
  yearText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginHorizontal: 2,
    color: '#fff',
    marginTop: 8,
    flexShrink: 1,
    textShadowColor: 'rgba(1, 0, 0, 1)',
    textShadowOffset: {width: -0.5, height: 1},
    textShadowRadius: 3,
  },
});

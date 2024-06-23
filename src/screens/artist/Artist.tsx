import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {TrackList} from '../../components/ArtistComponents/components/TrackList/TrackList';
import {StatusUpBarTransparent} from '../../components/StatusBar/StatusUpBarTransparent';
import {colorBase} from '../../enums/AppColors';
import {useArtistInfoById} from '../../hooks/UseYtMusic/UserYtMusic';
import {useArtistStore} from '../../store/artistStore/artistStore';
import styles from './styles/Artiststyles';
import {AlbumList} from '../../components/ArtistComponents/components/AlbumList/AlbumList';

export const Artist = () => {
  const {artistId} = useArtistStore();
  const {isLoading, data: artistData} = useArtistInfoById(artistId);

  if (isLoading) {
    return (
      <View style={styles.artistMainContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: colorBase}}>
      <StatusUpBarTransparent />
      <ScrollView>
        <View style={{position: 'relative'}}>
          <FastImage
            style={{height: 250, width: '100%'}}
            source={{
              uri: artistData!.thumbnails[1].url,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />

          <LinearGradient
            colors={['transparent', colorBase]}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 490,
            }}
          />
        </View>

        <View style={styles.artistNameContainer}>
          <Text style={styles.artistNameText}>{artistData!.name}</Text>
        </View>

        <View style={{flex: 1}}>
          <Text style={styles.subTitleText}>Popular Songs</Text>
          <TrackList topSongs={artistData!.topSongs} />
        </View>

        <View>
          <Text style={styles.subTitleText}>Popular Albums</Text>
          <AlbumList topAlbums={artistData!.topAlbums} />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              artistData?.similarArtists.map(info => {
                console.log(info);
              });
            }}>
            <Text style={styles.subTitleText}>Show More</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

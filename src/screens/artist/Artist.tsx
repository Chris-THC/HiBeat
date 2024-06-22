import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ArtistImage} from '../../components/ArtistComponents/components/ArtistHeader/ArtistHeader';
import {StatusUpBarTransparent} from '../../components/StatusBar/StatusUpBarTransparent';
import {colorBase} from '../../enums/AppColors';
import {useArtistInfoById} from '../../hooks/UseYtMusic/UserYtMusic';
import {useArtistStore} from '../../store/artistStore/artistStore';
import styles from './styles/Artiststyles';
import {TrackList} from '../../components/ArtistComponents/components/TrackList/TrackList';

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
    <View style={{flex: 1}}>
      <StatusUpBarTransparent />
      <ArtistImage artistInfo={artistData} />
      <LinearGradient
        style={styles.gradient}
        colors={['transparent', colorBase, colorBase, colorBase, colorBase]}
        locations={[0.04, 0.34, 0.32, 0.5, 1]}>
        <View style={styles.artistNameContainer}>
          <Text style={styles.artistNameText}>{artistData!.name}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 25,
              color: '#fff',
              fontWeight: '700',
              marginLeft: 10,
              marginBottom: 10,
            }}>
            Popular Songs
          </Text>
          <TrackList topSongs={artistData!.topSongs} />
        </View>
      </LinearGradient>
    </View>
  );
};

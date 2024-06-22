import React from 'react';
import {Text, View} from 'react-native';
import {useArtistStore} from '../../store/artistStore/artistStore';
import {useArtistInfoById} from '../../hooks/UseYtMusic/UserYtMusic';
import styles from './styles/Artiststyles';
import {ArtistHeader} from '../../components/ArtistComponents/components/ArtistHeader/ArtistHeader';

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
    <View style={styles.artistMainContainer}>
      <ArtistHeader artistInfo={artistData} />
    </View>
  );
};

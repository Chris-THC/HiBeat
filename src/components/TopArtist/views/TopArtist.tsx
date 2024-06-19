import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {Text, View} from 'react-native';
import {useTopArtistGlobal} from '../../../hooks/UseTopArtist/UseTopArtist';
import {ArtistCard} from '../components/ArtistCard';
import styles from '../styles/TopArtistSryles';

export const TopArtist = () => {
  const {data: Top10, isLoading: isLoadingTop10} = useTopArtistGlobal();

  if (isLoadingTop10) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.topArtistContent}>
      <View>
        <Text style={styles.artistMainTitle}>Top Artist</Text>
      </View>
      <FlashList
        data={Top10}
        renderItem={({item}) => <ArtistCard artistInfo={item} />}
        estimatedItemSize={20}
        scrollEnabled={true}
        horizontal={true}
      />
    </View>
  );
};

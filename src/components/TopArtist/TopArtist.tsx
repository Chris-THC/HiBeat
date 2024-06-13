import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useTopArtistGlobal} from '../../hooks/UseTopArtist/UseTopArtist';
import {ArtistCard} from './components/ArtistCard';
import styles from './styles/TopArtistSryles';

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
      <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row', width:"auto"}}>
          {Top10?.map((artistItem, index) => (
            <ArtistCard key={index} artistInfo={artistItem} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
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
      <View>
        <Text style={styles.artistMainTitle}>Top Artist</Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row', width: 'auto'}}>
          {Top10?.map((artistItem, index) => (
            <TouchableOpacity key={index}>
              <ArtistCard artistInfo={artistItem} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

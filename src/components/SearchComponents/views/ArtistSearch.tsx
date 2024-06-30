import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colorBase} from '../../../enums/AppColors';
import {useSearchStore} from '../../../store/searchStore/SearchStore';
import {ArtistListSearch} from '../components/ArtistListSearch';

export const ArtistSearch = () => {
  const {artistList} = useSearchStore();

  return (
    <View style={styles.artistContent}>
      <ArtistListSearch artistArray={artistList!} />
    </View>
  );
};

const styles = StyleSheet.create({
  artistContent: {
    flex: 1,
    backgroundColor: colorBase,
  },
});

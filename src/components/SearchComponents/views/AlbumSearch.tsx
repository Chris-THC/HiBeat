import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colorBase} from '../../../enums/AppColors';
import {AlbumsListSearch} from '../components/AlbumsListSearch';
import {useSearchStore} from '../../../store/searchStore/SearchStore';

export const AlbumSearch = () => {
  const {albumsList} = useSearchStore();

  return (
    <View style={styles.albumContent}>
      <AlbumsListSearch albumArray={albumsList!} />
    </View>
  );
};

const styles = StyleSheet.create({
  albumContent: {
    flex: 1,
    backgroundColor: colorBase,
  },
});

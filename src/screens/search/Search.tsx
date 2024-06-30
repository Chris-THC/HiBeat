import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ActiveTrackCrad} from '../../components/ActiveTrackCrad/ActiveTrackCrad';
import {SearchForm} from '../../components/SearchComponents/components/SearchForm';
import {TrackListSerach} from '../../components/SearchComponents/components/TrackListSearch';
import {StatusUpBar} from '../../components/StatusBar/StatusUpBar';
import {colorBase} from '../../enums/AppColors';
import {useSearchStore} from '../../store/searchStore/SearchStore';

export const Search = () => {
  const {trackList} = useSearchStore();

  return (
    <View style={styles.container}>
      <ScrollView style={{backgroundColor: colorBase}}>
        <StatusUpBar backgroundColor={colorBase} />
        <SearchForm />
        {!trackList ? (
          <View style={styles.container}></View>
        ) : (
          <TrackListSerach topSongs={trackList!} />
        )}
      </ScrollView>
      <ActiveTrackCrad />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorBase,
  },
});

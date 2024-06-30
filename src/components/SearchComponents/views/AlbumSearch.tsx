import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colorBase} from '../../../enums/AppColors';

export const AlbumSearch = () => {
  return (
    <View style={styles.albumContent}>
      <Text style={{color: '#fff', fontSize: 19}}>AlbumSearch</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  albumContent: {
    flex: 1,
    backgroundColor: colorBase,
  },
});

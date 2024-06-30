import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ArtistDetailed} from '../../../interfaces/SerachInterface/ArtistDetails';
import {FlashList} from '@shopify/flash-list';
import {colorBase} from '../../../enums/AppColors';

interface PropArtist {
  artistArray: ArtistDetailed[];
}

export const ArtistListSearch: React.FC<PropArtist> = ({artistArray}) => {
  return (
    <View style={styles.listArtist}>
      <FlashList
        data={artistArray}
        numColumns={1}
        scrollEnabled={true}
        estimatedItemSize={20}
        renderItem={({item, index}) => (
          <View>
            <Text style={{color: '#ccc', fontSize: 19}}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listArtist: {
    flex: 1,
    backgroundColor: colorBase,
  },
});

import {FontAwesome6} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RandomPlaylistInterface} from '../../../interfaces/randomPlayList/RandomPlaylist';
import {RootStackParamList} from '../../../types/screenStack';
import {PlaylistCard} from '../components/PlaylistCard';
import styles from '../styles/PlaylistAllItemsListStyles';

interface PropRandomPlaylistInfo {
  playlist: RandomPlaylistInterface[] | null | undefined;
}

export const PlaylistAllItemsList: React.FC<PropRandomPlaylistInfo> = ({
  playlist,
}) => {
  const navigateTo =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const GoBackScreen = () => {
    navigateTo.goBack();
  };

  return (
    <>
      <TouchableOpacity
        onPress={GoBackScreen}
        style={styles.mainTitleContainer}>
        <View>
          <Text>
            <FontAwesome6 name="arrow-left-long" size={30} color="#fff" />
          </Text>
        </View>
        <View>
          <Text style={styles.randomPlaylistMainTitle}>
            Some random playlist
          </Text>
        </View>
        <View></View>
      </TouchableOpacity>

      {/* <FlatList
        data={playlist}
        numColumns={2}
        columnWrapperStyle={{gap: 8, paddingHorizontal: 5}}
        contentContainerStyle={{gap: 8, marginTop: 8}}
        showsHorizontalScrollIndicator={false}
        renderItem={playlistItem => {
          return <PlaylistCard playlist={playlistItem.item} />;
        }}
      /> */}

      <FlashList
        data={playlist}
        numColumns={2}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={50}
        renderItem={({item}) => <PlaylistCard playlist={item} />}
      />
    </>
  );
};

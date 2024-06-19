import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {RandomPlaylistInterface} from '../../../interfaces/randomPlayList/RandomPlaylist';
import {PlaylistCard} from '../components/PlaylistCard';
import {FontAwesome6} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/screenStack';
interface PropRandomPlaylistInfo {
  playlist: RandomPlaylistInterface[] | null | undefined;
}

const PlaylistAllItemsList: React.FC<PropRandomPlaylistInfo> = ({playlist}) => {
  const navigateTo = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const GoBackScreen = () => {
    navigateTo.goBack();
  };

  return (
    <View>
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
      <FlatList
        data={playlist}
        numColumns={2}
        columnWrapperStyle={{gap: 8, paddingHorizontal: 5}}
        contentContainerStyle={{gap: 8, marginTop: 8}}
        showsHorizontalScrollIndicator={false}
        renderItem={playlistItem => {
          return <PlaylistCard playlist={playlistItem.item} />;
        }}
      />
    </View>
  );
};

export default PlaylistAllItemsList;

const styles = StyleSheet.create({
  mainTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginVertical: 16,
    alignItems: 'center',
  },
  randomPlaylistMainTitle: {
    color: '#fff',
    fontSize: 25,
  },
});

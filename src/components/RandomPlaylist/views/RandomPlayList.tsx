import React from 'react';
import styles from '../styles/RandPlayliStyle';
import {RootStackParamList} from '../../../types/screenStack';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useRandomPlaylist} from '../../../hooks/UsePlaylist/UsePlaylist';
import {PlaylistCard} from '../components/PlaylistCard';
import {FontAwesome6} from '@expo/vector-icons';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useRandomPlaylistStore} from '../../../store/randomPlatlistStore/randomPlaylistStore';

export const RandomPlayList = () => {
  const {isLoading, data: albumsArray} = useRandomPlaylist();
  const navigateTo =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {setRandomPlaylistStore} = useRandomPlaylistStore();

  const ChangeScreen = () => {
    setRandomPlaylistStore(albumsArray);
    navigateTo.navigate('RandomPlaylist');
  };

  if (isLoading) {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View>
      <TouchableOpacity
        onPress={ChangeScreen}
        style={styles.mainTitleContainer}>
        <View>
          <Text style={styles.randomPlaylistMainTitle}>
            Some random playlist
          </Text>
        </View>
        <View>
          <View>
            <Text>
              <FontAwesome6 name="arrow-right-long" size={30} color="#fff" />
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <ScrollView horizontal={true}>
        <View style={styles.mainContainer}>
          {albumsArray!.slice(0, 10).map((albumItem, index) => (
            <View style={{marginHorizontal: 8}} key={index}>
              <PlaylistCard playlist={albumItem} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TopArtist} from '../../components/TopArtist/views/TopArtist';
import {RootStackParamList} from '../../types/screenStack';
import styles from './styles/HomeSyles';
import {StatusUpBar} from '../../components/StatusBar/StatusUpBar';
import {colorBase} from '../../enums/AppColors';
import {AlbumsResale} from '../../components/AlbumsResale/views/AlbumsResale';
import {RandomPlayList} from '../../components/RandomPlaylist/views/RandomPlayList';

export const Home = () => {
  // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.homeContainer}>
      <StatusUpBar backgroundColor={colorBase} />

      <ScrollView>
        <View>
          <TopArtist />
        </View>
        <View>
          <AlbumsResale />
        </View>
        <View>
          <RandomPlayList />
        </View>
      </ScrollView>
    </View>
  );
};
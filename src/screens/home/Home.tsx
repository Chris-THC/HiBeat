import React from 'react';
import { ScrollView, View } from 'react-native';
import { AlbumsResale } from '../../components/AlbumsResale/views/AlbumsResale';
import { RandomPlayList } from '../../components/RandomPlaylist/views/RandomPlayList';
import { StatusUpBar } from '../../components/StatusBar/StatusUpBar';
import { TopArtist } from '../../components/TopArtist/views/TopArtist';
import { colorBase } from '../../enums/AppColors';
import styles from './styles/HomeSyles';

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

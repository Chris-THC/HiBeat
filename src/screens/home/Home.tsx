import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TopArtist} from '../../components/TopArtist/TopArtist';
import {RootStackParamList} from '../../types/screenStack';
import styles from './styles/HomeSyles';
import {StatusUpBar} from '../../components/StatusBar/StatusUpBar';
import {colorBase} from '../../enums/AppColors';
import {AlbumsResale} from '../../components/AlbumsResale/AlbumsResale';

export const Home = () => {
  // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.homeContainer}>
      <StatusUpBar backgroundColor={colorBase} />

      <ScrollView>
        <View>
          <Text style={styles.artistMainTitle}>Top Artist</Text>
          <TopArtist />
        </View>
        <View>
          <AlbumsResale />
        </View>
      </ScrollView>
    </View>
  );
};

{
  /* <TouchableOpacity
        style={{height: 35, width: 200, backgroundColor: 'orange'}}
        onPress={() => navigation.navigate('Album')}>
        <Text style={{color: '#fff', fontSize: 18}}>Go to play</Text>
      </TouchableOpacity> */
}

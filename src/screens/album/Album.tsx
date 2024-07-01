import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AlbumHeader} from '../../components/Album/components/AlbumHeader';
import {TrackListByAlbum} from '../../components/Album/components/TrackListByAlbum';
import {StatusUpBar} from '../../components/StatusBar/StatusUpBar';
import {colorBase} from '../../enums/AppColors';
import {useAlbumById} from '../../hooks/UseAlbum/UseAlbum';
import {AndroidColors} from '../../interfaces/colorsInterface/Colors';
import {useAlbumStore} from '../../store/albumStore/albumStore';
import {ImageColorPalette} from '../../utils/colors/ColorsFromImg';
// const navigation =
//   useNavigation<NativeStackNavigationProp<RootStackParamList>>();

export const Album = () => {
  const {albumInfoSelected} = useAlbumStore();
  const {isLoading, data: albumData} = useAlbumById(albumInfoSelected!.albumId);

  const [colorTaget, setColorTaget] = useState<AndroidColors | null>(null);

  const GetColorImage = async () => {
    const colorImg = await ImageColorPalette(
      albumInfoSelected!.thumbnails?.[4]?.url ||
        albumInfoSelected!.thumbnails?.[3]?.url,
    );
    setColorTaget(colorImg);
  };

  useEffect(() => {
    GetColorImage();
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colorBase,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.albumContainer}>
      <ScrollView>
        <StatusUpBar backgroundColor={colorTaget?.dominant || colorBase} />
        <LinearGradient
          colors={[
            colorTaget?.dominant || colorBase,
            colorTaget?.dominant || colorBase,
            colorBase,
          ]}
          locations={[0.01, 0.3, 1]}
          style={{flex: 1}}>
          <AlbumHeader albumInfoSelected={albumInfoSelected!} />
        </LinearGradient>
        <View style={{position: 'relative', top: -69}}>
          <TrackListByAlbum topSongs={albumData!.songs} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  albumContainer: {
    flex: 1,
    backgroundColor: colorBase,
  },
  imageStyles: {
    height: 150,
    width: 150,
    borderRadius: 5,
  },
  contenAlbumHeader: {
    height: 200,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  contentText: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'center',
    color: '#fff',
    marginLeft: 10,
    height: '85%',
    width: '60%',
  },

  artistName: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 2,
    color: '#fff',
    marginTop: 8,
    flexShrink: 1,
    textShadowColor: 'rgba(1, 0, 0, 1)',
    textShadowOffset: {width: -0.5, height: 1},
    textShadowRadius: 10,
  },
  artistArtist: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginHorizontal: 2,
    color: '#fff',
    marginTop: 8,
    flexShrink: 1,
    textShadowColor: 'rgba(1, 0, 0, 1)',
    textShadowOffset: {width: -0.5, height: 1},
    textShadowRadius: 3,
  },
  yearText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginHorizontal: 2,
    color: '#fff',
    marginTop: 8,
    flexShrink: 1,
    textShadowColor: 'rgba(1, 0, 0, 1)',
    textShadowOffset: {width: -0.5, height: 1},
    textShadowRadius: 3,
  },
});

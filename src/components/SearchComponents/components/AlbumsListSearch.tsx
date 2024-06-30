import RNBounceable from '@freakycoder/react-native-bounceable';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colorBase } from '../../../enums/AppColors';
import { AlbumDetailed } from '../../../interfaces/SerachInterface/AlbumDetails';
import { AndroidColors } from '../../../interfaces/colorsInterface/Colors';
import { useArtistStore } from '../../../store/artistStore/artistStore';
import { RootStackParamList } from '../../../types/screenStack';
import { ImageColorPalette } from '../../../utils/colors/ColorsFromImg';

interface PropArtist {
  albumArray: AlbumDetailed[];
}
interface PropCradArtist {
  album: AlbumDetailed;
}

const CradAalbum: React.FC<PropCradArtist> = ({album}) => {
  const {setArtistId} = useArtistStore();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [colorTaget, setColorTaget] = useState<AndroidColors | null>(null);

  const GetColorImage = async () => {
    const colorImg = await ImageColorPalette(
      album?.thumbnails?.[1]?.url || album?.thumbnails?.[0]?.url,
    );
    setColorTaget(colorImg);
  };

  const GoToArtistScreen = () => {
    // setArtistId(artist.artistId);
    // navigation.navigate('ArtistScren');
  };

  useEffect(() => {
    GetColorImage();
  }, []);

  return (
    <RNBounceable
      onPress={() => GoToArtistScreen()}
      style={[
        styles.contentCards,
        {
          backgroundColor: `${!colorTaget ? '#22242a' : colorTaget?.dominant}`,
        },
      ]}>
      <View style={styles.imgContainer}>
        <FastImage
          style={styles.imgCrad}
          source={{
            uri: album?.thumbnails?.[1]?.url || album?.thumbnails?.[0]?.url,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.contentText}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.artistName}>
          {album.name}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.artistArtist}>
          {album.artist.name}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.yearText}>{`Year • ${album.year}`}</Text>
      </View>
    </RNBounceable>
  );
};

export const AlbumsListSearch: React.FC<PropArtist> = ({albumArray}) => {
  return (
    <View style={styles.listArtist}>
      <FlashList
        data={albumArray}
        numColumns={1}
        scrollEnabled={true}
        estimatedItemSize={20}
        renderItem={({item}) => <CradAalbum album={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listArtist: {
    flex: 1,
    backgroundColor: colorBase,
  },
  contentCards: {
    marginHorizontal: 10,
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  imgContainer: {
    flex: 3,
  },
  imgCrad: {
    height: 100,
    width: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  contentText: {
    flex: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    color: '#fff',
  },

  artistName: {
    fontSize: 20,
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
    textShadowRadius: 8,
  },
  yearText: {
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: 2,
    color: '#fff',
    marginTop: 8,
    flexShrink: 1,
    textShadowColor: 'rgba(1, 0, 0, 1)',
    textShadowOffset: {width: -0.5, height: 1},
    textShadowRadius: 10,
  },
});

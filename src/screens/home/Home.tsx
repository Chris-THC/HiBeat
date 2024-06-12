import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/screenStack';
import {TopArtist} from '../../components/TopArtist/TopArtist';

export const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text style={{fontSize: 21, color: '#111'}}>Home Test</Text>

      <TouchableOpacity
        style={{height: 35, width: 200, backgroundColor: 'orange'}}
        onPress={() => navigation.navigate('Album')}>
        <Text style={{color: '#fff', fontSize: 18}}>Go to play</Text>
      </TouchableOpacity>
      <TopArtist />
    </View>
  );
};

const styles = StyleSheet.create({});

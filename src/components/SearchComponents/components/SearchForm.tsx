import RNBounceable from '@freakycoder/react-native-bounceable';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {serachArtistFuntion, serachTracksFuntion} from '../../../hooks/UseSearch/UseSearchTracks';
import {useSearchStore} from '../../../store/searchStore/SearchStore';

type FormData = {
  search: string;
};

export const SearchForm: React.FC = () => {
  const {control, handleSubmit} = useForm<FormData>();
  const {setTrackList, setArtistList} = useSearchStore();

  const onSubmit = async (data: FormData) => {
    // const tarcksInfo = await serachTracksFuntion(data.search);
    // setTrackList(tarcksInfo);
     const artistInfo = await serachArtistFuntion(data.search);
     setArtistList(artistInfo);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="search"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            returnKeyType="search"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Buscar"
            placeholderTextColor="#888"
            onSubmitEditing={handleSubmit(onSubmit)}
          />
        )}
      />

      <RNBounceable style={styles.btnContent} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.textBtn}>Search</Text>
      </RNBounceable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#212121',
    borderRadius: 15,
    paddingHorizontal: 5,
    margin: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Gilroy-Bold',
    marginHorizontal: 5,
  },
  textBtn: {
    fontSize: 16,
    color: '#ccc',
  },
  btnContent: {
    height: 45,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useSearchStore} from '../../../store/searchStore/SearchStore';
import {serachTracksFuntion} from '../../../hooks/UseSearch/UseSearchTracks';

type FormData = {
  search: string;
};

export const SearchForm: React.FC = () => {
  const {control, handleSubmit} = useForm<FormData>();
  const {setTrackList} = useSearchStore();

  const onSubmit = async (data: FormData) => {
    const tarcksInfo = await serachTracksFuntion(data.search);
    setTrackList(tarcksInfo);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="search"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Buscar"
            placeholderTextColor="#888"
          />
        )}
      />
      <Button title="Buscar" onPress={handleSubmit(onSubmit)} color="#FF0000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#121212',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#fff',
    marginRight: 10,
  },
});

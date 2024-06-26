import {MaterialIcons, SimpleLineIcons} from '@expo/vector-icons';
import RNBounceable from '@freakycoder/react-native-bounceable';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ActionsAndOptions: React.FC = () => {
  return (
    <View style={styles.optionsContainer}>
      <RNBounceable style={styles.queueBotton}>
        <MaterialIcons name="queue-music" size={40} color="#fff" />
      </RNBounceable>
      <RNBounceable>
        <SimpleLineIcons name="options-vertical" size={30} color="#fff" />
      </RNBounceable>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 50,
  },
  queueBotton: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});

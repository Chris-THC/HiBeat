import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import {colorBase} from './src/enums/AppColors';
import Navigation from './src/navigation/Navigation';
import {SetupPlayer} from './src/services/TrackPlayerService/SetupPlayer';
import {ActiveTrackCrad} from './src/components/ActiveTrackCrad/ActiveTrackCrad';

const App = () => {
  useEffect(() => {
    SetupPlayer();
  }, []);
  return (
    <View style={styles.appContainer}>
      <Navigation />
      <ActiveTrackCrad />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colorBase,
  },
});

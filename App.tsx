import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {colorBase} from './src/enums/AppColors';
import Navigation from './src/navigation/Navigation';
import {SetupPlayer} from './src/services/TrackPlayerService/SetupPlayer';
import NetInfo from '@react-native-community/netinfo';
import {StatusUpBar} from './src/components/StatusBar/StatusUpBar';

const App = () => {
  const [isConnected, setIsConnected] = useState<any>(true);

  useEffect(() => {
    // Agrega un listener para detectar cambios en la conexión
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    SetupPlayer();
  }, []);

  return (
    <View style={styles.appContainer}>
      <StatusUpBar backgroundColor={colorBase} />
      {!isConnected && (
        <View style={styles.noInternet}>
          <Text style={styles.textNoInternet}>
            No Internet connection please reconnect..!
          </Text>
        </View>
      )}
      {isConnected && <Navigation />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colorBase,
  },
  noInternet: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${colorBase}`,
  },
  textNoInternet: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

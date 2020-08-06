import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const coordinates = [
  {name: '1', latitude: 37.8025259, longitude: -122.4351431},
  {name: '2', latitude: 37.7896386, longitude: -122.421646},
  {name: '3', latitude: 37.7665248, longitude: -122.4161628},
  {name: '4', latitude: 37.7734153, longitude: -122.4577787},
  {name: '5', latitude: 37.7948605, longitude: -122.4596065},
  {name: '6', latitude: 37.8025259, longitude: -122.4351431},
];

export default function Playground() {
  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
  },
  map: {
    height: '100%',
  },
});

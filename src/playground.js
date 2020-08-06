import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polygon,
  Circle,
} from 'react-native-maps';

const markers = [
  {name: '1', latitude: 37.8025259, longitude: -122.4351431},
  {name: '2', latitude: 37.7896386, longitude: -122.421646},
  {name: '3', latitude: 37.7665248, longitude: -122.4161628},
  {name: '4', latitude: 37.7734153, longitude: -122.4577787},
  {name: '5', latitude: 37.7948605, longitude: -122.4596065},
  {name: '6', latitude: 37.8025259, longitude: -122.4351431},
];

export default function Playground() {
  const [coordinates, setCoordinates] = useState(markers);
  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Polygon
        coordinates={coordinates}
        fillColor={'rgba(200, 50, 100, 0.3)'}
        strokeColor={'rgba(200, 50, 100, 0.3)'}
      />

      <Circle
        center={{latitude: 37.8025259, longitude: -122.4351431}}
        radius={1000}
        fillColor={'rgba(100, 200, 200, 0.5)'}
        strokeColor={'rgba(100, 200, 200, 0.5)'}
      />

      <Marker
        draggable
        coordinate={{latitude: 37.7825259, longitude: -122.4351431}}>
        <Callout>
          <Image source={require('./img/sushi.png')} />
          <Text>An Interesting callout</Text>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});

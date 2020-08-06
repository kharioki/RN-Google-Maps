import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coding with Kharioki</Text>
      <Text style={styles.body}>
        This app shows us how to use Google maps in react native for both
        android and iOS. Here we focus on features like Markers, callouts,
        polygons, and circle components.
      </Text>
      <Button
        title="Go to Carousel Map"
        onPress={() => console.log('go to carousel')}
      />
      <Button
        title="Go to Heat Map"
        onPress={() => console.log('go to heat map')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 32,
  },
  body: {
    fontSize: 22,
  },
});

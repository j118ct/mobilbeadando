import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default class TerkepScreen extends Component {
  static navigationOptions = {
    title: 'Kapcsolat',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 47.5096565,
            longitude: 19.0565242,
            latitudeDelta: 0.006,
            longitudeDelta: 0.006,
          }}>
          <Marker
            title="Padthai Wokbar Nyugati"
            coordinate={{
              latitude: 47.5096565,
              longitude: 19.0565242,
            }}
            anchor={{ x: 0.8, y: 0.6 }}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

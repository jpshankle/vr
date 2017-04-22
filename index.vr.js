import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            backgroundColor: '#00f',
            fontSize: 0.5,
            fontWeight: '300',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -5]}],
          }}>
          Jeremy Shankle
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('App', () => App);

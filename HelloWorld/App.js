/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={[buttonStyles.core, buttonStyles.spacer]} underlayColor="#999" activeOpacity={0.8} onPress={()=>{}}>
          <Text>Default Normal</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[buttonStyles.core, buttonStyles.hairlineBorder ,buttonStyles.spacer]}>
          <Text>Default HairLine</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[buttonStyles.core, buttonStyles.primary ,buttonStyles.spacer]}>
          <Text>Primary Normal</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[buttonStyles.core,buttonStyles.primary, buttonStyles.hairlineBorder ]}>
          <Text>Primary HairLine</Text>
        </TouchableHighlight>

        <Text style={styles.welcome}>
          Welcome to my first React Native application!!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
const buttonStyles = StyleSheet.create({
  core: {
    borderStyle: 'solid',
    borderColor: '#d5d5d5',
    borderWidth: 1,
    backgroundColor: '#eee',
    borderRadius: 3,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5
  },
  primary: {
    backgroundColor: '#60b044',
    borderColor: '#355f27'
  },
  hairlineBorder:{
    borderWidth: StyleSheet.hairlineWidth
  },
  spacer: {
    marginBottom: 10
  }
});
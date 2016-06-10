/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react-native';
import feathers from 'feathers-client';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const app = feathers()
  .configure(feathers.hooks())
  .configure(feathers.rest('http://localhost:3030').fetch(fetch));

const messagesService = app.service('/messages');

messagesService.create({})
  .catch(error => {
    // alert(error.message)

    // Error: Cannot read property 'on' of undefined(…)
    console.log(error)
  })

messagesService.find({})
  .then(results => {
    console.log(results)
  })

class test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
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

AppRegistry.registerComponent('test', () => test);

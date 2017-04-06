/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import WFMain from './Component/WFMain'

export default class NewsDemo extends Component {
  render() {
    return (
        <WFMain/>
    );
  }
}

AppRegistry.registerComponent('NewsDemo', () => NewsDemo);

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Item from './Item';

import {shop} from '../styles/stylesheet';

export default class Items extends Component {
  render() {
    return (
      <View>
        <Text style={shop.titles}>ITEMS</Text>
        <Item/>
      </View>
    )
  }
};
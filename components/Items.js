import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Item from './Item';

import {shop} from '../styles/stylesheet';

export default class Items extends Component {
  render() {
console.log(this.props)

    return (
      <View>
        <Text style={shop.titles}></Text>
        < Item addItemToBasket={this.props.addItemToBasket}/>
      </View>
    )
  }
};
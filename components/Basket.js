import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Icon} from 'native-base';

import {shop} from '../styles/stylesheet';

export default class Basket extends Component {
  render() {
    return (
      <View style={shop.basket}>
        < Icon name='cart'/>
        <Text>{this.props.basket}
          €</Text>
      </View>
    )
  }
};

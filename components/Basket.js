import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';

import { shop } from '../styles/stylesheet';

export default class Basket extends Component {
  render() {
    return (
      <View>
        <Text style={shop.titles}>BASKET</Text>
          <Button>
            <Text>PURCHASE</Text>
          </Button>
      </View>    
    )
  }
};

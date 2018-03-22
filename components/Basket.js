import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';

export default class Basket extends Component {
  render() {
    return (
      <View>
          <Text>BASKET</Text>
          <Button>
            <Text>PURCHASE</Text>
          </Button>
      </View>    
    )
  }
};

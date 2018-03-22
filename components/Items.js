import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Items extends Component {
  render() {
    return (
      <View>
        <Text>ITEMS</Text>
        <View>{items.map(item=>
          <View key={item.id}>
            <Text>Name: {item.name}</Text>
            <Text>Price: {item.price}</Text>
          </View>
          )}
        </View>
      </View>  
    )
  }
};

const items = [
  {
    name: "Shoes",
    price: 520,
    id: 1
  },
  {
    name: "Suit",
    price: 950,
    id: 2
  },
  {
    name: "Tie",
    price: 95,
    id: 3
  }
];
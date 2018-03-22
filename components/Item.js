import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { shop } from '../styles/stylesheet';

export default class Item extends Component {
  render() {
    return (
      <View>{items.map(item =>
        <View key={item.id} style={shop.oneItem}>
          <Text style={shop.itemName}>{item.name}</Text>
          <Image 
            style = {{width: 50, height: 50}}
            source = {{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} >
          </Image>
          <Text style={shop.itemPrice}>{item.price} €</Text>
        </View>
      )}
      </View>
    )
  }
};

const items = [
  {
    id: 1,
    name: "Blue",
    price: 520,
    url: 'http://1.bp.blogspot.com/-naRMvjVIpoc/UagIUerlmaI/AAAAAAAAAVM/NerDw4P8Y_w/s1600/Screen+Shot+2013-05-30+at+10.16.02+PM.png',
  },
  {
    id: 2,
    name: "Red",
    price: 950,
  },
  {
    id: 3,
    name: "Yellow",
    price: 95
  },
  {
    id: 4,
    name: "Green",
    price: 25
  },
  {
    id: 5,
    name: "Black",
    price: 190
  },
];
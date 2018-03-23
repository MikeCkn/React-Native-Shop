import React, {Component} from 'react';
import {StyleSheet, View, Image, Button} from 'react-native';
import {Text} from 'native-base';

import {shop} from '../styles/stylesheet';

export default class Item extends Component {
  render() {
    return (
      <View>{items.map(item => <View key={item.id} style={shop.oneItem}>
          <Text style={shop.itemName}>{item.name}</Text>
          <Image
            style={{
            width: 350,
            height: 350,
            resizeMode: 'contain'
          }}
            source={{
            uri: item.url
          }}></Image>
          <Text style={shop.itemPrice}>{item.price}
            €</Text>
          <Button title='ADD' onPress={() => this.props.addItemToBasket(item)}/>
        </View>)}
      </View>
    )
  }
};

const items = [
  {
    id: 1,
    name: "Jimbo",
    price: 995,
    url: 'https://images.bergdorfgoodman.com/ca/2/product_assets/N/3/T/Y/X/BGN3TYX_mu.jpg'
  }, {
    id: 2,
    name: "Truman",
    price: 950,
    url: 'https://bergdorfgoodman.scene7.com/is/image/bergdorfgoodman/BGN4V1U_01_m?&wid=40' +
        '0&height=500'
  }, {
    id: 3,
    name: "Skandy",
    price: 595,
    url: 'https://images.bergdorfgoodman.com/ca/2/product_assets/N/4/T/U/V/BGN4TUV_mu.jpg'

  }, {
    id: 4,
    name: "Guider",
    price: 625,
    url: 'https://images.bergdorfgoodman.com/ca/1/product_assets/N/4/V/1/T/BGN4V1T_mu.jpg'

  }, {
    id: 5,
    name: "Kriss",
    price: 810,
    url: 'https://images.bergdorfgoodman.com/ca/1/product_assets/N/4/U/B/N/BGN4UBN_mu.jpg'

  }, {
    id: 6,
    name: "Blazer",
    price: 450,
    url: 'https://images.bergdorfgoodman.com/ca/1/product_assets/N/4/W/6/Z/BGN4W6Z_mu.jpg'

  }, {
    id: 7,
    name: "Void",
    price: 630,
    url: 'https://images.bergdorfgoodman.com/ca/2/product_assets/N/3/J/N/X/BGN3JNX_mu.jpg'

  }, {
    id: 8,
    name: "Arkangel",
    price: 890,
    url: 'https://images.bergdorfgoodman.com/ca/2/product_assets/N/3/J/N/9/BGN3JN9_mu.jpg'

  }
];
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Header, Content, Button, Text} from 'native-base';

import {shop} from '../styles/stylesheet';
import Basket from './Basket';
import Items from './Items';

export default class Shop extends Component {
    render() {
        return (
            <View style={shop.containerItemsAndBasket}>
                <Items addItemToBasket={this.props.addItemToBasket}/>
            </View>
        );
    }
}
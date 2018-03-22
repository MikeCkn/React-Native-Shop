import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import { app } from './styles/stylesheet';
import { Shop } from './components';

export default class App extends Component {
  render() {
    return (
      <Container style={app.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>SHOP</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View>
            <Shop />
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

import React, {Component} from 'react';
import {View, ScrollView, Image} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';

import {app} from './styles/stylesheet';
import {Shop, Basket} from './components';

export default class App extends Component {

state = {
  basket: 0
}

addItemToBasket = (item) => {
  this.setState({
    basket: this.state.basket + item.price
  })
}

  render() {
    
    return (
      <ScrollView>
        <Container style={app.container}>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu'/>
              </Button>
            </Left>
            <Body>
              <Title>SHOP</Title>
            </Body>
            <Right/>
          </Header>
          <Content>
            < View style={app.container2}>
              <Image
                style={{
                width: 200,
                height: 200,
                resizeMode: 'contain'
              }}
                source={{
                uri: 'https://seeklogo.com/images/G/giuseppe-zanotti-design-logo-8EFECFF515-seeklogo.com.png'
              }}></Image>
              <Shop addItemToBasket={this.addItemToBasket}/>
              <Basket basket={this.state.basket}/>
            </View>
          </Content>
          <Footer>
            <FooterTab>
              <Button full></Button>
            </FooterTab>
          </Footer>
        </Container>
      </ScrollView >
    );
  }
}

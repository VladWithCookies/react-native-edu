import React from 'react';
import { Container, Content, Header, Body, Title, Left, Right, Button, Text, ListItem, Radio, H3 } from 'native-base';

const OwlTrap = ({
  handleSetTrap,
}) => (
  <Container>
    <Header>
      <Left />
      <Body>
        <Title>Ловушка для сов</Title>
      </Body>
      <Right />
    </Header>
    <Content>
      <Content padder>
        <H3>Выбери наживку</H3>
      </Content>
      <ListItem selected={false} >
        <Left>
          <Text>Мыша</Text>
        </Left>
        <Right>
          <Radio selected={false} />
        </Right>
      </ListItem>
      <ListItem selected={true}>
        <Left>
          <Text>Вяленое мясо</Text>
        </Left>
        <Right>
          <Radio selected={true} />
        </Right>
      </ListItem>
      <ListItem selected={false}>
        <Left>
          <Text>Гусеница</Text>
        </Left>
        <Right>
          <Radio selected={false} />
        </Right>
      </ListItem>
      <Button onPress={handleSetTrap} block light>
        <Text>Установить ловушку</Text>
      </Button>
    </Content>
  </Container>
);

export default OwlTrap;

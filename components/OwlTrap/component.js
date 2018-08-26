import React from 'react';
import { Container, Content, Header, Body, Title, Left, Right, Button, Text, ListItem, Radio, H3 } from 'native-base';

const OwlTrap = ({
  setTrap,
  isMeatSelected,
  isMouseSelected,
  handleSelectBaid,
  isCaterpillarSelected,
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
      <ListItem onPress={handleSelectBaid('mouse')} selected={isMouseSelected} >
        <Left>
          <Text>Мыша</Text>
        </Left>
        <Right>
          <Radio onPress={handleSelectBaid('mouse')} selected={isMouseSelected} />
        </Right>
      </ListItem>
      <ListItem onPress={handleSelectBaid('meat')} selected={isMeatSelected}>
        <Left>
          <Text>Вяленое мясо</Text>
        </Left>
        <Right>
          <Radio onPress={handleSelectBaid('meat')} selected={isMeatSelected} />
        </Right>
      </ListItem>
      <ListItem onPress={handleSelectBaid('caterpillar')} selected={isCaterpillarSelected}>
        <Left>
          <Text>Гусеница</Text>
        </Left>
        <Right>
          <Radio onPress={handleSelectBaid('caterpillar')} selected={isCaterpillarSelected} />
        </Right>
      </ListItem>
      <Button onPress={setTrap} block light>
        <Text>Установить ловушку</Text>
      </Button>
    </Content>
  </Container>
);

export default OwlTrap;

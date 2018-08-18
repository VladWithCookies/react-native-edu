import React from 'react';
import { Container, Content, List, Header, Body, Title, Left, Right } from 'native-base';

import OwlItem from './OwlItem/container';

const OwlList = ({
  owls,
}) => (
  <Container>
    <Header>
      <Left />
      <Body>
        <Title>Мои совы</Title>
      </Body>
      <Right />
    </Header>
    <Content>
      <List>
        {owls.map(owl => <OwlItem key={owl.title} {...owl} />)}
      </List>
    </Content>
  </Container>
);

export default OwlList;

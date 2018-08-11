import React from 'react';
import { Container, Content, List, Header, Body, Title, Left } from 'native-base';

import OwlItem from './OwlItem/container';

const OwlList = ({
  owls,
}) => (
  <Container>
    <Header>
      <Left />
      <Body>
        <Title>Owls List</Title>
      </Body>
    </Header>
    <Content>
      <List>
        {owls.map(owl => <OwlItem key={owl.name} {...owl} />)}
      </List>
    </Content>
  </Container>
);

export default OwlList;

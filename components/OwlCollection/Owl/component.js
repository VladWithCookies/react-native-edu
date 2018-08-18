import React from 'react';
import { Image } from 'react-native';
import { Container, Text, Title, Header, Left, Right, Body, Content, Button, Icon, H2 } from 'native-base';

const Owl = ({
  title, description, name, image, handleCloseOwl,
}) => (
  <Container>
    <Header>
      <Left>
        <Button onPress={handleCloseOwl} transparent>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Title>{name}</Title>
      </Body>
    </Header>
    <Image style={{ height: 50, flex: 1 }} source={{ uri: image }} />
    <Content padder>
      <H2>{title}</H2>
      <Text>{description}</Text>
    </Content>
  </Container>
);

export default Owl;

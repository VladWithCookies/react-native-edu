import React from 'react';
import { ListItem, Left, Thumbnail, Body, Text } from 'native-base';

const OwlItem = ({
  title, name, image, handleShowOwl,
}) => (
  <ListItem onPress={handleShowOwl} avatar>
    <Left>
      <Thumbnail square source={{ uri: image }} />
    </Left>
    <Body>
      <Text>{name}</Text>
      <Text note numberOfLines={1}>
        {title}
      </Text>
    </Body>
  </ListItem>
);

export default OwlItem;

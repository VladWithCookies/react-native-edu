import React from 'react';
import { ListItem, Left, Thumbnail, Body, Text } from 'native-base';

const OwlItem = ({
  name, description, image, handleShowOwl,
}) => (
  <ListItem onPress={handleShowOwl} avatar>
    <Left>
      <Thumbnail square source={{ uri: image }} />
    </Left>
    <Body>
      <Text>{name}</Text>
      <Text note numberOfLines={1}>
        {description}
      </Text>
    </Body>
  </ListItem>
);

export default OwlItem;

import React from 'react';
import { Container } from 'native-base';

import OwlList from './OwlList/container';
import Owl from './Owl/container';

const OwlCollection = ({
  openedOwl,
}) => (
  <Container>
    {openedOwl ? <Owl/> : <OwlList />}
  </Container>
);

export default OwlCollection;

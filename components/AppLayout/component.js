import React from 'react';
import { Container, Content } from 'native-base';

import AppFooter from '../AppFooter/container';
import OwlCollection from '../OwlCollection/container';
import OwlTrap from '../OwlTrap/container';

const AppLayout = ({
  activeTab,
}) => (
  <Container>
    <Content>
      {activeTab === 'watch' && <OwlCollection />}
      {activeTab === 'catch' && <OwlTrap />}
    </Content>
    <AppFooter />
  </Container>
);

export default AppLayout;

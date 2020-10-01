import React from 'react';
import LeftColumn from '../LeftColumn';
import MiddleColum from '../MiddleColumn';
import RightColumn from '../RightColumn';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <main>
        <LeftColumn />
        <MiddleColum />
        <RightColumn />
      </main>
    </Container>
  );
};

export default Layout;

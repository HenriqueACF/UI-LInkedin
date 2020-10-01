import React from 'react';
//components
import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';
import LeftColumn from '../LeftColumn';
import MiddleColum from '../MiddleColumn';
import RightColumn from '../RightColumn';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />
      <main>
        <LeftColumn />
        <MiddleColum />
        <RightColumn />
      </main>
    </Container>
  );
};

export default Layout;

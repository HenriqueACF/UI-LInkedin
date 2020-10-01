import React,{ useState, useEffect } from 'react';
//components
import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';
import LeftColumn from '../LeftColumn';
import MiddleColum from '../MiddleColumn';
import RightColumn from '../RightColumn';
import AdBanner from '../AdBanner';
//styles
import { Container } from './styles';

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 1000);
  },[])

  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <span>
        {!isLoading && <AdBanner />}
      </span>

      <main>
        <LeftColumn isLoading={isLoading}/>
        <MiddleColum  isLoading={isLoading}/>
        <RightColumn isLoading={isLoading}/>
      </main>
    </Container>
  );
};

export default Layout;

import React from 'react';
//components
import TrendingPanel from './TrendingPanel';
import LoadingTrendingPanel from '../Shimmer/LoadingTrendingPanel';
//style
import { Container } from './styles';

const RightColumn: React.FC<LoadingProps> = ({isLoading}) => {
  return (
    <Container className="right-column">
      {isLoading ? (
        <LoadingTrendingPanel />
      ):(
      <>
        <TrendingPanel />
        <TrendingPanel />
      </>
      )}
      
    </Container>
  );
};

export default RightColumn;

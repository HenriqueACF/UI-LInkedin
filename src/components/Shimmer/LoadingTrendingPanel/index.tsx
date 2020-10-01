import React from 'react';
//components
import Skeleton from '../../Skeleton';
//styles
import { Container } from './styles';

const LoadingTrendingPanel: React.FC = () => {
  const Row = () =>( 
    <div className="row">
      <Skeleton className="square-skeleton"/>

      <div className="column">
        <Skeleton className="row-skeleton white"/>
        <Skeleton className="row-skeleton white"/>
      </div>
    </div>
  )
  return(
    <Container>
      <Row/>
      <Row/>
      <Row/>
    </Container>
  );
}

export default LoadingTrendingPanel;
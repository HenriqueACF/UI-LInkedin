import React from 'react';
//components
import Panel from '../../Panel';
import Skeleton from '../../Skeleton';
//styles
import { Container } from './styles'; 

const LoadingFeedShare: React.FC = () => {
  return(
    <Container>
      <Panel className="no-shadow">
        <Skeleton className="row-skeleton"/>
        <Skeleton className="row-skeleton"/>
      </Panel>
    </Container>
  );
}

export default LoadingFeedShare;
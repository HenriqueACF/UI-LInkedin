import React from 'react';
//components
import Panel from '../../Panel';
import Skeleton from '../../Skeleton';
//style
import { Container } from './styles';

const LoadindFeedPost: React.FC = () => {
  return(
    <Container>
      <Panel className="no-shadow">
        <header>
          <Skeleton className="avatar-skeleton"/>
          <div className="column">
            <Skeleton className="row-skeleton" />
            <Skeleton className="row-skeleton" />
          </div>
        </header>
        <span>
          <Skeleton className="row-skeleton" />
          <Skeleton className="row-skeleton" />
        </span>
      </Panel>
    </Container>
  );
}

export default LoadindFeedPost;
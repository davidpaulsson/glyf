import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../configureStore';
import { SourcesState, Status } from '../../types';
import styles from './SourceGrid.module.css';
import SourceGridBox from '../SourceGridBox';

const SourceGrid = () => {
  const { status, sources } = useSelector<RootState, SourcesState>(
    (state) => state.sources
  );

  if (status === Status.LOADING) {
    return <p>Loading…</p>;
  }

  if (status === Status.IDLE) {
    return (
      <div className={styles.grid}>
        {sources.map(({ title, items }) => (
          <SourceGridBox key={title} {...{ title, items }} />
        ))}
      </div>
    );
  }

  return null;
};

export default SourceGrid;

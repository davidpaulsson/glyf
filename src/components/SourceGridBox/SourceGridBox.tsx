import React from 'react';
import styles from './SourceGridBox.module.css';
import { Source } from '../../types';
import SourceGridBoxItem from '../SourceGridBoxItem';

const GridItem = (props: Source) => {
  const { title, items } = props;

  return (
    <div className={styles.gridItem} key={title}>
      <div className={styles.gridItemHeader}>{title}</div>
      <div className={styles.gridItemScrollable}>
        {items.map((item) => (
          <SourceGridBoxItem key={item.title} {...{ item }} />
        ))}
      </div>
    </div>
  );
};

export default GridItem;

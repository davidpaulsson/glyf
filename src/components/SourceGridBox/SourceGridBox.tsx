import React from 'react';
import styles from './SourceGridBox.module.css';
import { Source } from '../../types';
import SourceGridBoxItem from '../SourceGridBoxItem';

const GridItem = (props: Source) => {
  const { title, domain, items } = props;

  return (
    <div className={styles.gridItem} key={title}>
      <div className={styles.gridItemHeader}>
        <img
          alt={title}
          src={`https://www.google.com/s2/favicons?domain_url=${domain}`}
        />
        {title}
      </div>
      <div className={styles.gridItemScrollable}>
        {items.map((item) => (
          <SourceGridBoxItem key={item.title} {...{ item }} />
        ))}
      </div>
    </div>
  );
};

export default GridItem;

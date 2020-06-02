import React from 'react';
import styles from './SourceGridBoxItem.module.css';
import { SourceItem } from '../../types';

const SourceGridBoxItem = ({ item }: { item: SourceItem }) => (
  <a href={item.url}>
    <article className={styles.wrapper}>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.preamble}>{item.preamble}</div>
      <div className={styles.meta}>
        {item.language && <div>{item.language}</div>}
        {item.stars && <div>{item.stars}</div>}
        {item.author && <div>{item.author}</div>}
      </div>
    </article>
  </a>
);

export default SourceGridBoxItem;

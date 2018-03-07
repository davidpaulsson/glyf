import React from 'react';
import styles from './FeedItem.scss';

const FeedItem = ({ item }) => (
  <a href={item.link} target="_blank" className={styles.link}>
    <article className={styles.item}>
      <strong className={styles.title}>{item.title}</strong>
      <small className={styles.published}>{item.published}</small>
    </article>
  </a>
);

export default FeedItem;

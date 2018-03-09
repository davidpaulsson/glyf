import React from 'react';
import styles from './FeedItem.scss';
import horunge from 'horunge';
import sanitizeHtml from 'sanitize-html';

const FeedItem = ({ item }) => (
  <a href={item.link} target="_blank" className={styles.link}>
    <article className={styles.item}>
      <span
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: horunge(sanitizeHtml(item.title)) }}
      />
      <small className={styles.published}>{item.published}</small>
    </article>
  </a>
);

export default FeedItem;

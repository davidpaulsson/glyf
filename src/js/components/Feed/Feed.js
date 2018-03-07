import React from 'react';
import FeedItem from './FeedItem';
import styles from './Feed.scss';

const Feed = ({ news }) => (
  <div className={styles.wrapper}>
    <div className={styles.feed}>
      {news.map(item => <FeedItem key={item.title} item={item} />)}
    </div>
  </div>
);

export default Feed;

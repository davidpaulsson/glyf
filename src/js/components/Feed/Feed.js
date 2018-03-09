import React from 'react';
import Loader from 'react-loader-spinner';
import FeedItem from './FeedItem';
import styles from './Feed.scss';

const Feed = ({ news }) => (
  <div className={styles.wrapper}>
    {news.length > 0 ? (
      news.map(item => <FeedItem key={item.title} item={item} />)
    ) : (
      <div className={styles.center}>
        <Loader type="TailSpin" color="#3498db" height="32" width="32" />
      </div>
    )}
  </div>
);
export default Feed;

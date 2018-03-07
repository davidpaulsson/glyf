import React from 'react';
import FeedItem from './FeedItem';
import styles from './Feed.scss';

const Feed = ({ news }) => (
  <div className={styles.wrapper}>
    <div className={styles.feed}>
      {news.length > 0 ? (
        news.map(item => <FeedItem key={item.title} item={item} />)
      ) : (
        <div className={styles.center}>
          <img src={require('../../../assets/loader.gif')} />
        </div>
      )}
    </div>
  </div>
);

export default Feed;

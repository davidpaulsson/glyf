import React from 'react';
import Loader from 'react-loader-spinner';
import FeedItem from './FeedItem';

const FeedItems = ({ news }) => (
  <div className="feedItems__wrapper">
    {news.length > 0 ? (
      news.map(item => <FeedItem key={item.title} item={item} />)
    ) : (
      <div className="feedItems__center">
        <Loader type="TailSpin" color="#3498db" height="32" width="32" />
      </div>
    )}
  </div>
);
export default FeedItems;

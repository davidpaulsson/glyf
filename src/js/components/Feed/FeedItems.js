import React from 'react';
import Loader from 'react-loader-spinner';
import FeedItem from './FeedItem';

export default ({ news }) => (
  <div className="feedItems__wrapper">
    {news.length > 0 ? (
      news.map((item, i) => <FeedItem key={`${item.link}__${i}`} item={item} />)
    ) : (
      <div className="feedItems__center">
        <Loader type="TailSpin" color="#3498db" height="32" width="32" />
      </div>
    )}
  </div>
);

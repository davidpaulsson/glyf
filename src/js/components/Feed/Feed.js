import React from 'react';
import FeedItem from './FeedItem';

const Feed = ({ news }) => news.map(item => <FeedItem item={item} />);

export default Feed;

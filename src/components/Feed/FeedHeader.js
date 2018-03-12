import React from 'react';
import Select from '../Select';

const FeedHeader = ({ logo, title, feedUrl, position }) => (
  <div className="feed__header">
    <img src={logo} alt={title} className="feed__logo" />
    <Select feedUrl={feedUrl} position={position} />
  </div>
);

export default FeedHeader;

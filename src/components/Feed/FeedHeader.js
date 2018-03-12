import React from 'react';
import Select from '../Select';

export default ({ logo, url, source }) => (
  <div className="feed__header">
    <img src={logo} className="feed__logo" />
    {/* <Select /> */}
    <a href={url} className="feed__source">
      {source}
    </a>
  </div>
);

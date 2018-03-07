import React from 'react';

const FeedItem = ({ item }) => (
  <article>
    <h1>
      <a href={item.link} target="_blank">
        {item.title}
      </a>
    </h1>
    <small>{item.published}</small>
  </article>
);

export default FeedItem;

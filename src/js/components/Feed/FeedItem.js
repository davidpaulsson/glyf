import React from 'react';
import horunge from 'horunge';
import sanitizeHtml from 'sanitize-html';

const FeedItem = ({ item }) => (
  <a href={item.link} target="_blank" className="feedItem__link">
    <article className="feedItem__item">
      <span
        className="feedItem__title"
        dangerouslySetInnerHTML={{ __html: horunge(sanitizeHtml(item.title)) }}
      />
      <small className="feedItem__published">{item.published}</small>
    </article>
  </a>
);

export default FeedItem;

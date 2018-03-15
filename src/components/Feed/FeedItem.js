import React from 'react';
import horunge from 'horunge';
import sanitizeHtml from 'sanitize-html';
import truncate from 'truncate';

const FeedItem = ({ item, details }) => (
  <a href={item.link} target="_blank" className="feed-item__link">
    <article className="feed-item">
      <div className="feed-item__item">
        <span
          className="feed-item__title"
          dangerouslySetInnerHTML={{
            __html: horunge(sanitizeHtml(item.title)),
          }}
        />
        {item.description &&
          details && (
            <p
              className="feed-item__description"
              dangerouslySetInnerHTML={{
                __html: truncate(sanitizeHtml(item.description), 160),
              }}
            />
          )}
        <footer>
          <small className="feed-item__published">{item.published}</small>
        </footer>
      </div>
      {item.image &&
        details && (
          <div
            className="feed-item__image"
            style={{ backgroundImage: `url(${item.image})` }}
          />
        )}
    </article>
  </a>
);

export default FeedItem;

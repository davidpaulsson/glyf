import React, { useContext } from 'react';
import { IItem, store } from '../../store';
import styles from './NewsItem.module.css';

const NewsItem = ({ item }: { item: IItem }) => {
  const { state } = useContext(store);

  return (
    <li className={styles.item}>
      <a
        className={styles.link}
        href={item.url}
        rel="noopener noreferrer"
        {...(state.settings.openLinksInNewTab && {
          target: '_blank',
        })}
      >
        <h3 className={styles.title}>{item.title}</h3>
        <span className={styles.preamble}>{item.preamble}</span>
        <small className={styles.published}>{item.published}</small>
      </a>
    </li>
  );
};

export default NewsItem;

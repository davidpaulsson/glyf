import React from 'react';
import { IItem } from '../../store';
import styles from './NewsItem.module.css';

const NewsItem = ({ item }: { item: IItem }) => {
  return (
    <a className={styles.link} href={item.url}>
      <li className={styles.item}>
        <h3 className={styles.title}>{item.title}</h3>
        <span className={styles.preamble}>{item.preamble}</span>
        <small className={styles.published}>{item.published}</small>
      </li>
    </a>
  );
};

export default NewsItem;

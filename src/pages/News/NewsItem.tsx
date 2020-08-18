import moment from 'moment';
import React, { useContext } from 'react';
import IconCalendar from '../../components/IconCalendar';
import IconCode from '../../components/IconCode';
import IconUser from '../../components/IconUser';
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
        {item.image && (
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        )}
        <h3 className={styles.title}>{item.title}</h3>
        <span className={styles.preamble}>{item.preamble}</span>
        {!!item.github ? (
          <small className={styles.published}>
            {item.language && (
              <>
                <IconCode />
                {item.language}
                <div className={styles.spacer} />
              </>
            )}
            {item.author && (
              <>
                <IconUser />
                {item.author}
                <div className={styles.spacer} />
              </>
            )}
            {item.stars && (
              <>
                <span className={styles.star}>★</span>
                {item.stars}
              </>
            )}
          </small>
        ) : (
          item.published && (
            <small className={styles.published}>
              <IconCalendar />
              {moment(item.sortDate).calendar()}
            </small>
          )
        )}
      </a>
    </li>
  );
};

export default NewsItem;

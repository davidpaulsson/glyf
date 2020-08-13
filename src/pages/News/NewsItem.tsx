import React, { useContext } from 'react';
import { IItem, store } from '../../store';
import styles from './NewsItem.module.css';
import IconCalendar from '../../components/IconCalendar';
import IconUser from '../../components/IconUser';
import IconCode from '../../components/IconCode';

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
              {item.published}
            </small>
          )
        )}
      </a>
    </li>
  );
};

export default NewsItem;

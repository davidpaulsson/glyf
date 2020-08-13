import React, { useContext } from 'react';
import { store, ISource } from '../../store';
import styles from './News.module.css';
import NewsItem from './NewsItem';

const News: React.FC = () => {
  const { state } = useContext(store);

  return (
    <main className={styles.list}>
      {state.settings.selectedSources.map((domain) => {
        const source: ISource | undefined = state.sources.sources.find(
          (source) => source.domain === domain
        );

        if (!source) return false;

        return (
          <section key={domain} className={styles.list__item}>
            <h2 className={styles.title}>{source.title}</h2>
            <ul>
              {source.items.map((item, index) => (
                <NewsItem key={index} {...{ item }} />
              ))}
            </ul>
          </section>
        );
      })}
    </main>
  );
};

export default News;

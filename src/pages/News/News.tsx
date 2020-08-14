import React, { useContext } from 'react';
import { ISource, store } from '../../store';
import styles from './News.module.css';
import NewsSection from './NewsSection';

const News = () => {
  const { state } = useContext(store);

  return (
    <main className={styles.list}>
      {state.settings.selectedSources.map((domain, index) => {
        const source: ISource | undefined = state.sources.sources.find(
          (source) => source.domain === domain
        );

        if (!source) return false;

        return <NewsSection key={index} {...{ source, index }} />;
      })}
    </main>
  );
};

export default News;

import React, { useState, useContext } from 'react';
import IconGrid from '../../components/IconGrid';
import { ISource, store, actions } from '../../store';
import NewsItem from './NewsItem';
import styles from './NewsSection.module.css';

const NewsSection = ({ source, index }: { source: ISource; index: number }) => {
  const { state, dispatch } = useContext(store);
  const [showSourceSelection, setShowSourceSelection] = useState(false);

  return (
    <section className={styles.section}>
      {showSourceSelection ? (
        <>
          <div className={styles.title}>
            <h2>
              Select News Source <span>({source.title})</span>
            </h2>
            <button onClick={() => setShowSourceSelection(false)}>
              <IconGrid />
            </button>
          </div>
          <ul>
            {state.sources.sources.map((s) => (
              <li key={s.domain}>
                <label>
                  <input
                    type="radio"
                    name="source"
                    value={s.domain}
                    checked={source.domain === s.domain}
                    onChange={(e) => {
                      dispatch({
                        type: actions.SET_SOURCE,
                        payload: {
                          source: e.target.value,
                          index,
                        },
                      });
                    }}
                  />
                  {s.domain}
                </label>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <div className={styles.title}>
            <h2>{source.title}</h2>
            <button onClick={() => setShowSourceSelection(true)}>
              <IconGrid />
            </button>
          </div>
          <ul>
            {source.items.map((item, index) => (
              <NewsItem key={index} {...{ item }} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default NewsSection;

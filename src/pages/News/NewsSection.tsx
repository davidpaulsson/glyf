import React, { useState, useContext } from 'react';
import IconGrid from '../../components/IconGrid';
import { ISource, store, actions } from '../../store';
import NewsItem from './NewsItem';
import styles from './NewsSection.module.css';
import IconCheck from '../../components/IconCheck';
import { Tooltip } from 'react-tippy';
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
            <Tooltip
              size="small"
              title="Save"
              position="bottom"
              trigger="mouseenter"
            >
              <button onClick={() => setShowSourceSelection(false)}>
                <IconCheck />
              </button>
            </Tooltip>
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
            <Tooltip
              size="small"
              title="Select News Source"
              position="bottom"
              trigger="mouseenter"
            >
              <button onClick={() => setShowSourceSelection(true)}>
                <IconGrid />
              </button>
            </Tooltip>
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

import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './components/Feed';
import _ from 'lodash';

import styles from '../css/entry.scss';

const sources = [
  {
    title: 'SVT Nyheter',
    feedUrl: 'https://www.svt.se/nyheter/rss.xml',
  },
  {
    title: 'Sveriges Radio Ekot',
    feedUrl: 'https://api.sr.se/api/rss/program/83?format=145',
  },
  {
    title: 'Svenska Dagbladet',
    feedUrl: 'https://www.svd.se/?service=rss',
  },
  {
    title: 'Expressen',
    feedUrl: 'https://expressen.se/rss/nyheter',
  },
  {
    title: 'Aftonbladet',
    feedUrl: 'https://www.aftonbladet.se/nyheter/rss.xml',
  },
];

const App = () => (
  <div className={styles.app}>
    {_.sortBy(sources, 'title').map(source => (
      <Feed title={source.title} feedUrl={source.feedUrl} />
    ))}
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

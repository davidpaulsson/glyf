import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './components/Feed';
import _ from 'lodash';

import styles from './entry.scss';

const sources = [
  {
    title: 'SVT Nyheter',
    logo: require('../assets/svt.svg'),
    feedUrl: 'https://www.svt.se/nyheter/rss.xml',
  },
  {
    title: 'Sveriges Radio Ekot',
    logo: require('../assets/sveriges-radio.svg'),
    feedUrl: 'https://api.sr.se/api/rss/program/83?format=145',
  },
  {
    title: 'Svenska Dagbladet',
    logo: require('../assets/svenska-dagbladet.svg'),
    feedUrl: 'https://www.svd.se/?service=rss',
  },
  {
    title: 'Expressen',
    logo: require('../assets/expressen.svg'),
    feedUrl: 'https://feeds.expressen.se',
  },
  {
    title: 'Aftonbladet',
    logo: require('../assets/aftonbladet.svg'),
    feedUrl: 'https://www.aftonbladet.se/rss.xml',
  },
  {
    title: 'Dagens Nyheter',
    logo: require('../assets/dagens-nyheter.svg'),
    feedUrl: 'https://www.dn.se/nyheter/m/rss',
  },
];

const App = () => (
  <div className={styles.app}>
    {_.sortBy(sources, 'title').map(source => (
      <Feed
        key={source.title}
        source={source.title}
        logo={source.logo}
        feedUrl={source.feedUrl}
      />
    ))}
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

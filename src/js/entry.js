import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './components/Feed';
import sortBy from 'lodash.sortby';

const sources = [
  // {
  //   title: 'Dagens Media',
  //   url: 'https://www.dagensmedia.se/',
  //   logo: '',
  //   feedUrl: 'https://www.dagensmedia.se/rss.xml'
  // },
  // {
  //   title: 'Veckans Affärer',
  //   url: 'https://www.va.se/',
  //   logo: '',
  //   feedUrl: 'https://www.va.se/rss'
  // },
  // {
  //   title: 'KIT',
  //   url: 'https://kit.se/',
  //   logo: '',
  //   feedUrl: 'https://kit.se/feed'
  // },
  // {
  //   title: 'Resume',
  //   url: 'https://www.resume.se/',
  //   logo: '',
  //   feedUrl: 'https://www.resume.se/rss-nyheter'
  // },
  // {
  //   title: 'Breakit',
  //   url: 'https://www.breakit.se/',
  //   logo: '',
  //   feedUrl: 'https://www.breakit.se/feed/artiklar'
  // },
  // {
  //   title: 'Dagens Industri',
  //   url: 'https://www.di.se/',
  //   logo: '',
  //   feedUrl: 'https://www.di.se/rss'
  // },
  {
    title: 'SVT Nyheter',
    url: 'https://www.svt.se/',
    logo: require('../assets/svt.svg'),
    feedUrl: 'https://www.svt.se/nyheter/rss.xml',
  },
  {
    title: 'Sveriges Radio Ekot',
    url: 'https://sverigesradio.se/ekot',
    logo: require('../assets/sveriges-radio.svg'),
    feedUrl: 'https://api.sr.se/api/rss/program/83?format=145',
  },
  {
    title: 'Svenska Dagbladet',
    url: 'https://www.svd.se/',
    logo: require('../assets/svenska-dagbladet.svg'),
    feedUrl: 'https://www.svd.se/?service=rss',
  },
  {
    title: 'Expressen',
    url: 'https://expressen.se/',
    logo: require('../assets/expressen.svg'),
    feedUrl: 'https://feeds.expressen.se',
  },
  {
    title: 'Aftonbladet',
    url: 'https://www.aftonbladet.se/',
    logo: require('../assets/aftonbladet.svg'),
    feedUrl: 'https://www.aftonbladet.se/rss.xml',
  },
  {
    title: 'Dagens Nyheter',
    url: 'https://www.dn.se/',
    logo: require('../assets/dagens-nyheter.svg'),
    feedUrl: 'https://www.dn.se/nyheter/m/rss',
  },
];

const App = () => (
  <div className="app">
    {sortBy(sources, 'title').map(source => (
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

import * as types from '../actions/actionTypes';
import moment from 'moment';

const initialState = [
  {
    id: '1',
    title: 'Product Hunt',
    url: 'https://www.producthunt.com/',
    logo: require('../assets/product-hunt.svg'),
    feedUrl: 'https://www.producthunt.com/feed',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
  },
  {
    id: '2',
    title: 'Designer News',
    url: 'https://www.designernews.co/',
    logo: require('../assets/designer-news.svg'),
    feedUrl: 'https://www.designernews.co/?format=rss',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
  },
  {
    id: '3',
    title: 'Hacker News',
    url: 'https://hnrss.org/',
    logo: require('../assets/hacker-news.svg'),
    feedUrl: 'https://hnrss.org/newest',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
  },
  {
    id: '4',
    title: 'Github',
    url: 'https://github.com/',
    logo: require('../assets/github.svg'),
    feedUrl:
      'http://github-trends.ryotarai.info/rss/github_trends_all_daily.rss',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
  },
  {
    id: '5',
    title: 'Dagens Media',
    url: 'https://www.dagensmedia.se/',
    logo: require('../assets/dagens-media.svg'),
    feedUrl: 'https://www.dagensmedia.se/rss.xml',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
  },
  {
    id: '6',
    title: 'Veckans Affärer',
    url: 'https://www.va.se/',
    logo: require('../assets/veckans-affarer.svg'),
    feedUrl: 'https://www.va.se/rss',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
  },
  {
    id: '7',
    title: 'KIT',
    url: 'https://kit.se/',
    logo: require('../assets/kit.svg'),
    feedUrl: 'https://kit.se/feed',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
  },
  {
    id: '8',
    title: 'Resume',
    url: 'https://www.resume.se/',
    logo: require('../assets/resume.svg'),
    feedUrl: 'https://www.resume.se/rss-nyheter',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
  },
  {
    id: '9',
    title: 'Breakit',
    url: 'https://www.breakit.se/',
    logo: require('../assets/breakit.svg'),
    feedUrl: 'https://www.breakit.se/feed/artiklar',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
  },
  {
    id: '10',
    title: 'Dagens Industri',
    url: 'https://www.di.se/',
    logo: require('../assets/di.svg'),
    feedUrl: 'https://www.di.se/rss',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
  },
  {
    id: '11',
    title: 'Aftonbladet',
    url: 'https://www.aftonbladet.se/',
    logo: require('./../assets/aftonbladet.svg'),
    feedUrl: 'https://www.aftonbladet.se/rss.xml',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
  },
  {
    id: '12',
    title: 'Dagens Nyheter',
    url: 'https://www.dn.se/',
    logo: require('./../assets/dagens-nyheter.svg'),
    feedUrl: 'https://www.dn.se/nyheter/m/rss',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
  },
  {
    id: '13',
    title: 'Expressen',
    url: 'https://expressen.se/',
    logo: require('./../assets/expressen.svg'),
    feedUrl: 'https://feeds.expressen.se',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
  },
  {
    id: '14',
    title: 'SVT Nyheter',
    url: 'https://www.svt.se/',
    logo: require('./../assets/svt.svg'),
    feedUrl: 'https://www.svt.se/nyheter/rss.xml',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
  },
  {
    id: '15',
    title: 'Svenska Dagbladet',
    url: 'https://www.svd.se/',
    logo: require('./../assets/svenska-dagbladet.svg'),
    feedUrl: 'https://www.svd.se/?service=rss',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
  },
  {
    id: '16',
    title: 'Sveriges Radio Ekot',
    url: 'https://sverigesradio.se/ekot',
    logo: require('./../assets/sveriges-radio.svg'),
    feedUrl: 'https://api.sr.se/api/rss/program/83?format=145',
    items: [],
    lastUpdated: null,
    isLoading: false,
    isError: false,
  },
];

const sourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NEWS: {
      const i = state.findIndex(s => s.feedUrl === action.feedUrl);
      return [
        ...state.slice(0, i),
        {
          ...state[i],
          isLoading: true,
          isError: false,
        },
        ...state.slice(i + 1),
      ];
    }
    case types.RECEIVE_NEWS: {
      const i = state.findIndex(s => s.feedUrl === action.feedUrl);
      return [
        ...state.slice(0, i),
        {
          ...state[i],
          isLoading: false,
          isError: false,
          items: action.news,
          lastUpdated: moment().toDate(),
        },
        ...state.slice(i + 1),
      ];
    }
    case types.FETCH_NEWS_ERROR: {
      const i = state.findIndex(s => s.feedUrl === action.feedUrl);
      return [
        ...state.slice(0, i),
        {
          ...state[i],
          isLoading: false,
          isError: true,
          lastUpdated: moment().toDate(),
        },
        ...state.slice(i + 1),
      ];
    }
    default:
      return state;
  }
};

export default sourcesReducer;

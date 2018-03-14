import * as types from './actionTypes';
import {
  defaultSerializer,
  ekotSerializer,
  githubSerializer,
  hackerNewsSerializer,
  productHuntSerializer,
} from '../utils/serializer';

const contructQuery = feedUrl =>
  `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(
    `select * from feednormalizer where url="${feedUrl}"`
  )}&format=json`;

export const fetchNews = feedUrl => {
  return dispatch => {
    dispatch({
      type: types.FETCH_NEWS,
      feedUrl,
    });
    const query = contructQuery(feedUrl);
    fetch(query)
      .then(resp => resp.json())
      .then(json => {
        if (feedUrl.includes('hnrss')) {
          return hackerNewsSerializer(json);
        }
        if (feedUrl.includes('github')) {
          return githubSerializer(json);
        }
        if (feedUrl.includes('sr.se')) {
          return ekotSerializer(json);
        }
        if (feedUrl.includes('producthunt')) {
          return productHuntSerializer(json);
        }
        return defaultSerializer(json);
      })
      .then(json => dispatch(receiveNews(json, feedUrl)))
      .catch(error => {
        console.error(error);
        dispatch(fetchNewsError(error, feedUrl));
      });
  };
};

export const receiveNews = (json, feedUrl) => ({
  type: types.RECEIVE_NEWS,
  news: json,
  feedUrl,
});

export const fetchNewsError = (error, feedUrl) => ({
  type: types.FETCH_NEWS_ERROR,
  error,
  feedUrl,
});

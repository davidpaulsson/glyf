import * as types from './actionTypes';
import { ekotSerializer, defaultSerializer } from '../utils/serializer';

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
        if (feedUrl.includes('sr.se')) {
          return ekotSerializer(json);
        }
        return defaultSerializer(json);
      })
      .then(json => dispatch(receiveNews(json, feedUrl)))
      .catch(error => dispatch(fetchNewsError(error, feedUrl)));
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

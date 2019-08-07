import * as types from './actionTypes';
import { defaultSerializer, githubSerializer } from '../utils/serializer';

let Parser = require('rss-parser');
let parser = new Parser();

export const fetchNews = feedUrl => {
  return dispatch => {
    dispatch({
      type: types.FETCH_NEWS,
      feedUrl,
    });

    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

    if (feedUrl.includes('github')) {
      fetch(CORS_PROXY + feedUrl)
        .then(res => res.json())
        .then(json => dispatch(receiveNews(githubSerializer(json), feedUrl)));
      return;
    }

    parser.parseURL(CORS_PROXY + feedUrl, function(err, feed) {
      if (err) {
        console.error(err);
        dispatch(fetchNewsError(err, feedUrl));
        return false;
      }
      dispatch(receiveNews(defaultSerializer(feed), feedUrl));
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

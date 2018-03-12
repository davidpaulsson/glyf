import React from 'react';
import { ekotSerializer, defaultSerializer } from '../../../utils/serializer';
import FeedHeader from './FeedHeader';
import FeedItems from './FeedItems';

export default class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }
  componentWillMount() {
    const { feedUrl } = this.props;
    // yql query
    const query = `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(
      `select * from feednormalizer where url="${feedUrl}"`
    )}&format=json`;

    fetch(query)
      .then(resp => resp.json())
      .then(rawJson => {
        if (feedUrl.includes('sr.se')) {
          return ekotSerializer(rawJson);
        }
        return defaultSerializer(rawJson);
      })
      .then(news => this.setState({ news }));
  }
  render() {
    return (
      <div className="feed">
        <FeedHeader {...this.props} />
        <FeedItems news={this.state.news} />
      </div>
    );
  }
}

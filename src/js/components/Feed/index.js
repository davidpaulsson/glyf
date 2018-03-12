import React from 'react';
import { ekotSerializer, defaultSerializer } from '../../../utils/serializer';
import FeedItems from './FeedItems';
import Select from '../Select';

class Feed extends React.Component {
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
      <div className="feed__wrapper">
        <div className="feed__header">
          <img src={this.props.logo} className="feed__logo" />
          {/* <Select /> */}
          <a href={this.props.url} className="feed__source">
            {this.props.source}
          </a>
        </div>
        <FeedItems news={this.state.news} />
      </div>
    );
  }
}

export default Feed;

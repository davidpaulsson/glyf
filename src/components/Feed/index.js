import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchNews } from '../../actions/newsActions';
import FeedHeader from './FeedHeader';
import FeedItem from './FeedItem';

class Feed extends React.Component {
  componentWillMount() {
    this.props.fetchNewsFn(this.props.feedUrl);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.feedUrl !== this.props.feedUrl) {
      this.props.fetchNewsFn(this.props.feedUrl);
    }
  }

  render() {
    const { url, logo, source, items, isLoading, isError } = this.props;
    return (
      <div className="feed">
        <FeedHeader url={url} logo={logo} source={source} />
        {isLoading && (
          <div className="feedItems__center">
            <Loader type="TailSpin" color="#3498db" height="32" width="32" />
          </div>
        )}
        {isError && (
          <div className="feedItems__center">
            <p>Oops.</p>
          </div>
        )}
        {!isLoading &&
          !isError && (
            <div className="feedItems__wrapper">
              {items.map((item, i) => (
                <FeedItem key={`${item.link}__${i}`} item={item} />
              ))}
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const source = state.news.find(source => source.feedUrl === ownProps.feedUrl);
  return {
    ...source,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNewsFn: url => dispatch(fetchNews(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);

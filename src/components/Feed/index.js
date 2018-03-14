import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchNews } from '../../actions/newsActions';
import FeedHeader from './FeedHeader';
import FeedItem from './FeedItem';

class Feed extends React.Component {
  componentWillMount() {
    this.props.fetchNews(this.props.feedUrl);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.feedUrl !== this.props.feedUrl) {
      this.props.fetchNews(this.props.feedUrl);
    }
  }

  render() {
    const {
      feedUrl,
      logo,
      title,
      items,
      isLoading,
      isError,
      position,
      details,
    } = this.props;
    return (
      <div className="feed">
        <FeedHeader
          logo={logo}
          title={title}
          feedUrl={feedUrl}
          position={position}
          details={details}
        />
        {isLoading && (
          <div className="feed-items__center">
            <Loader type="TailSpin" color="#3498db" height="32" width="32" />
          </div>
        )}
        {isError && (
          <div className="feed-items__center">
            <p>Oops.</p>
          </div>
        )}
        {!isLoading &&
          !isError && (
            <div className="feed-items__wrapper">
              {items.map((item, i) => (
                <FeedItem
                  key={`${item.link}__${i}`}
                  item={item}
                  details={details}
                />
              ))}
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) =>
  state.news.find(source => source.feedUrl === ownProps.feedUrl);

const mapDispatchToProps = dispatch => ({
  fetchNews: url => dispatch(fetchNews(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);

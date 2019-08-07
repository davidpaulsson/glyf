import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchNews } from '../../actions/sourcesActions';
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
      details,
      feedUrl,
      isError,
      isLoading,
      items,
      logo,
      position,
      sourceId,
      title,
    } = this.props;

    return (
      <div className="feed">
        <FeedHeader
          details={details}
          feedUrl={feedUrl}
          feedId={sourceId}
          isLoading={isLoading}
          logo={logo}
          position={position}
          title={title}
        />
        {isLoading && (
          <div className="feed-items__center">
            <Loader type="TailSpin" color="#2399ff" height="32" width="32" />
          </div>
        )}
        {isError && (
          <div className="feed-items__center">
            <p>Oops.</p>
          </div>
        )}
        {!isLoading && !isError && (
          <div className="feed-items__wrapper">
            {items.map((item, i) => (
              <FeedItem
                details={details}
                item={item}
                key={`${item.link}__${i}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const source = state.sources.find(source => source.id === ownProps.sourceId);
  const { details } = state.sourcesLayout.find(sl => sl.sourceId === source.id);
  return {
    ...source,
    details,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNews: url => {
    dispatch(fetchNews(url));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);

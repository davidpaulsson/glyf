import React from 'react';
import { connect } from 'react-redux';
import {
  EntypoResizeFullScreen,
  EntypoResize100,
  EntypoCcw,
} from 'react-entypo';
import classNames from 'classnames';
import {
  enableDetails,
  disableDetails,
} from '../../actions/sourcesLayoutActions';
import { fetchNews } from '../../actions/sourcesActions';
import FeedSelect from './FeedSelect';

const FeedHeader = ({
  logo,
  title,
  position,
  details,
  isLoading,
  enableDetails,
  disableDetails,
  fetchNews,
}) => (
  <div className="feed__header">
    <FeedSelect logo={logo} title={title} position={position} />
    <div className="feed__header-icon-select-wrapper">
      <button
        onClick={fetchNews}
        className={classNames({
          spin: true,
          'spin--active': isLoading,
        })}
      >
        <EntypoCcw />
      </button>
      {details ? (
        <button onClick={disableDetails} className="ml">
          <EntypoResize100 />
        </button>
      ) : (
        <button onClick={enableDetails} className="ml">
          <EntypoResizeFullScreen />
        </button>
      )}
    </div>
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  enableDetails: () => {
    dispatch(enableDetails(ownProps.feedId));
  },
  disableDetails: () => {
    dispatch(disableDetails(ownProps.feedId));
  },
  fetchNews: () => {
    dispatch(fetchNews(ownProps.feedUrl));
  },
});

export default connect(null, mapDispatchToProps)(FeedHeader);

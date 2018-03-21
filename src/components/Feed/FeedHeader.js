import React from 'react';
import { connect } from 'react-redux';
import {
  enableDetails,
  disableDetails,
} from '../../actions/sourcesLayoutActions';
import { fetchNews } from '../../actions/sourcesActions';
import FeedSelect from './FeedSelect';
import {
  EntypoResizeFullScreen,
  EntypoResize100,
  EntypoCcw,
  EntypoChevronDown,
} from 'react-entypo';
import classNames from 'classnames';

const FeedHeader = ({
  logo,
  title,
  feedId,
  position,
  details,
  isLoading,
  enableDetails,
  disableDetails,
  fetchNews,
}) => (
  <div className="feed__header">
    <FeedSelect logo={logo} title={title} />
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
      {/* <Select feedId={feedId} position={position} /> */}
    </div>
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  enableDetails: () => dispatch(enableDetails(ownProps.feedId)),
  disableDetails: () => dispatch(disableDetails(ownProps.feedId)),
  fetchNews: () => dispatch(fetchNews(ownProps.feedUrl)),
});

export default connect(null, mapDispatchToProps)(FeedHeader);

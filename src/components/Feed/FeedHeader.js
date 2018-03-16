import React from 'react';
import { connect } from 'react-redux';
import {
  enableDetails,
  disableDetails,
} from '../../actions/sourcesLayoutActions';
import Select from '../Select';
import ReactTooltip from 'react-tooltip';

const FeedHeader = ({
  logo,
  title,
  feedId,
  position,
  details,
  enableDetails,
  disableDetails,
}) => (
  <div className="feed__header">
    <div className="feed__header-logo-title-wrapper">
      <img src={logo} alt={title} className="feed__logo" />
      <p className="feed__title">{title}</p>
    </div>
    <div className="feed__header-icon-select-wrapper">
      <div data-for={feedId} data-tip="Ändra visning">
        {details ? (
          <img
            className="feed__header-icon"
            src={require('../../assets/show-less.svg')}
            onClick={disableDetails}
          />
        ) : (
          <img
            data-tip
            className="feed__header-icon"
            src={require('../../assets/show-more.svg')}
            onClick={enableDetails}
          />
        )}
      </div>
      <Select feedId={feedId} position={position} />
    </div>
    <ReactTooltip place="left" effect="solid" id={feedId} class="tooltip" />
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  enableDetails: () => dispatch(enableDetails(ownProps.feedId)),
  disableDetails: () => dispatch(disableDetails(ownProps.feedId)),
});

export default connect(null, mapDispatchToProps)(FeedHeader);

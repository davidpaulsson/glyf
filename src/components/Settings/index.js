import React from 'react';
import { connect } from 'react-redux';
import {
  enableThemeLight,
  enableThemeDark,
} from '../../actions/sourcesLayoutActions';

const Settings = ({ theme }) => (
  <div className="settings">
    settings <button>{theme}</button>
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  switchTheme: () =>
    dispatch(
      ownProps.theme === 'light' ? enableThemeDark() : enableThemeLight()
    ),
});

export default connect(null, mapDispatchToProps)(Settings);

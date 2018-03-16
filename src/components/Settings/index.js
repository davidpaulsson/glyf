import React from 'react';
import { connect } from 'react-redux';
import { enableThemeLight, enableThemeDark } from '../../actions/guiActions';

const Settings = ({ theme }) => (
  <div className="settings">
    settings <button>{theme}</button>
  </div>
);

const mapStateToProps = ({ theme }) => ({ theme });
const mapDispatchToProps = (dispatch, ownProps) => ({
  switchTheme: () =>
    dispatch(ownProps === 'light' ? enableThemeDark() : enableThemeLight()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

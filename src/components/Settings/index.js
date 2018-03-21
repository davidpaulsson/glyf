import React from 'react';
import { connect } from 'react-redux';
import { enableThemeLight, enableThemeDark } from '../../actions/themeActions';

const Settings = ({ theme, switchTheme }) => (
  <div className="settings">
    <img
      src={require('../../assets/glyph-reader.svg')}
      alt="Glyph Reader"
      className="settings__logo"
    />{' '}
    <button onClick={switchTheme}>{theme}</button>
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  switchTheme: () =>
    ownProps.theme === 'light'
      ? dispatch(enableThemeDark())
      : dispatch(enableThemeLight()),
});

export default connect(null, mapDispatchToProps)(Settings);

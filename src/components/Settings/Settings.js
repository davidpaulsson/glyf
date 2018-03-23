import React from 'react';
import { connect } from 'react-redux';
import { EntypoLightDown, EntypoLightUp } from 'react-entypo';
import { enableThemeLight, enableThemeDark } from '../../actions/themeActions';

const Settings = ({ theme, switchTheme }) => (
  <div className="settings">
    <img
      src={
        theme === 'light'
          ? require('../../assets/glyf.svg')
          : require('../../assets/glyf--inverted.svg')
      }
      alt="Glyph Reader"
      className="settings__logo"
    />{' '}
    <button onClick={switchTheme}>
      {theme === 'light' ? <EntypoLightDown /> : <EntypoLightUp />}
    </button>
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  switchTheme: () =>
    ownProps.theme === 'light'
      ? dispatch(enableThemeDark())
      : dispatch(enableThemeLight()),
});

export default connect(null, mapDispatchToProps)(Settings);

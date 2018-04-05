import React from 'react';
import { connect } from 'react-redux';
import {
  EntypoLightDown,
  EntypoLightUp,
  EntypoInfoWithCircle,
} from 'react-entypo';
import { enableThemeLight, enableThemeDark } from '../../actions/themeActions';

const pjson = require('../../../package.json');

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
    />
    <div>
      <button onClick={switchTheme} className="ml">
        {theme === 'light' ? <EntypoLightDown /> : <EntypoLightUp />}
      </button>
      <button
        onClick={() =>
          alert(`
Glyf v${pjson.version}

🙋‍♂️ Author: ${pjson.author}

🐛 Report bugs, feature requests etc
https://github.com/davidpaulsson/glyf/issues

🙌 Want to contribute?
https://github.com/davidpaulsson/glyf
      `)
        }
        className="ml"
      >
        <EntypoInfoWithCircle />
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  switchTheme: () =>
    ownProps.theme === 'light'
      ? dispatch(enableThemeDark())
      : dispatch(enableThemeLight()),
});

export default connect(null, mapDispatchToProps)(Settings);

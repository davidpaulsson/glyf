import React from 'react';
import { connect } from 'react-redux';
import Feed from './components/Feed';
import Settings from './components/Settings';
import classNames from 'classnames';

class App extends React.Component {
  render() {
    const { sources, theme } = this.props;
    return (
      <div
        className={classNames({
          app: true,
          'app--theme-light': theme === 'light',
          'app--theme-dark': theme === 'dark',
        })}
      >
        <Settings theme={theme} />
        <div className="app__feeds">
          {sources.map((source, i) => (
            <Feed key={`${source.sourceId}__${i}`} {...source} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ sourcesLayout, theme }) => ({
  sources: sourcesLayout,
  theme,
});

export default connect(mapStateToProps)(App);

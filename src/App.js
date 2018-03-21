import React from 'react';
import { connect } from 'react-redux';
import Feed from './components/Feed';
import Settings from './components/Settings';

class App extends React.Component {
  render() {
    const { sources, theme } = this.props;
    return (
      <div className="app">
        <Settings theme={theme} />
        <div className="app__feeds">
          {sources.map((source, i) => (
            <Feed sourceId={source.sourceId} key={`${source.sourceId}__${i}`} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ sourcesLayout, theme }) => {
  // debugger;
  return {
    sources: sourcesLayout,
    theme,
  };
};
export default connect(mapStateToProps)(App);

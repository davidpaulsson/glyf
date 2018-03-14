import React from 'react';
import { connect } from 'react-redux';
import Feed from './components/Feed';

class App extends React.Component {
  render() {
    const { sources } = this.props;
    return (
      <div className="app">
        {sources.map((source, i) => (
          <Feed
            feedUrl={source.feedUrl}
            key={`${source.feedUrl}__${i}`}
            position={i}
            details={source.details}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sources: state.gui,
});

export default connect(mapStateToProps)(App);

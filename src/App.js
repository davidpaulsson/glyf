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
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sources: state.position,
});

export default connect(mapStateToProps)(App);

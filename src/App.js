import React from 'react';
import { connect } from 'react-redux';
import Feed from './components/Feed';
import sortBy from 'lodash.sortby';

class App extends React.Component {
  render() {
    const { sources } = this.props;
    return (
      <div className="app">
        {sortBy(sources, 'position').map(source => (
          <Feed feedUrl={source.feedUrl} key={source.url} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sources: state.news,
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { connect } from 'react-redux';
import Feed from './components/Feed';
import Settings from './components/Settings';

class App extends React.Component {
  render() {
    const { gui, theme } = this.props;
    return (
      <div className="app">
        <Settings theme={theme} />
        <div className="app__feeds">
          {gui.map((source, i) => (
            <Feed
              feedUrl={source.feedUrl}
              key={`${source.feedUrl}__${i}`}
              position={i}
              details={source.details}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ gui, theme }) => ({ gui, theme });
export default connect(mapStateToProps)(App);

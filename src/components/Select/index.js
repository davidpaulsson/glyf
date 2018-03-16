import React from 'react';
import { connect } from 'react-redux';
import { changePosition } from '../../actions/sourcesLayoutActions';
import orderBy from 'lodash.orderby';

const Select = class extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.props.changePosition(event.target.value);
  }

  render() {
    const { feedUrl, sources } = this.props;

    return (
      <div className="select">
        <select
          value={feedUrl}
          aria-label="Välj nyhetskälla"
          onChange={this.handleChange}
        >
          {sources.map(s => (
            <option key={s.feedUrl} value={s.id}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
    );
  }
};

const mapStateToProps = state => ({ sources: orderBy(state.sources, 'title') });
const mapDispatchToProps = (dispatch, ownProps) => ({
  changePosition: sourceId =>
    dispatch(changePosition(ownProps.position, sourceId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);

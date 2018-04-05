import React from 'react';
import { EntypoChevronDown, EntypoChevronUp } from 'react-entypo';
import orderBy from 'lodash.orderBy';
import { connect } from 'react-redux';
import { changePosition } from '../../actions/sourcesLayoutActions';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class FeedSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  arrowRenderer({ isOpen }) {
    return isOpen ? <EntypoChevronUp /> : <EntypoChevronDown />;
  }
  optionRenderer({ logo, label }) {
    return (
      <div className="custom-option">
        <img src={logo} />
        {label}
      </div>
    );
  }
  valueComponent({ value }) {
    return (
      <div className="custom-value">
        <img src={value.logo} />
        {value.label}
      </div>
    );
  }
  handleChange({ value }) {
    this.props.changePosition(value);
  }
  render() {
    const { value, sources } = this.props;

    return (
      <Select
        value={value}
        clearable={false}
        onChange={this.handleChange}
        arrowRenderer={this.arrowRenderer}
        optionRenderer={this.optionRenderer}
        valueComponent={this.valueComponent}
        options={sources.map(source => ({
          value: source.id,
          label: source.title,
          logo: source.logo,
        }))}
      />
    );
  }
}

const mapStateToProps = state => ({ sources: orderBy(state.sources, 'title') });
const mapDispatchToProps = (dispatch, ownProps) => ({
  changePosition: sourceId =>
    dispatch(changePosition(ownProps.position, sourceId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedSelect);

import React from 'react';
import { EntypoChevronDown, EntypoChevronUp } from 'react-entypo';
import orderBy from 'lodash.orderBy';
import { connect } from 'react-redux';
import classNames from 'classnames';
import enhanceWithClickOutside from 'react-click-outside';
import { changePosition } from '../../actions/sourcesLayoutActions';

class FeedSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }
  handleClickOutside() {
    if (this.state.open) {
      this.toggle();
    }
  }
  toggle() {
    this.setState({ open: !this.state.open });
  }
  render() {
    const { logo, title, sources } = this.props;
    const { open } = this.state;
    return (
      <div className="select">
        <a
          className={classNames({
            select__anchor: true,
            'select__anchor--active': open,
          })}
          onClick={this.toggle}
        >
          <img src={logo} alt={title} className="select__logo" />
          {title}
          {open ? <EntypoChevronUp /> : <EntypoChevronDown />}
        </a>
        <ul
          className={classNames({
            select__drop: true,
            'select__drop--active': open,
          })}
        >
          {sources.map(source => (
            <li className="select__drop-item" key={source.id}>
              <img
                src={source.logo}
                alt={source.title}
                className="select__drop-item-logo"
              />
              {source.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ sources: orderBy(state.sources, 'title') });
const mapDispatchToProps = (dispatch, ownProps) => ({
  changePosition: sourceId =>
    dispatch(changePosition(ownProps.position, sourceId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  enhanceWithClickOutside(FeedSelect)
);


import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { onClick, props: { activeTab, label }} = this;

    let className = 'nav-item nav-link tabs';

    if (activeTab === label) {
      className += ' active';
    }

    return (
      <div
        className={className}
        onClick={onClick}
      >
        {label}
      </div>
    );
  }
}
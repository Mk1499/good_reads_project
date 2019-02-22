import React, { Component } from 'react';

export default class DropDownList extends Component {

  state = {

    selected: '',

  };


  handleChange = (selected) => {

    this.setState({ selected: selected.target.value });
  };

  render() {
    
    const {options} = this.props;

    return(
    <select
      onChange={this.handleChange}
      value={this.state.selected}
    >
      {
        options.map(function (option) {
        
        return (
          <option value={option.value}>{option.label}</option>
        );

      })

      }
    </select>
    );
  }

}
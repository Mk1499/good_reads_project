import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import './App.css'

class MenuContent extends Component {
  constructor(props) {
    super(props)

    this.items = [""]
    this.items.push()
  }

  render() {
    return (
      <div className="menu">
        {this.items.map(i => <div className="menu-item">
          <Link to="/"
            onClick={this.props.closeCallback}> Home </Link>

          <Link to="/"
            onClick={this.props.closeCallback}> About Us </Link>

           <Link to="/"
            onClick={this.props.closeCallback}> Categories </Link>

          <Link to="/"
            onClick={this.props.closeCallback}> Authors </Link>

          <Link to="/"
            onClick={this.props.closeCallback}> Terms  </Link>

        </div>)}
      </div>
    )
  }
}

// MenuContent.PropTypes = {
//   closeCallback: React.PropTypes.func.isRequired
// }

export default MenuContent

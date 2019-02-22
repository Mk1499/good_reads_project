import React, { Component } from 'react'

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
          <a href="/"
            onClick={this.props.closeCallback}
            target="_blank"> Home </a>

          <a href="/"
            onClick={this.props.closeCallback}
            target="_blank"> About Us </a>

           <a href="/"
            onClick={this.props.closeCallback}
            target="_blank"> Categories </a>

          <a href="/"
            onClick={this.props.closeCallback}
            target="_blank"> Authors </a>

          <a href="/"
            onClick={this.props.closeCallback}
            target="_blank"> Terms  </a>

        </div>)}
      </div>
    )
  }
}

// MenuContent.PropTypes = {
//   closeCallback: React.PropTypes.func.isRequired
// }

export default MenuContent

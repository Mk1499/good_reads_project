import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';
// import './App.css'

class MenuContent extends Component {
  constructor(props) {
    super(props)

    this.items = [""]
    this.items.push()
  }

  //popup 
  aboutUs() {
    const content = (
     <div><span>ABOUT US about us ABOUT US about us </span></div>
      )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'About Us!'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }

  render() {
    return (
      <div className="menu">
        {this.items.map(i => <div className="menu-item">
          <Link to="/"
            onClick={this.props.closeCallback}> Home </Link>

          <Link to="/"
            onClick={this.aboutUs}> About Us </Link>
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

import React, { Component } from 'react'
import { Link } from '@reach/router';


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
          <Link to="/books"> Books </Link>

          
           <Link to="/categories"> Categories </Link>

          <Link to="/authors"> Authors </Link>

        </div>)}
        </div>
    )
  }
}

// MenuContent.PropTypes = {
//   closeCallback: React.PropTypes.func.isRequired
// }

export default MenuContent

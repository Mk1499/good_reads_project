import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Signup extends Component {
  
    render(){
        return (
            <div className="FormCenter">
          <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="Field">
              <label className="Label" htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" className="Input" placeholder="Write Your First Name" name="firstname" ></input>
            </div>

            <div className="Field">
              <label className="Label" htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" className="Input" placeholder="Write Your Last Name" name="lastname" ></input>
            </div>

            <div className="Field">
              <label className="Label" htmlFor="email">E-mail</label>
              <input type="email" id="email" className="Input" placeholder="Write Your E-mail" name="email" ></input>
            </div>

            <div className="Field">
              <label className="Label" htmlFor="password">Password</label>
              <input type="password" id="password" className="Input" placeholder="Password" name="password" ></input>
            </div>

            <div className="Field">
              <label className="Label" htmlFor="password">Confirm Password</label>
              <input type="password" id="password" className="Input" placeholder="Retype Password" name="password" ></input>
            </div>

            {/* Handle Image Upload */}

            <div className="Field">
              <button className="fieldButton">SignUp</button>
              <Link to="/" className="link" >I'm already member</Link>
            </div>
          
          </form>

        </div>
        );
    }

}

export default Signup;
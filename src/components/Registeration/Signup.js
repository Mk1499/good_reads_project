import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';


class Signup extends Component {
  
    render(){
        return (
            <div className="FormCenter">
          <form className="FormFields" onSubmit={this.handleSubmit}>
          <QueueAnim
            component="div"
            animConfig={[
              { opacity: [1, 0], translateX: [30, 0] },
              { height: 0 },
            ]}
            ease={['easeOutQuart', 'easeInOutQuart']}
            duration={[550, 450]}
            interval={150}
          >
            <div key="a" className="Field">
              <label className="Label" htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" className="Input" placeholder="Write Your First Name" name="firstname" ></input>
            </div>

            <div key="b" className="Field">
              <label className="Label" htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" className="Input" placeholder="Write Your Last Name" name="lastname" ></input>
            </div>

            <div key="c" className="Field">
              <label className="Label" htmlFor="email">E-mail</label>
              <input type="email" id="email" className="Input" placeholder="Write Your E-mail" name="email" ></input>
            </div>

            <div key="d" className="Field">
              <label className="Label" htmlFor="password">Password</label>
              <input type="password" id="password" className="Input" placeholder="Password" name="password" ></input>
            </div>

            <div key="e" className="Field">
              <label className="Label" htmlFor="password">Confirm Password</label>
              <input type="password" id="password" className="Input" placeholder="Retype Password" name="password" ></input>
            </div>

            {/* Handle Image Upload */}

            <div key="f" className="Field">
              <button className="fieldButton">SignUp</button>
              <Link to="/" className="link" >I'm already member</Link>
            </div>
            </QueueAnim>
          </form>

        </div>
        );
    }

}

export default Signup;
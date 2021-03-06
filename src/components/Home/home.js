import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Login from '../Registeration/Login';
import main from './main';
import Signup from '../Registeration/Signup';


class Home extends Component {
  render() {
    return (
      // Router Start
      <Router>

        <div className="App">

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">
                <Route path="/" component={main}></Route>
              </div>
              <div className="col-md-5">

                {/* Switching Buttons */}
                <div className="switch">
                  <NavLink exact to="/" activeClassName="switch--Active" className="switcherItem">LogIn</NavLink>
                  <NavLink to="/signup" activeClassName="switch--Active" className="switcherItem">SignUp</NavLink>
                </div>

                <div className="switch_title">
                  <NavLink exact to="/" activeClassName="switch_title--Active" className="switch_title_item">LogIn</NavLink> or
                  <NavLink to="/signup" activeClassName="switch_title--Active" className="switch_title_item">SignUp</NavLink>
                </div>
                {/* Switching Buttons End */}


                {/* Starting Form */}

                <Route path="/signup" component={Signup}></Route>

                <Route exact path="/" component={Login}></Route>

                {/* Ending Form */}

              </div>

            </div>

          </div>
        </div>
      </Router>
      // Router End
    );
  }
}

export default Home;

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserHomePage from '../UserHomePage/userHomePage';
import QueueAnim from 'rc-queue-anim';


class Login extends Component {
  //Contructor of the component start
  constructor(props) {
    let loggedIn = false;
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedIn
    }

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.validate = this.validate.bind(this);

  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    const {email, password} = this.state;
    // let path = "/user";
    // this.props.history.push(path);
    window.location = "/user";
  }
 


  render() {

      if(this.state.loggedIn){
        return <Redirect to="/user" />
      }

    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>

          <QueueAnim component="div" animConfig={[
            { opacity: [1, 0], translateX: [0, 30] }, { height: 0 },]}
            ease={['easeOutQuart', 'easeInOutQuart']}
            duration={[550, 450]} interval={150} >

            <div key="a" className="Field">
              <label className="Label" htmlFor="email">E-mail</label>
              <input type="email" id="email" className="Input" placeholder="Write Your E-mail" name="email" value={this.state.email} onChange={this.onChange}></input>
            </div>

            <div key="b" className="Field">
              <label className="Label" htmlFor="password">Password</label>
              <input type="password" id="password" className="Input" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}></input>
            </div>

            <div key="c" className="Field">
              <button className="fieldButton" onClick={this.handleSubmit}>Login</button>
              <Link to="/Signup" className="link" >Don't Have Account ?</Link>
            </div>
          </QueueAnim>
        </form>

      </div>
    );
  }

}

export default Login;
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserHomePage from '../UserHomePage/userHomePage';
import QueueAnim from 'rc-queue-anim';


class Login extends Component {
  //Contructor of the component start
  constructor() {
    super();
    this.state = {
      users: { email: "", passwd: ""},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  };

  // function helps to store user details in state in users: {}
  handleChange(e) {
    let users = this.state.users;
    users[e.target.name] = e.target.value;
    this.setState({
      users
    });

  }

  // validate the user details by calling validateForm() function 
  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {

      e.preventDefault();
      let users = new FormData(e.target);

      var result = {};


      for (let entry of users.entries()) {
        result[entry[0]] = entry[1];
      }
      console.log(result);


    //   fetch('https://gomaanodejsapp.herokuapp.com/user/add', {
    //     method: 'POST',
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //       //"Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     body: JSON.stringify(result)
    //   }).then(res => res.json())
    //     .then(response => console.log('Success:', JSON.stringify(response)))
    //     .then(()=> {this.props.history.push(`/`)})
    //     .catch(error => console.error('Error:', error));

    this.props.history.push(`/user`);
    }
  }


  // Function to Validate  the Input 

  validateForm() {

    let users = this.state.users;
    let errors = {};
    let formIsValid = true;

    if (!users["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter Correct Email";
    }

    if (!users["passwd"]) {
      formIsValid = false;
      errors["passwd"] = "*Please enter Correct Password";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }



  render() {

    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>

          <QueueAnim component="div" animConfig={[
            { opacity: [1, 0], translateX: [0, 30] }, { height: 0 },]}
            ease={['easeOutQuart', 'easeInOutQuart']}
            duration={[550, 450]} interval={150} >

            <div key="a" className="Field">
              <label className="Label" htmlFor="email">E-mail</label>
              <input type="email" id="email" className="Input" placeholder="Write Your E-mail" name="email" value={this.state.users.email} onChange={this.handleChange} ></input>
              <div className="errorMsg">{this.state.errors.email}</div>
            </div>

            <div key="b" className="Field">
              <label className="Label" htmlFor="passwd">Password</label>
              <input type="password" id="passwd" className="Input" placeholder="passwd" name="passwd" value={this.state.users.passwd} onChange={this.handleChange}></input>
              <div className="errorMsg">{this.state.errors.passwd}</div>
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
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';


class Signup extends Component {

  constructor() {
    super();
    this.state = {
      users: { fName: "", lName: "", email: "", passwd: "", re_passwd: "" },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

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
  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {


      e.preventDefault();
      let users = new FormData(e.target);

      var result = {};


      for (let entry of users.entries()) {
        result[entry[0]] = entry[1];
      }
      console.log(result);


      fetch('https://gomaanodejsapp.herokuapp.com/user/add', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          //"Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(result)
      }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .then(()=> {this.props.history.push(`/`)})
        .catch(error => console.error('Error:', error));

    }
  }


  // Function to Validate  the Input 

  validateForm() {

    let users = this.state.users;
    let errors = {};
    let formIsValid = true;

    if (!users["fName"]) {
      formIsValid = false;
      errors["fName"] = "*Please enter your fName.";
    }

    if (typeof users["fName"] !== "undefined") {
      if (!users["fName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["fName"] = "*Please enter alphabet characters only.";
      }
    }

    if (!users["lName"]) {
      formIsValid = false;
      errors["lName"] = "*Please enter lName.";
    }

    if (typeof users["lName"] !== "undefined") {
      if (!users["lName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lName"] = "*Please enter alphabet characters only.";
      }
    }

    if (!users["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your E-mail Address.";
    }

    if (typeof users["email"] !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(users["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!users["passwd"]) {
      formIsValid = false;
      errors["passwd"] = "*Please enter your passwd.";
    }

    if (typeof users["passwd"] !== "undefined") {
      if (!users["passwd"].match(/^.*(?=.{5,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)) {
        formIsValid = false;
        errors["passwd"] = "*Please enter secure and strong passwd.";
      }
    }

    if (!users["re_passwd"]) {
      formIsValid = false;
      errors["re_passwd"] = "*Please enter your Confirmation for passwd.";
    }

    if (users["re_passwd"] !== users["passwd"]) {
      formIsValid = false;
      errors["re_passwd"] = "*Make Sure you Entered Same passwd.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      <div className="FormCenter">
        <form className="Formusers" onSubmit={this.submituserRegistrationForm}>

          {/* Just For Animation */}
          <QueueAnim
            component="div"
            animConfig={[{ opacity: [1, 0], translateX: [30, 0] }, { height: 0 },]}
            ease={['easeOutQuart', 'easeInOutQuart']} duration={[550, 450]} interval={150} >

            {/* start Form users */}
            <div key="a" className="Field">
              <label className="Label" htmlFor="fName">First Name</label>
              <input type="text" id="fName" className="Input" placeholder="Write Your First Name" name="fName" value={this.state.users.fName} onChange={this.handleChange} ></input>
              <div className="errorMsg">{this.state.errors.fName}</div>
            </div>

            <div key="b" className="Field">
              <label className="Label" htmlFor="lName">Last Name</label>
              <input type="text" id="lName" className="Input" placeholder="Write Your Last Name" name="lName" value={this.state.users.lName} onChange={this.handleChange} ></input>
              <div className="errorMsg">{this.state.errors.lName}</div>
            </div>

            <div key="c" className="Field">
              <label className="Label" htmlFor="email">E-mail</label>
              <input type="text" id="email" className="Input" placeholder="Write Your E-mail" name="email" value={this.state.users.email} onChange={this.handleChange} ></input>
              <div className="errorMsg">{this.state.errors.email}</div>
            </div>

            <div key="d" className="Field">
              <label className="Label" htmlFor="passwd">passwd</label>
              <input type="password" id="passwd" className="Input" placeholder="passwd" name="passwd" value={this.state.users.passwd} onChange={this.handleChange} ></input>
              <div className="errorMsg">{this.state.errors.passwd}</div>
            </div>

            <div key="e" className="Field">
              <label className="Label" htmlFor="re_passwd">Confirm passwd</label>
              <input type="password" id="re_passwd" className="Input" placeholder="Retype re_passwd" name="re_passwd" value={this.state.users.re_passwd} onChange={this.handleChange} ></input>
              <div className="errorMsg">{this.state.errors.re_passwd}</div>
            </div>


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
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';


class Signup extends Component {
    
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

// function helps to store user details in state in fields: {}
handleChange(e) {
  let fields = this.state.fields;
  fields[e.target.name] = e.target.value;
  this.setState({
    fields
  });

}


// validate the user details by calling validateForm() function 
submituserRegistrationForm(e) {
  e.preventDefault();
  if (this.validateForm()) {
      let fields = {};
      fields["firstname"] = "";
      fields["lastname"] = "";
      fields["email"] = "";
      fields["password"] = "";
      this.setState({fields:fields});
      alert("You Can Login Now");
      
  }
}


// Function to Validate  the Input 

validateForm() {

  let fields = this.state.fields;
  let errors = {};
  let formIsValid = true;

  if (!fields["firstname"]) {
    formIsValid = false;
    errors["firstname"] = "*Please enter your firstname.";
  }

  if (typeof fields["firstname"] !== "undefined") {
    if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors["firstname"] = "*Please enter alphabet characters only.";
    }
  }

  if (!fields["lastname"]) {
    formIsValid = false;
    errors["lastname"] = "*Please enter lastname.";
  }

  if (typeof fields["lastname"] !== "undefined") {
    if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors["lastname"] = "*Please enter alphabet characters only.";
    }
  }

  if (!fields["email"]) {
    formIsValid = false;
    errors["email"] = "*Please enter your E-mail Address.";
  }

  if (typeof fields["email"] !== "undefined") {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(fields["email"])) {
      formIsValid = false;
      errors["email"] = "*Please enter valid email-ID.";
    }
  }

  if (!fields["password"]) {
    formIsValid = false;
    errors["password"] = "*Please enter your password.";
  }

  if (typeof fields["password"] !== "undefined") {
    if (!fields["password"].match(/^.*(?=.{5,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)) {
      formIsValid = false;
      errors["password"] = "*Please enter secure and strong password.";
    }
  }

  if (!fields["conPassword"]) {
    formIsValid = false;
    errors["conPassword"] = "*Please enter your Confirmation for Password.";
  }

  if (fields["conPassword"] !== fields["password"]) {
      formIsValid = false;
      errors["conPassword"] = "*Make Sure you Entered Same Password.";
  }

  this.setState({
    errors: errors
  });
  return formIsValid;
}
  
    render(){
        return (
            <div className="FormCenter">
          <form className="FormFields" onSubmit= {this.submituserRegistrationForm}>

          {/* Just For Animation */}
          <QueueAnim
            component="div"
            animConfig={[ { opacity: [1, 0], translateX: [30, 0] }, { height: 0 },]}
            ease={['easeOutQuart', 'easeInOutQuart']} duration={[550, 450]} interval={150} >

            {/* start Form Fields */}
            <div key="a" className="Field">
              <label className="Label" htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" className="Input" placeholder="Write Your First Name" name="firstname" value={this.state.fields.firstname} onChange={this.handleChange}  ></input>
              <div className="errorMsg">{this.state.errors.firstname}</div>
            </div>

            <div key="b" className="Field">
              <label className="Label" htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" className="Input" placeholder="Write Your Last Name" name="lastname" value={this.state.fields.lastname} onChange={this.handleChange} ></input>
              <div className="errorMsg">{this.state.errors.lastname}</div>
            </div>

            <div key="c" className="Field">
              <label className="Label" htmlFor="email">E-mail</label>
              <input type="text" id="email" className="Input" placeholder="Write Your E-mail" name="email" value={this.state.fields.email} onChange={this.handleChange} ></input>
              <div className="errorMsg">{this.state.errors.email}</div>
            </div>

            <div key="d" className="Field">
              <label className="Label" htmlFor="password">Password</label>
              <input type="password" id="password" className="Input" placeholder="Password" name="password" value={this.state.fields.password} onChange={this.handleChange} ></input>
              <div className="errorMsg">{this.state.errors.password}</div>
            </div>

            <div key="e" className="Field">
              <label className="Label" htmlFor="conPassword">Confirm Password</label>
              <input type="password" id="conPassword" className="Input" placeholder="Retype conPassword" name="conPassword" value={this.state.fields.conPassword} onChange={this.handleChange} ></input>
              <div className="errorMsg">{this.state.errors.conPassword}</div>
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
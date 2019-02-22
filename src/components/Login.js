import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';


class Login extends Component {
    //Contructor of the component start
    constructor(){

        super();
          
        this.state = {
            email: '',
            password: ''
        };
        // HBD
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e){
        // code Write Later
    }

    handleSubmit(e){
        // code Write Later
    }

  
    render(){
        return (
            <div className="FormCenter">
          <form onClick={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
          <QueueAnim
            component="div"
            animConfig={[
              { opacity: [1, 0], translateX: [0, 30] },
              { height: 0 },
            ]}
            ease={['easeOutQuart', 'easeInOutQuart']}
            duration={[550, 450]}
            interval={150}
          >

            <div key="a" className="Field">
              <label className="Label" htmlFor="email">E-mail</label>
              <input type="email" id="email" className="Input" placeholder="Write Your E-mail" name="email" value={this.state.email} onChange={this.handleChange}></input>
            </div>

            <div key="b" className="Field">
              <label className="Label" htmlFor="password">Password</label>
              <input type="password" id="password" className="Input" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}></input>
            </div>

            <div key="c" className="Field">
              <button className="fieldButton">Login</button>
              <Link to="/Signup" className="link" >Don't Have Account ?</Link>
            </div>
          </QueueAnim>
          </form>

        </div>
        );
    }

}

export default Login;
import React, {Component} from 'react';
import Typing from 'react-typing-animation';


class Login extends Component {
    //Contructor of the component start
    constructor(){

        super();
          
        this.state = {
            email: '',
            password: ''
        };

    }


     
    render(){
        return (
            <div className="FormCenter">
          <Typing>
            <div className="typeAnime">
            <Typing.Reset />
           <span>Meet your next favorite book.</span>
          <Typing.Backspace count={29} delay={1800}/>
            <span>Deciding what to read next?</span>
            <Typing.Backspace count={27} delay={1800}/>
            <span>What will you discover?</span>
            <Typing.Backspace count={23} delay={1800} />
            <span>ITI Open-Source</span>
            <Typing.Backspace count={15} delay={1800} />
           <Typing.Delay ms={2000} />
           <Typing.Reset count={1} delay={500} />
             
          </div>
        </Typing>
        </div>
        );
    }

}

export default Login;
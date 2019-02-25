import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Admin from './components/Admin/Admin';
import UserHomePage from './components/UserHomePage/userHomePage';
import "semantic-ui-css/semantic.min.css";
import Home from './components/Home/home';

// just for test delete when finish
import BookID from './components/BookID/BookID'; 

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Admin path="/admin" />
        <UserHomePage path="/user" />

        {/* // just for test delete when finish */}
         <BookID path="/bookid"/>
      </Router>
    );
  }
}

export default App;
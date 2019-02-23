import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Admin from './components/Admin/Admin';
import UserHomePage from './components/UserHomePage/userHomePage';

class App extends Component {
  render() {
    return (
        <Router>
          <Admin path="/admin" />
          <UserHomePage path="/user" />
        </Router>
    );
  }
}

export default App;
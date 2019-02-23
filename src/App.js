import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Admin from './components/Admin/Admin';

class App extends Component {
  render() {
    return (
        <Router>
          <Admin path="/admin" />

        </Router>
    );
  }
}

export default App;
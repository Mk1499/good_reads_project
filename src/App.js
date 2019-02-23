import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Admin from './components/Admin/Admin';
import UserHomePage from './components/UserHomePage/userHomePage';
import Home from './components/Home/home';
import CategoriesPage from './components/Categories/CategoriesPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Admin path="/admin" />
        <UserHomePage path="/user" />
        <CategoriesPage path="/categories" />
      </Router>
    );
  }
}

export default App;
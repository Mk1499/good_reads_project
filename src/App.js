import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Admin from './components/Admin/Admin';
import UserHomePage from './components/UserHomePage/userHomePage';
import Home from './components/Home/home';
import CategoriesPage from './components/Categories/CategoriesPage';
import CategoryBooksPage from './components/CategoryBooks/CategoryBooksPage';
 
import AuthorProfile from './components/Author/AuthorProfile' ; 


const AppContext = React.createContext("data") ; 

class App extends Component {






  render() {
    return (
      <Router>
        <Home path="/" />
        <Admin path="/admin" />
        <UserHomePage path="/user" />
        <CategoriesPage path="/categories" />
        <CategoryBooksPage path="/categories/cbooks" />
     
        <AuthorProfile path="/author" /> 
      </Router>
    );
  }
}

export default App;
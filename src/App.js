import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Admin from './components/Admin/Admin';
import UserHomePage from './components/UserHomePage/userHomePage';
import "semantic-ui-css/semantic.min.css";
import Home from './components/Home/home';
import CategoriesPage from './components/Categories/CategoriesPage';
import CategoryBooksPage from './components/CategoryBooks/CategoryBooksPage';
import AuthorProfile from './components/Author/AuthorProfile' ; 

 
// just for test delete when finish
import BookID from './components/BookID/BookID'; 
import AllAuthors from './components/Author/AllAuthors';


const AppContext = React.createContext("data") ;

class App extends Component {






  render() {
    return (
      <Router>
        <Home path="/" />
        <Admin path="/admin" />
        <UserHomePage path="/user" />

        {/* // just for test delete when finish */}
        <BookID path="/book/:id"/>
        <CategoriesPage path="/categories" />
        <CategoryBooksPage path="/categories/:id" />
        <AuthorProfile path="/author/:id" /> 
        <AllAuthors path = "/authors" /> 
      </Router>
    );
  }
}

export default App;

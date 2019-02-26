import React , {Component}from 'react'; 
import {Link} from '@reach/router';
class Navbar extends Component {


    render (){
         
        return (
            

    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">goodreads</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/categories">Categories</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/books">Books</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/authors">Authors</Link>
      </li>
    
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    
  </div>
</nav>
             
        );

    }

}

export default Navbar ; 
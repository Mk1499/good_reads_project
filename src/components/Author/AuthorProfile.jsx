import React, { Component } from 'react';
import Navbar from '../Shared/navbar';
import AuthorBooks from './authorBooks';
import AuthorCard from './AuthorCard' ; 


class AuthorProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
           books : [] ,
            author : []
        }
    }
    componentDidMount(){
        
      
    }

    render() {
        
        fetch(`https://gomaanodejsapp.herokuapp.com/author/${this.props.id}`)
        .then(response => response.json())
        .then(result =>  {this.setState({ author: result.author }) ; 
                         this.setState({ books: result.author_books })
                         } 
             
            );
            
        return (
            <div>
                < Navbar />
                <div class="container Author-page">
                    <div class="row">
                    {console.log(`Data sent from profile: ${this.state.author.first_name}`)}
                    <AuthorCard authorInfo = {this.state.author} className="col-md-4"   />
                    </div>
                </div>

                <br /><br /><br /><br /><br />
                <div className="container card">
                    <div className="row">

                        <h3 style={{ margin: "20px" }}>Author's Books</h3>
                        <AuthorBooks books ={this.state.books} />
                    </div>
                </div>

            </div>
        );
    }
}
export default AuthorProfile; 
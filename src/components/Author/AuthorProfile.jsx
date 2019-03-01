import React, { Component } from 'react';
import Navbar from '../Shared/navbar';
import AuthorBooks from './authorBooks';
import AuthorCard from './AuthorCard';


class AuthorProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            author: null
        }
    }

    componentDidMount() {
        fetch(`https://gomaanodejsapp.herokuapp.com/author/${this.props.id}`)
            .then(response => response.json())
            .then(result => {
                this.setState({ author: result.author });
                this.setState({ books: result.author_books })
            }

            );
    }

    render() {

        if (this.state.author == null){
            console.log("Gomaa")
            return null;
            
        }

        return (
            <div>
                < Navbar />
                <div class="container Author-page">
                    <div class="row">

                        <AuthorCard authorInfo={this.state.author} className="col-md-4" />
                    </div>
                </div>

                <br /><br /><br /><br /><br />
                <div className="container card">
                    <div className="row">

                        <h3 style={{ margin: "20px" }}>Author's Books</h3>
                        
                        
                        {
                            this.state.books.map(
                                (book) =>
                               <AuthorBooks book ={book} />
                        
                                                )
                        
                        }
                        
                    </div>
                </div>

            </div>
        );
    }
}
export default AuthorProfile; 
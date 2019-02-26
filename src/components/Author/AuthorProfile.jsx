import React, { Component } from 'react';
import Navbar from '../Shared/navbar';
import AuthorBooks from './authorBooks';
import AuthorCard from './AuthorCard' ; 


class AuthorProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: { bookId: 1, cover: "Book Cover ", name: "inferno", author: "Dan Brawn", avgRating: 4, rating: 4, shelve: "read" }
        }
    }

    render() {
        return (
            <div>
                < Navbar />
                <div class="container Author-page">
                    <div class="row">
                     < AuthorCard />
                    </div>
                </div>

                <br /><br /><br /><br /><br />
                <div className="container card">
                    <div className="row">

                        <h3 style={{ margin: "20px" }}>Author's Books</h3>
                        <AuthorBooks book={this.state.book} />
                    </div>
                </div>

            </div>
        );
    }
}
export default AuthorProfile; 
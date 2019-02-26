import React, { Component } from 'react';
import {Link} from '@reach/router';

export default class BookCard extends Component {


    render() {
        return (
            <div className="card book-card-container" style={{ width: "18rem" }}>
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Image not Found" />
                <div className="card-body">
                    <Link to={`/book/${this.props.book_id}`} >{this.props.book_name}</Link><br />
                    <Link to={`/author/${this.props.author_id}`} >By {this.props.author_name}</Link>
                </div>
            </div>
        );


    }
}
import React, { Component } from 'react';

export default class BookCard extends Component {


    render() {
        return (
            <div className="card book-card-container" style={{ width: "18rem" }}>
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Image not Found" />
                <div className="card-body">
                    <a href="#" >{this.props.book_name}</a><br />
                    <a href="#" >By {this.props.author_name}</a>
                </div>
            </div>
        );


    }
}
import React, { Component } from 'react';
import BookCard from './BookCard';

export default class CategoryBooks extends Component {

    render() {
        return (
            <div className="cards_container">
                {
                this.props.books.map((book) => {
                    return (
                        <BookCard book_name={book.name} author_name={book.author} />
                    );
                })
            }

            </div>
    );

    }
}
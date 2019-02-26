import React, { Component } from 'react';
import BookCard from './BookCard';

export default class CategoryBooks extends Component {

    render() {
        return (
            <div>
                {
                this.props.books.map((book) => {
                    return (
                        <BookCard book_name={book.name} author_name={book.author} author_id={book.author_id} book_id={book.book_id} />
                    );
                })
            }

            </div>
    );

    }
}
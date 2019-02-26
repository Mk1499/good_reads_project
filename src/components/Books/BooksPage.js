import React, { Component } from 'react';
import CategoryBooks from '../CategoryBooks/CategoryBooks';
import Navbar from '../Shared/navbar';
import Pagination from '../Pagination/Pagination';

export default class BooksPage extends Component {

    constructor(props) {
        super(props);
        this.state = { currentBooks: [], books: [] };
    }

    componentWillMount() {

        let url = "https://gomaanodejsapp.herokuapp.com/book/all";

        fetch(url)
            .then(response => response.json())
            .then(result => {

                let books = [];
                for (let book of result.allBooks) {
                    books.push({ author_id: book.auth_id._id, book_id: book._id, author: book.auth_id.first_name + " " + book.auth_id.last_name, name: book.name });
                }

                console.log(books);
                this.setState({ books });
                const currentBooks = this.state.books.slice(0, 2);
                this.setState({ currentBooks });


            });
    }

    onPageChanged = data => {
        const { books } = this.state;
        const { currentPage, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentBooks = books.slice(offset, offset + pageLimit);
        this.setState({ currentBooks });
    }

    render() {


        const { books } = this.state;
        const totalBooks = books.length;

        return (
            <div>
                <Navbar />
                {
                    (totalBooks > 0) ?

                        <div>
                            <CategoryBooks books={this.state.currentBooks} />
                            <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between text-center">

                                <div className="d-flex flex-row py-4 align-items-center">
                                    <Pagination totalRecords={totalBooks} pageLimit={2} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                                </div>
                            </div>
                        </div>

                        :

                        <div className="cards_container">
                            <h1>There's no Books</h1>
                        </div>
                }
            </div>
        );
    }

}

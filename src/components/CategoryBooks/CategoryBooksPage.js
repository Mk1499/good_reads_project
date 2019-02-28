import React, { Component } from 'react';
import CategoryBooks from './CategoryBooks';
import Navbar from '../Shared/navbar';
import Pagination from '../Pagination/Pagination';

export default class CategoryBooksPage extends Component {

    constructor(props) {
        super(props);
        this.state = { currentBooks: [], categoryBooks: [], category_name: '' };
    }

    componentWillMount() {

        let url = `https://gomaanodejsapp.herokuapp.com/book/bycategory/${this.props.id}`;

        fetch(url)
            .then(response => response.json())
            .then(result => {

                let categoryBooks = [];
                for (let book of result.books_category) {
                    categoryBooks.push({ book_img: book.book_img, author_id: book.auth_id._id, book_id: book._id, author: book.auth_id.first_name + " " + book.auth_id.last_name, name: book.name });
                }

                let category_name = result.books_category[0].category_id.name;
                this.setState({ categoryBooks, category_name });
                const currentBooks = this.state.categoryBooks.slice(0, 2);
                this.setState({ currentBooks });


            });
    }

    onPageChanged = data => {
        const { categoryBooks } = this.state;
        const { currentPage, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentBooks = categoryBooks.slice(offset, offset + pageLimit);
        this.setState({ currentBooks });
    }

    render() {


        const { categoryBooks } = this.state;
        const totalBooks = categoryBooks.length;

        return (
            <div>
                <Navbar />
                {
                    (totalBooks > 0) ?

                        <div>
                            <h1 style={{marginTop:"6%",marginLeft:"20px"}}>{this.state.category_name}</h1>
                            <CategoryBooks books={this.state.currentBooks} />
                            <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">

                                <div className="d-flex flex-row py-4 align-items-center">
                                    <Pagination totalRecords={totalBooks} pageLimit={2} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                                </div>
                            </div>
                        </div>

                        :

                        <div style={{marginTop:"6%"}}>
                            <h1>There's no Books under that Category</h1>
                        </div>
                }
            </div>
        );
    }

}

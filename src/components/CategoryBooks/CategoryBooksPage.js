import React, { Component } from 'react';
import CategoryBooks from './CategoryBooks';
import Navbar from '../Shared/navbar';
import Pagination from '../Pagination/Pagination';

export default class CategoryBooksPage extends Component {

    state = { currentBooks: [], categoryBooks: [] };

    categoryBooks = [{ name: 'book1', author: 'Hesham' },
    { name: 'book2', author: 'Gomaa' },
    { name: 'book3', author: 'Mostafa' },
    { name: 'book4', author: 'Khaled' },
    { name: 'book5', author: 'Helmy' }];

    componentWillMount() {
        this.setState({ categoryBooks: this.categoryBooks });
        const currentBooks = this.categoryBooks.slice(0, 3);
        this.setState({ currentBooks });
    }
  
    onPageChanged = data => {
        const { categoryBooks } = this.state;
        const { currentPage, pageLimit } = data;
    
        const offset = (currentPage - 1) * pageLimit;
        const currentBooks = categoryBooks.slice(offset, offset + pageLimit);
        this.setState({currentBooks});
      }

    render() {


        const { categoryBooks } = this.state;
        const totalBooks = categoryBooks.length;

        return (
            <div style={{textAlign: "center"}}>
                <Navbar />
                <CategoryBooks books={this.state.currentBooks} />
                <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">

                    <div className="d-flex flex-row py-4 align-items-center">
                        <Pagination totalRecords={totalBooks} pageLimit={3} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                    </div>
                </div>
            </div>
        );
    }

}

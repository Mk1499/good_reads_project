import React, { Component } from 'react';
import TabList from './TabList';
import DataTable from '../AdminDataTable/DataTable';
import AddButton from '../AddButton/AddButton';
import Pagination from '../Pagination/Pagination';
import { resolve } from 'path';

export default class TabContent extends Component {

    constructor(props) {
        super(props);

        this.state = { currentBookRows: [], currentCategoryRows: [], currentAuthorRows: [], bookRows: [], authorRows: [], categoryRows: [] };

    }


    componentWillMount() {
        console.log("inside will mount");
        fetch('https://gomaanodejsapp.herokuapp.com/category/all')
            .then(response => response.json())
            .then(result => {

                let i = 1;
                let categoryRows = [];
                for (let cat of result.allCategories) {
                    categoryRows.push([i++, cat.name]);
                }

                console.log(categoryRows);
                this.setState({ categoryRows });
                const currentCategoryRows = this.state.categoryRows.slice(0, 2);
                this.setState({ currentCategoryRows });


            });

        fetch('https://gomaanodejsapp.herokuapp.com/author/all')
            .then(response => response.json())
            .then(result => {

                let i = 1;
                let authorRows = [];
                for (let author of result.allAuthors) {
                    authorRows.push([i++, "", author.first_name, author.last_name, author.date_of_birth]);
                }

                console.log(authorRows);
                this.setState({ authorRows });
                const currentAuthorRows = this.state.authorRows.slice(0, 2);
                this.setState({ currentAuthorRows });

            });

        fetch('https://gomaanodejsapp.herokuapp.com/book/all')
            .then(response => response.json())
            .then(result => {

                let i = 1;
                let bookRows = [];
                for (let book of result.allBooks) {
                    bookRows.push([i++, "", book.name, book.category_id, book.auth_id]);
                }

                console.log(bookRows);
                this.setState({ bookRows });
                const currentBookRows = this.state.bookRows.slice(0, 2);
                this.setState({ currentBookRows });

            });

    }

    handleAddBookClicked = function () {
        document.getElementById("addBookModal").style.display = "block";
        document.getElementById("addBookModal").style.opacity = "1";
    }

    handleAddCategoryClicked = function () {
        document.getElementById("addCategoryModal").style.display = "block";
        document.getElementById("addCategoryModal").style.opacity = "1";
    }

    handleAddAuthorClicked = function () {
        document.getElementById("addAuthorModal").style.display = "block";
        document.getElementById("addAuthorModal").style.opacity = "1";
    }

    onBooksPageChanged = data => {
        const { bookRows } = this.state;
        const { currentPage, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentBookRows = bookRows.slice(offset, offset + pageLimit);
        this.setState({ currentBookRows });

    }

    onCategoriesPageChanged = data => {
        const { categoryRows } = this.state;
        const { currentPage, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentCategoryRows = categoryRows.slice(offset, offset + pageLimit);
        this.setState({ currentCategoryRows });

    }

    onAuthorsPageChanged = data => {
        const { authorRows } = this.state;
        const { currentPage, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentAuthorRows = authorRows.slice(offset, offset + pageLimit);
        this.setState({ currentAuthorRows });

    }

    render() {

        const book_headings = [
            'Id',
            'Photo',
            'Name',
            'CategoryId',
            'AuthorId'
        ];

        const category_headings = [
            'Id',
            'Name',
        ];

        const author_headings = [
            'Id',
            'Photo',
            'First Name',
            'Last Name',
            'Date of Birth'
        ];

        const { bookRows, authorRows, categoryRows } = this.state;
        const totalBookRows = bookRows.length;
        const totalCategoryRows = categoryRows.length;
        const totalAuthorRows = authorRows.length;
        return (
            <div className="up">

                <TabList>

                    <div label="Books" className="tab-content">
                        <AddButton onClick={this.handleAddBookClicked} />
                        <DataTable headings={book_headings} rows={this.state.currentBookRows} />
                        <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">

                            <div className="d-flex flex-row py-4 align-items-center">
                                <Pagination totalRecords={totalBookRows} pageLimit={2} pageNeighbours={1} onPageChanged={this.onBooksPageChanged} />
                            </div>
                        </div>
                    </div>
                    <div label="Categories" className="tab-content">
                        <AddButton onClick={this.handleAddCategoryClicked} />
                        <DataTable headings={category_headings} rows={this.state.currentCategoryRows} />
                        <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">

                            <div className="d-flex flex-row py-4 align-items-center">
                                <Pagination totalRecords={totalCategoryRows} pageLimit={2} pageNeighbours={1} onPageChanged={this.onCategoriesPageChanged} />
                            </div>
                        </div>
                    </div>
                    <div label="Authors" className="tab-content">
                        <AddButton onClick={this.handleAddAuthorClicked} />
                        <DataTable headings={author_headings} rows={this.state.currentAuthorRows} />
                        <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">

                            <div className="d-flex flex-row py-4 align-items-center">
                                <Pagination totalRecords={totalAuthorRows} pageLimit={2} pageNeighbours={1} onPageChanged={this.onAuthorsPageChanged} />
                            </div>
                        </div>
                    </div>
                </TabList>
            </div>
        );
    }
}
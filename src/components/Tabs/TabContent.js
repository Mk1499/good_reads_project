import React, { Component } from 'react';
import TabList from './TabList';
import DataTable from '../AdminDataTable/DataTable';
import AddButton from '../AddButton/AddButton';
import Pagination from '../Pagination/Pagination';
import '../../App.css';

export default class TabContent extends Component {

    state = {currentBookRows: [], currentCategoryRows: [], bookRows: [], authorRows: [], categoryRows: []};
  
    book_rows = [
        [
            1,
            '',
            'Harry Potter 1',
            12,
            134
        ],
        [
            2,
            '',
            'Harry Potter 2',
            12,
            135
        ],
        [
            3,
            '',
            'Harry Potter 3',
            12,
            136
        ],
        [
            4,
            '',
            'Harry Potter 4',
            12,
            133
        ]
    ];

     category_rows = [
        [
            1,
            'Science Fiction',
        ],
        [
            2,
            'Horror',
        ],
        [
            3,
            'Romance',
        ],

    ];
    
    componentWillMount() {
        this.setState({ bookRows: this.book_rows, categoryRows: this.category_rows });
        const currentBookRows = this.book_rows.slice(0, 2);
        const currentCategoryRows = this.category_rows.slice(0, 2);
        this.setState({currentBookRows, currentCategoryRows});
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
        this.setState({currentBookRows});
        this.render();
      }

      onCategoriesPageChanged = data => {
        const { categoryRows } = this.state;
        const { currentPage, pageLimit } = data;
    
        const offset = (currentPage - 1) * pageLimit;
        const currentCategoryRows = categoryRows.slice(offset, offset + pageLimit);
        this.setState({currentCategoryRows});
        this.render();
      }

      onAuthorsPageChanged = data => {
        const { AuthorRows } = this.state;
        const { currentPage, pageLimit } = data;
    
        const offset = (currentPage - 1) * pageLimit;
        const currentRows = AuthorRows.slice(offset, offset + pageLimit);
        this.setState({currentRows});
        this.render();
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

        const category_rows = [
            [
                1,
                'Science Fiction',
            ],
            [
                2,
                'Horror',
            ],
            [
                3,
                'Romance',
            ],

        ];

        
        const { bookRows, authorRows, categoryRows } = this.state;
        const totalBookRows = bookRows.length;
        const totalCategoryRows = categoryRows.length;
        const totalAuthorRows = authorRows.length;
        return (
            <div className="container up">

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
                        <DataTable headings={book_headings} rows={this.state.currentRows} />
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
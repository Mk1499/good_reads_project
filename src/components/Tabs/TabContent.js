import React, { Component } from 'react';
import TabList from './TabList';
import DataTable from '../AdminDataTable/DataTable';
import AddButton from '../AddButton/AddButton';
import '../../App.css';

export default class TabContent extends Component {

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

        const book_rows = [
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


        return (
            <div className="container up">

                <TabList>

                    <div label="Books" className="tab-content">
                        <AddButton onClick={this.handleAddBookClicked} />
                        <DataTable headings={book_headings} rows={book_rows} />
                    </div>
                    <div label="Categories" className="tab-content">
                        <AddButton onClick={this.handleAddCategoryClicked} />
                        <DataTable headings={category_headings} rows={category_rows} />
                    </div>
                    <div label="Authors" className="tab-content">
                        <AddButton onClick={this.handleAddAuthorClicked} />
                        <DataTable headings={book_headings} rows={book_rows} />
                    </div>
                </TabList>
            </div>
        );
    }
}
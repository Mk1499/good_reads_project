import React, { Component } from 'react';
import DataTable from '../AdminDataTable/DataTable';
import AddButton from '../AddButton/AddButton';
import Pagination from '../Pagination/Pagination';
import AuthorsModal from '../Modals/AuthorsModal';

export default class AuthorsTab extends Component {

    constructor(props) {
        super(props);

        this.state = { currentAuthorRows: [], authorRows: [] };

    }

    componentDidMount() {

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

    }

    handleAddAuthorClicked = function () {
        document.getElementById("addAuthorModal").style.display = "block";
        document.getElementById("addAuthorModal").style.opacity = "1";
    }

    onAuthorsPageChanged = data => {
        const { authorRows } = this.state;
        const { currentPage, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentAuthorRows = authorRows.slice(offset, offset + pageLimit);
        this.setState({ currentAuthorRows });

    }

    render() {
        const author_headings = [
            'Id',
            'Photo',
            'First Name',
            'Last Name',
            'Date of Birth'
        ];

        const { authorRows } = this.state;
        const totalAuthorRows = authorRows.length;

        return (
            <div className="tab-content">
                <AddButton onClick={this.handleAddAuthorClicked} />
                <DataTable headings={author_headings} rows={this.state.currentAuthorRows} />
                <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">

                    <div className="d-flex flex-row py-4 align-items-center">
                        <Pagination totalRecords={totalAuthorRows} pageLimit={2} pageNeighbours={1} onPageChanged={this.onAuthorsPageChanged} />
                    </div>
                </div>
                <AuthorsModal />
            </div>
        );

    }

}
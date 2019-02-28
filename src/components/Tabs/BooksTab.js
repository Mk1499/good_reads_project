import React, { Component } from 'react';
import DataTable from '../AdminDataTable/DataTable';
import AddButton from '../AddButton/AddButton';
import Pagination from '../Pagination/Pagination';
import BooksModal from '../Modals/BooksModal';

export default class BooksTab extends Component {

    constructor(props) {
        super(props);

        this.state = { currentBookRows: [], bookRows: [] };

    }

// display image from base64
  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    console.log(binary)
    return binary;
  };

    componentDidMount = () =>{
        
        fetch('https://gomaanodejsapp.herokuapp.com/book/all')
            .then(response => response.json())
            .then(result => {

                let i = 1;
                let bookRows = [];
                let image = "";
                for (let book of result.allBooks) {
                    image = this.arrayBufferToBase64(book.book_img.data.data);
                    bookRows.push([i++, <img src={image} width="200" height="200"/>, book.name, book.auth_id._id, book.auth_id._id]);
                }

                //console.log(bookRows);
                this.setState({ bookRows });
                const currentBookRows = this.state.bookRows.slice(0, 2);
                this.setState({ currentBookRows });

            });

    }

    handleAddBookClicked = function () {
        document.getElementById("addBookModal").style.display = "block";
        document.getElementById("addBookModal").style.opacity = "1";
    }

    onBooksPageChanged = data => {
        const { bookRows } = this.state;
        const { currentPage, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentBookRows = bookRows.slice(offset, offset + pageLimit);
        this.setState({ currentBookRows });

    }

    render() {
        const book_headings = [
            'Id',
            'Photo',
            'Name',
            'CategoryId',
            'AuthorId'
        ];

        const { bookRows } = this.state;
        const totalBookRows = bookRows.length;

        return (
            <div className="tab-content">
                <AddButton onClick={this.handleAddBookClicked} />
                <DataTable headings={book_headings} rows={this.state.currentBookRows} />
                <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">

                    <div className="d-flex flex-row py-4 align-items-center">
                        <Pagination totalRecords={totalBookRows} pageLimit={2} pageNeighbours={1} onPageChanged={this.onBooksPageChanged} />
                    </div>
                </div>
                <BooksModal />
            </div>
        );
    }
}
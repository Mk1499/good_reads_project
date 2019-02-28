    import React, { Component } from 'react';
import DropDownList from '../DropDownList/DropDownList';
import { navigate } from '@reach/router';

export default class BooksModal extends Component {


    constructor(props) {
        super(props);

        this.state = {
            authorsOptions: [],
            categoriesOptions: []
        };
    }
    

    componentDidMount() {
        
        fetch('https://gomaanodejsapp.herokuapp.com/category/all')
            .then(response => response.json())
            .then(result => this.setState({ categoriesOptions: result.allCategories }));

        fetch('https://gomaanodejsapp.herokuapp.com/author/all')
            .then(response => response.json())
            .then(result => this.setState({ authorsOptions: result.allAuthors }));
    }


    handleCloseModal = function () {

        document.getElementById("addBookModal").style.display = "none";
        document.getElementById("addBookModal").style.opacity = "0";
    }

    onSubmit = function (e) {

        e.preventDefault();
        let data = new FormData(e.target);

        var result = {};


        for (let entry of data.entries()) {
            result[entry[0]] = entry[1];
        }
        console.log(result);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.file.files[0]);
        
        reader.onload = function(e) {
            // The file's text will be printed here
            console.log(e.target.result)
            result.file = e.target.result;
          


        fetch('https://gomaanodejsapp.herokuapp.com/book/add', {
            method: 'POST',
            headers: {
                 "Content-Type": "application/json",
            //     "Access-Control-Allow-Origin": "*",
            //     //"Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(result)

        }).then(() => {
            document.getElementById("addBookModal").style.display = "none";
            document.getElementById("addBookModal").style.opacity = "0";
            navigate('/admin');
        });

    };

    }

    render() {

        const authorsOptions = this.state.authorsOptions.map(function (author) {

            return { label: author.first_name + " " + author.first_name, value: author._id };
        });

        const categoriesOptions = this.state.categoriesOptions.map(function (category) {

            return { label: category.name, value: category._id };

        });

        return (

            <div className="modal fade" id="addBookModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Add Book</h5>
                            <button onClick={this.handleCloseModal} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={this.onSubmit} encType="multipart/form-data">
                            <div className="modal-body">
                                <table>
                                    <tbody>
                                        <tr><td><label>Book_Name</label></td><td><input type="textfield" name="bName" /></td></tr>
                                        <tr><td><label>Category</label></td><td><DropDownList options={categoriesOptions} name="catID" /></td></tr>
                                        <tr><td><label>Author</label></td><td><DropDownList options={authorsOptions} name="authID" /></td></tr>
                                        <tr><td><label>Image</label></td><td><input type="file" name="file" /></td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" >Add Book</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }

}
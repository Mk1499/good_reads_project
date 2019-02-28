import React, { Component } from 'react';
import { navigate } from '@reach/router';

export default class AuthorsModal extends Component {

    onSubmit = function (e) {

        e.preventDefault();
        let data = new FormData(e.target);

        var result = {};

        for (let entry of data.entries()) {
            result[entry[0]] = entry[1];
        }

        var reader = new FileReader();
        reader.readAsDataURL(e.target.file.files[0]);

        reader.onload = function (e) {

            result.file = e.target.result;


            fetch('https://gomaanodejsapp.herokuapp.com/author/add', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    //"Content-Type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify(result)
            }).then(function () {
                document.getElementById("addAuthorModal").style.display = "none";
                document.getElementById("addAuthorModal").style.opacity = "0";
                window.location.href = '/admin';
            });

        }
    }


    handleCloseModal = function () {

        document.getElementById("addAuthorModal").style.display = "none";
        document.getElementById("addAuthorModal").style.opacity = "0";
    }
    render() {
        return (

            <div className="modal fade" id="addAuthorModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Add Author</h5>
                            <button onClick={this.handleCloseModal} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={this.onSubmit} encType="multipart/form-data">
                            <div className="modal-body">
                                <table>
                                    <tbody>
                                        <tr><td><label>First_Name</label></td><td><input type="textfield" name="fName" /></td></tr>
                                        <tr><td><label>Last_Name</label></td><td><input type="textfield" name="lName" /></td></tr>
                                        <tr><td><label>Date_Of_Birth</label></td><td><input type="date" name="dob" /></td></tr>
                                        <tr><td><label>Image</label></td><td><input type="file" name="file" /></td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Add Author</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }

}
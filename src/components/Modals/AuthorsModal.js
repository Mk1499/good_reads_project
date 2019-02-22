import React, { Component } from 'react';

export default class AuthorModal extends Component {

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
                        <form action="" method="get">
                            <div className="modal-body">
                            <table>                          
                                <tr><td><label>First Name </label></td> <td><input type="textfield" name="first_name" /></td></tr>
                                <tr><td><label>Last Name </label></td> <td><input type="textfield" name="last_name" /></td></tr>
                                <tr><td><label>Date of Birth </label></td> <td><input type="date" name="date_of_birth" /></td></tr>
                                <tr><td><label>Image </label></td> <td><input type="textfield" name="image" /></td></tr>
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
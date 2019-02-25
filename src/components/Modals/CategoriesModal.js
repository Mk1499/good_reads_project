import React, { Component } from 'react';

export default class CategoriesModal extends Component {

    onSubmit = function (e) {

        e.preventDefault();
        let data = new FormData(e.target);

        var result = {};

        for (let entry of data.entries()) {
            result[entry[0]] = entry[1];
        }

        console.log(result);


        fetch('https://gomaanodejsapp.herokuapp.com/category/add', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                //"Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(result)
        }).then(function () {
            document.getElementById("addCategoryModal").style.display = "none";
            document.getElementById("addCategoryModal").style.opacity = "0";
            this.props.history.push('/admin');
        });


    }

    handleCloseModal = function () {

        document.getElementById("addCategoryModal").style.display = "none";
        document.getElementById("addCategoryModal").style.opacity = "0";
    }
    render() {
        return (

            <div className="modal fade" id="addCategoryModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Add Category</h5>
                            <button onClick={this.handleCloseModal} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={this.onSubmit} >
                            <div className="modal-body">
                                <label>Category Name</label> <input type="textfield" name="cName"></input>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Add Category</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }

}
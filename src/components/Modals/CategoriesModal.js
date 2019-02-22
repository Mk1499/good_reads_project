import React, { Component } from 'react';

export default class CategoriesModal extends Component {

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
                        <form action="" method="get">
                            <div className="modal-body">
                                <label>Category Name </label> <input type="textfield"></input>
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
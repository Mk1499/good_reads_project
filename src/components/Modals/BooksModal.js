import React, { Component } from 'react';
import DropDownList from '../DropDownList/DropDownList';

export default class BooksModal extends Component {

    handleCloseModal = function () {

        document.getElementById("addBookModal").style.display = "none";
        document.getElementById("addBookModal").style.opacity = "0";
    }


    render() {
        
        const authorsOptions = [

            { label: 'Hesham', value: 'hesham' },
            { label: 'Khaled', value: 'khaled' },
            { label: 'Gomaa', value: 'gomaa' },
            { label: 'Mostafa', value: 'mostafa' },
            { label: 'Helmy', value: 'helmy' },
      
          ];

          const categoriesOptions = [

            { label: 'Science Fiction', value: 'science fiction' },
            { label: 'Horror', value: 'horror' },
            { label: 'Romance', value: 'romance' },
                 
          ];
          
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
                        <form action="" method="get">
                            <div className="modal-body">
                            <table>                          
                                <tr><td><label>Book Name </label></td> <td><input type="textfield" name="book_name" /></td></tr>
                                <tr><td><label>Category </label></td> <td><DropDownList options={categoriesOptions} /></td></tr>
                                <tr><td><label>Author </label></td> <td><DropDownList options={authorsOptions} /></td></tr>
                                <tr><td><label>Image </label></td> <td><input type="textfield" name="image" /></td></tr>
                            </table>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Add Book</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }

}
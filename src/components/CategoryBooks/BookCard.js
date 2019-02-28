import React, { Component } from 'react';
import {Link} from '@reach/router';

export default class BookCard extends Component {

    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return binary;
    };


    render() {
        
        const image = this.arrayBufferToBase64(this.props.book_img.data.data);

        return (
            <div className="card book-card-container" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="Image not Found" />
                <div className="card-body">
                    <Link to={`/book/${this.props.book_id}`} >{this.props.book_name}</Link><br />
                    <Link to={`/author/${this.props.author_id}`} >By {this.props.author_name}</Link>
                </div>
            </div>
        );


    }
}
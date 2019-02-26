import React, { Component } from 'react';
import UserBookData from './userBooksData';

class UserTable extends Component {

  constructor(props) {
    super();
    this.state = {
      books: [
        { bookId: 1, cover: "Book Cover ", name: "inferno", author: "Dan Brawn", avgRating: 4, rating: 4, shelve: "read" }
        , { bookId: 2, cover: "Book Cover ", name: "Davinci Code", author: "Dan Brawn", avgRating: 2, rating: 2, shelve: "read" },
        {
          bookId: 3, cover: "Book Cover ", name: "If i stay", author: "Dan Brawn", avgRating: 3, rating: 5,
          shelve: "currently-reading"
        }
        , {
          bookId: 4, cover: "Book Cover ", name: "The Origin", author: "Dan Brawn", avgRating: 5, rating: 1,
          shelve: "want-to-read"
        }
      ]
    }
  }

  changeRating = (bookId, rate) => {
    this.setState({
      books: this.state.books.map((item) => {
        return item.bookId === bookId ? { ...item, rating: rate } : item;
      })
    })
    // alert("BookId  "+bookId+" new Rate : "+rate)
  }

  changeShelve = (bookId, state) => {
    this.setState({
      books: this.state.books.map((item) => {
        return item.bookId === bookId ? { ...item, shelve: state } : item;
      })
    })

  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Cover</th>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Avg Rating</th>
            <th scope="col">Rating</th>
            <th scope="col">Shelve</th>
          </tr>
        </thead>
        <tbody>
          {this.state.books.map((book) => {
            if (this.props.currentState === "All")
              return <UserBookData key={book.bookId} book={book} changeRate={this.changeRating} changeShelve={this.changeShelve} />

            if (this.props.currentState === "Read" && book.shelve === "read")
              return <UserBookData key={book.bookId} book={book} changeRate={this.changeRating} changeShelve={this.changeShelve} />

            if (this.props.currentState === "Currently Reading" && book.shelve === "currently-reading")
              return <UserBookData key={book.bookId} book={book} changeRate={this.changeRating} changeShelve={this.changeShelve} />
            if (this.props.currentState === "Want to Read" && book.shelve === "want-to-read")
              return <UserBookData key={book.bookId} book={book} changeRate={this.changeRating} changeShelve={this.changeShelve} />
            return;
          })}
        </tbody>
      </table>
    );
  }
}

export default UserTable; 
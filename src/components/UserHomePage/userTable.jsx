import React, { Component } from 'react';
import UserBookData from './userBooksData';

class UserTable extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      books: []
    }
  }


  componentDidMount(){
   
    fetch(`https://gomaanodejsapp.herokuapp.com/user/${localStorage.getItem("userId")}`)
    .then(response => response.json())
    .then(result => this.setState({ books: result.userbooks }));
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
    
    fetch(`http://gomaanodejsapp.herokuapp.com/state/${state}/${bookId}/${localStorage.getItem("userId")}` , {
      method : "GET" 
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
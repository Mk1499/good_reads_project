import React, { Component } from 'react';
import { Media, Jumbotron, Container } from 'reactstrap';
import { Comment, Header } from 'semantic-ui-react'
import RatingStars from '../RatingStars/RatingStarts';
import AvgRating from '../RatingStars/avgRating';
import DropDown from '../Shared/DropDown';
import Navbar from '../Shared/navbar';
import {Link} from '@reach/router' ;
import BookReview from './BookReview' ; 
import AddReview from './bookAddReview';

class BookID extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {
        name: "",
        author: "",
        catName: "",
        avgRating: "",
        rating: "",
        shelve: "read",
        description: "This is a modified jumbotron that occupies the entire horizontal space of its parent  This is a modified jumbotron that occupies the entire horizontal space of its parent",
        rateNumber: "" , 
        category_id : "" ,
        auth_id : ""
      } , 
      book_reviews : []

    }
  }


  componentDidMount() {
    let book = {};
    fetch(`https://gomaanodejsapp.herokuapp.com/book/${this.props.id}`)
      .then(response => response.json())
      .then(result => {
        book.name = result.bookData.name;
        book.author = result.bookData.auth_id.first_name + " "  + result.bookData.auth_id.last_name;
        book.catName = result.bookData.category_id.name;
        book.avgRating = result.bookData.avg_rate;
        book.description = "";
        book.rateNumber = result.bookData.no_of_rates;
        book.category_id = result.bookData.category_id._id  ; 
        book.auth_id = result.bookData.auth_id._id ;
        this.setState({ book });
      });


      // Fetch Book Comments 

      fetch(`https://gomaanodejsapp.herokuapp.com/review/bybook/${this.props.id}`)
      .then(response => response.json())
      .then(result => {
               this.setState({book_reviews : result.bookReviews})
      })
  }


  changeRating = (bookId, state) => {
    this.setState({
      book: { ...this.state.book, shelve: state }
    })
  }

  changeShelve = (bookId, state) => {
    this.setState({
      book: { ...this.state.book, shelve: state }
    });

    fetch(`http://gomaanodejsapp.herokuapp.com/state/${state}/${bookId}/${localStorage.getItem("userId")}` , {
      method : "GET" 
   })

  }

  render() {

    return (
      <div>
        <Navbar />

        <Jumbotron style={{ width: '90%', margin: '5%' }} >
          <div className="container">
            <div className="row">
              <div className="col-md-3 ">

                <div className="Card" style={{ overflow: 'hidden' }}>
                  <Media width="100%" src="https://images.gr-assets.com/books/1320562005l/4214.jpg" alt="Card image" />
                  <div>
                    <DropDown bookId={this.props.id} shelveChanged={this.changeShelve} shelveState={this.state.book.shelve} />
                    <span className="Book_Card_Rate">Rate This Book :
                <RatingStars bookId={this.state.bookId} clickable={true} rate={this.state.rating} changeRate={this.changeRating} />
                      `  </span>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="book-description">
                  <Container fluid>
                    <h1 className="display-3">{this.state.book.name}</h1>
                    <h1 className="display-8" style={{ color: '#445565' }}> Author : <Link to ={`/author/${this.state.book.auth_id}`}>
                    {this.state.book.author}
                    </Link></h1>
                    <h1 className="display-9" style={{ color: '#445565' }}> Category : 
                    <Link to ={`/categories/${this.state.book.category_id}`}>
                    {this.state.book.catName}
                    </Link>
                    </h1>
                    <p style={{ color: '#445565' }}>   {this.state.book.rateNumber} Rates
          <AvgRating avg={this.state.book.avgRating} clickable={false} bookId={this.state.bookId} /> </p>
                  </Container>
                  <Container fluid style={{ borderStyle: 'groove', borderRadius: '20px', height: '60%' }}>
                    <h3 className="display-8" style={{ color: '#445565' }}> Description </h3>
                    <p className="lead"> {this.state.book.description}</p>
                  </Container>
                </div>

              </div>

            </div>

          </div>


        </Jumbotron>

        <br></br>
        <br></br>
        <br></br>

        <div className = "container">
        {
            this.state.book_reviews.map((review) => {
              return (
                  
                <BookReview bookId = {this.props.id} review={review}/>        
                  
              );
          })
        }
          
        </div>


      </div>
    );
  }

}


export default BookID; 
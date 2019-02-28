import React ,{Component} from 'react' ; 
import RatingStars from '../RatingStars/RatingStarts' ; 
import AvgRating from '../RatingStars/avgRating' ; 
import { Link } from '@reach/router';

function AuthorBooks(props) {


        
      return (
          props.books.map((book) => {
              return (

            
          <div className = "container card" style={{padding:"20px"}}>
            <div className = "row">
                <div className = "col-sm-8">
                    <div className="row">
                        <div className="col-sm-3">
                         <img src="https://images-eu.ssl-images-amazon.com/images/I/51VqQqmoHtL.jpg" width="100%"/>
                        </div>
                        <div className="col-sm-9">
                        <h4><Link to = {`/book/${book._id}`}>{book.name}</Link></h4>
                        <AvgRating avg={book.avgRating} clickable={false} bookId = {book.bookId} />
                        <br /> 
                        <p><strong><span style={{margin:"10px"}}>
                        Category :</span></strong>
                        <Link to = {`/categories/${book.category_id._id}`}> {book.category_id.name}</Link>
                        </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                
                </div>
          
            </div>
          </div>
            );
        })
      );
    }

export default AuthorBooks ;
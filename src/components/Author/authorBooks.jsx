import React ,{Component} from 'react' ; 
import RatingStars from '../RatingStars/RatingStarts' ; 
import AvgRating from '../RatingStars/avgRating' ; 

function AuthorBooks(props) {


        
      return (
          <div className = "container card" style={{padding:"20px"}}>
            <div className = "row">
                <div className = "col-sm-8">
                    <div className="row">
                        <div className="col-sm-3">
                         <img src="https://images-eu.ssl-images-amazon.com/images/I/51VqQqmoHtL.jpg" width="100%"/>
                        </div>
                        <div className="col-sm-9">
                        <h4>Book Name</h4>
                        <AvgRating avg={props.book.avgRating} clickable={false} bookId = {props.book.bookId} />
                        <strong><span style={{margin:"10px"}}>{props.book.avgRating}</span></strong>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                
                </div>
          
            </div>
          </div>
      );
    }

export default AuthorBooks ;
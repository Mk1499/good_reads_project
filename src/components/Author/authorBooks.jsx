import React ,{Component} from 'react' ; 
import RatingStars from '../RatingStars/RatingStarts' ; 
import AvgRating from '../RatingStars/avgRating' ; 
import { Link } from '@reach/router';


function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return binary;
};

function AuthorBooks(props) {

let userId = localStorage.getItem("userId") ;
let img =  arrayBufferToBase64(props.book.book_img.data.data) ; 
        
      return (
      

            
          <div className = "container card" style={{padding:"20px"}}>
            <div className = "row">
                <div className = "col-sm-8">
                    <div className="row">
                        <div className="col-sm-3">
                         <img src={img} width="100%"/>
                        </div>
                        <div className="col-sm-9">
                        <h4><Link to = {`/book/${props.book._id}/${userId}`}>{props.book.name}</Link></h4>
                        <AvgRating avg={props.book.avg_rate} clickable={false} bookId = {props.book.bookId} />
                        <br /> 
                        <p><strong><span style={{margin:"10px"}}>
                        Category :</span></strong>
                        <Link to = {`/categories/${props.book.category_id._id}`}> {props.book.category_id.name}</Link>
                        </p>
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
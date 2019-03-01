import React from "react";
import RatingStars from '../RatingStars/RatingStarts';
import AvgRating from '../RatingStars/avgRating';
import DropDown from '../Shared/DropDown';
import { Link } from '@reach/router';

// display image from base64
function arrayBufferToBase64 (buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return binary;
};




export default function UserBookData(props) {


  let  image = arrayBufferToBase64(props.book.book_img.data.data) ; 
  let userId = localStorage.getItem("userId") ; 
  return (
    <tr>
      <th scope="row"><Link to = {`/book/${props.book.bookId}/${userId}`} ><img src ={image} width="100" height="100"/></Link></th>
      <td><Link to = {`/book/${props.book.bookId}/${userId}`} >{props.book.name}</Link></td>
      <td><Link to = {`/author/${props.book.authorId}`} >{props.book.author}</Link></td>
      <td><AvgRating avg={props.book.avgRating} clickable={false} bookId={props.book.bookId} /></td>

      <td><RatingStars bookId={props.book.bookId} clickable={true} rate={props.book.rating} changeRate={props.changeRate} userId ={props.userId}/></td>

      <td><DropDown bookId={props.book.bookId} shelveChanged={props.changeShelve} shelveState={props.book.shelve} /></td>
    </tr>
  );
}

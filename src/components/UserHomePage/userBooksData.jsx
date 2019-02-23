import React from "react" ; 
import RatingStars from '../RatingStars/RatingStarts' ; 
import AvgRating from '../RatingStars/avgRating' ; 
import DropDown from '../Shared/DropDown' ; 

export default function UserBookData(props){
   {
    return(
        <tr>
        <th scope="row">{props.book.cover}</th>
        <td>{props.book.name}</td>
        <td>{props.book.author}</td>
        <td><AvgRating avg={props.book.avgRating} clickable={false} bookId = {props.book.bookId} /></td>

        <td><RatingStars bookId = {props.book.bookId} clickable={true} rate={props.book.rating} changeRate = {props.changeRate}/></td>
      
        <td><DropDown bookId = {props.book.bookId} shelveChanged= {props.changeShelve} shelveState={props.book.shelve}/></td>
      </tr>
    ); }
}
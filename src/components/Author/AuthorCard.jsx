import React, { Component } from 'react';
import {Link} from '@reach/router';


class AuthorCard extends Component {

    constructor(props){
        super(props) ; 
        this.state = {
            id : "" ,
            name :"" , 
            description :"" , 
            date_of_birth : "",
            author_img: ""
        }
    }

    componentDidMount(){
        this.setState({
            id : this.props.authorInfo._id,
            name : this.props.authorInfo.first_name +" "+this.props.authorInfo.last_name , 
            description : this.props.authorInfo.brief_description , 
            date_of_birth : this.props.authorInfo.date_of_birth,
            author_img : this.props.authorInfo.author_img.data.data
        })
        
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            id : nextProps.authorInfo._id,
            name : nextProps.authorInfo.first_name +" "+nextProps.authorInfo.last_name , 
            description : nextProps.authorInfo.brief_description , 
            date_of_birth : nextProps.authorInfo.date_of_birth,
            author_img : nextProps.authorInfo.author_img.data.data
        })
    }

    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return binary;
    };

    render (){
        
        const image = this.arrayBufferToBase64(this.props.authorInfo.author_img.data.data);

        return (

            <div class="card well-sm">
            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <img src={image} alt="" class="img-rounded img-responsive" width="200" height="200" />
                </div>
                <div class="col-sm-6 col-md-8 auth-info">
                    <h4><Link to={"/author/"+this.state.id}>{this.state.name}</Link></h4>
                    <small><i class="glyphicon glyphicon-gift"></i>{this.state.date_of_birth}</small>
                    <p>{this.state.description}</p>

                </div>
            </div>
        </div>
        ); 
    }
}
export default AuthorCard ; 
import React, { Component } from 'react';
import {Link} from '@reach/router';


class AuthorCard extends Component {

    constructor(props){
        super(props) ; 
        this.state = {
            id : "" ,
            name :"" , 
            description :"" , 
            date_of_birth : ""
        }
    }

    componentDidMount(){
        this.setState({
            id : this.props.authorInfo._id,
            name : this.props.authorInfo.first_name +" "+this.props.authorInfo.last_name , 
            description : this.props.authorInfo.brief_description , 
            date_of_birth : this.props.authorInfo.date_of_birth 
        })
        
    }

    render (){
        console.log (`Desc : ${this.state.description}`) ; 
        return (

            <div class="card well-sm">
            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" width="100%" alt="" class="img-rounded img-responsive" />
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
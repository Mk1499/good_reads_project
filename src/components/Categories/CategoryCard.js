import React, { Component } from 'react';

export default class CategoryCard extends Component {


    render() {
        
        const link = "/categories/" + this.props.category_id;

        return (
            <a href={link}>
            <div className="col-sm-6 col-md-4 card card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
              
                   <h5> {this.props.category_name} </h5>
            
            </div>
            </a>
        );


    }
}
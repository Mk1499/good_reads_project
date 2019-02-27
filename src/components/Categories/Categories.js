import React, { Component } from 'react';
import CategoryCard from './CategoryCard';

export default class Categories extends Component {

    render() {
        return (
            <div style={{marginTop:"6%"}}>
                {
                this.props.categories.map((category) => {
                    return (
                        <CategoryCard category_name={category.name} category_id={category._id} />
                    );
                })
            }

            </div>
    );

    }
}
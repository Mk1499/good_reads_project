import React, { Component } from 'react';
import CategoryCard from './CategoryCard';

export default class Categories extends Component {

    render() {
        return (
            <div className="categories_container">
                {
                this.props.categories.map((category) => {
                    return (
                        <CategoryCard category_name={category} />
                    );
                })
            }

            </div>
    );

    }
}
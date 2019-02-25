import React, { Component } from 'react';
import Categories from './Categories';
import Navbar from '../Shared/navbar';

export default class CategoriesPage extends Component {


    render() {
        const categories = ['Science Fiction', 'Horror', 'Romance', 'Sports', 'Science', 'Technologies'];
        return (
            <div>
                <Navbar />
                <Categories categories={categories} />
            </div>
        );
    }

}

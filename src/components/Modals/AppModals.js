import React, { Component } from 'react';
import CategoriesModal from './CategoriesModal';
import AuthorsModal from './AuthorsModal';
import BooksModal from './BooksModal';
import RatingStars from '../RatingStars/RatingStarts';

export default class AppModals extends Component {

    render() {

        return (
            <div>
                <BooksModal />
                <CategoriesModal />
                <AuthorsModal />
            </div>

        );
    }
}
import React, { Component } from 'react';
import CategoriesModal from './CategoriesModal';
import AuthorsModal from './AuthorsModal';
import BooksModal from './BooksModal';


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
import React, { Component } from 'react';
import TabList from './TabList';
import BooksTab from './BooksTab';
import CategoriesTab from './CategoriesTab';
import AuthorsTab from './AuthorsTab';

export default class TabContent extends Component {

    render() {

        return (
            <div className="up">

                <TabList>

                    <CategoriesTab label="Categories" />
                    <BooksTab label="Books" />
                    <AuthorsTab label="Authors" />

                </TabList>
            </div>
        );
    }
}
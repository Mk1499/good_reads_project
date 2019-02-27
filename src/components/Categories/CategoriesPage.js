import React, { Component } from 'react';
import Categories from './Categories';
import Navbar from '../Shared/navbar';

export default class CategoriesPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        console.log("inside did mount");
        fetch('https://gomaanodejsapp.herokuapp.com/category/all')
            .then(response => response.json())
            .then(result => this.setState({ categories: result.allCategories }));

    }

    render() {
        //  const categories = ['Science Fiction', 'Horror', 'Romance', 'Sports', 'Science', 'Technologies'];
        return (
            <div>
                <Navbar />
                {

                    (this.state.categories.length) > 0 ?

                        <Categories categories={this.state.categories} />

                        :

                        <div style={{marginTop:"6%"}}>
                            <h1>There's no Categories</h1>
                        </div>

                }
            </div>
        );
    }

}

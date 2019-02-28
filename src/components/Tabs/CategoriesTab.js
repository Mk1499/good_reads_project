import React, { Component } from 'react';
import DataTable from '../AdminDataTable/DataTable';
import AddButton from '../AddButton/AddButton';
import Pagination from '../Pagination/Pagination';
import CategoriesModal from '../Modals/CategoriesModal';

export default class CategoriesTab extends Component {

    constructor(props) {
        super(props);

        this.state = { currentCategoryRows: [], categoryRows: [] };

    }


    componentDidMount() {
 
        fetch('https://gomaanodejsapp.herokuapp.com/category/all')
            .then(response => response.json())
            .then(result => {

                let i = 1;
                let categoryRows = [];
                for (let cat of result.allCategories) {
                    categoryRows.push([i++, cat.name]);
                }

                console.log(categoryRows);
                this.setState({ categoryRows });
                const currentCategoryRows = this.state.categoryRows.slice(0, 2);
                this.setState({ currentCategoryRows });

            });

    }

    handleAddCategoryClicked = function () {
        document.getElementById("addCategoryModal").style.display = "block";
        document.getElementById("addCategoryModal").style.opacity = "1";
    }

    onCategoriesPageChanged = data => {
        const { categoryRows } = this.state;
        const { currentPage, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentCategoryRows = categoryRows.slice(offset, offset + pageLimit);
        this.setState({ currentCategoryRows });

    }

    render() {
        const category_headings = [
            'Id',
            'Name',
        ];

        const { categoryRows } = this.state;
        const totalCategoryRows = categoryRows.length;

        return (
            <div>
            <div className="tab-content">
                <AddButton onClick={this.handleAddCategoryClicked} />
                <DataTable headings={category_headings} rows={this.state.currentCategoryRows} />
                <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">

                    <div className="d-flex flex-row py-4 align-items-center">
                        <Pagination totalRecords={totalCategoryRows} pageLimit={2} pageNeighbours={1} onPageChanged={this.onCategoriesPageChanged} />
                    </div>
                </div>
                
            </div>
            <CategoriesModal />
            </div>
        );
    }



}


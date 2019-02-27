import React, { Component } from 'react';
import './ratingstars.css';
export default class RatingStars extends Component {


    constructor(props) {
        super(props);
        this.state = {
            idnum1: "Star_" + props.bookId + "_1",
            idnum2: "Star_" + props.bookId + "_2",
            idnum3: "Star_" + props.bookId + "_3",
            idnum4: "Star_" + props.bookId + "_4",
            idnum5: "Star_" + props.bookId + "_5",
            rate: 0
        }


    }



    handelStarClicked = (e) => {

        for (let i = 1; i <= 5; i++) {


            if (e.target.id >= `Star_${this.props.bookId}_${i}`) {
                document.getElementById(`Star_${this.props.bookId}_${i}`).className = "ratingStar filledRatingStar";
                if(e.target.id === `Star_${this.props.bookId}_${i}`){fetch(`https://gomaanodejsapp.herokuapp.com/book/editrate/${this.props.bookId}/${this.props.user_id}/${i}`)
                .then(response => response.json())}
                
                
            } else {
                document.getElementById(`Star_${this.props.bookId}_${i}`).className = "ratingStar emptyRatingStar";
            }

        }

        
            // .then((book) => { this.setState(() => ({ book })) })

    }

    componentDidMount() {
        for (let i = 1; i <= 5; i++) {


            if (this.state.rate >= i) {
                document.getElementById(`Star_${this.props.bookId}_${i}`).className = "ratingStar filledRatingStar";
            } else {
                document.getElementById(`Star_${this.props.bookId}_${i}`).className = "ratingStar emptyRatingStar";
            }


        }
        //  alert("Item no"+this.props.rate+" Mounted") ;
    }


    render() {

        return (
            <div>
                <span id={this.state.idnum1} onClick={this.handelStarClicked} className="ratingStar emptyRatingStar" style={{ float: "left" }} value="1">&nbsp;</span>
                <span id={this.state.idnum2} onClick={this.handelStarClicked} className="ratingStar emptyRatingStar" style={{ float: "left" }} value="2" >&nbsp;</span>
                <span id={this.state.idnum3} onClick={this.handelStarClicked} className="ratingStar emptyRatingStar" style={{ float: "left" }} value="3" >&nbsp;</span>
                <span id={this.state.idnum4} onClick={this.handelStarClicked} className="ratingStar emptyRatingStar" style={{ float: "left" }} value="4" >&nbsp;</span>
                <span id={this.state.idnum5} onClick={this.handelStarClicked} className="ratingStar emptyRatingStar" style={{ float: "left" }} value="5" >&nbsp;</span>
            </div>
        );
    }


}
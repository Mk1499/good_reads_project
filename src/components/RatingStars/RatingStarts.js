import React, {Component} from 'react';
import './ratingstars.css';
export default class RatingStars extends Component {

    handelStarClicked = function(e){

        for(let i=1;i<=5;i++){
            
            
            if(e.target.id >= `Star_${i}`){
                document.getElementById(`Star_${i}`).className = "ratingStar filledRatingStar";
            }else{
                document.getElementById(`Star_${i}`).className = "ratingStar emptyRatingStar";
            }
        }
        
    }

    render(){
        
        return (
            <div>
            <span id="Star_1" onClick={this.handelStarClicked} className="ratingStar emptyRatingStar" style={{float:"left"}}>&nbsp;</span>
            <span id="Star_2" onClick={this.handelStarClicked} className="ratingStar emptyRatingStar" style={{float:"left"}}>&nbsp;</span>
            <span id="Star_3" onClick={this.handelStarClicked} className="ratingStar emptyRatingStar" style={{float:"left"}}>&nbsp;</span>
            <span id="Star_4" onClick={this.handelStarClicked} className="ratingStar emptyRatingStar" style={{float:"left"}}>&nbsp;</span>
            <span id="Star_5" onClick={this.handelStarClicked} className="ratingStar emptyRatingStar" style={{float:"left"}}>&nbsp;</span>
            </div>
        );
    }


}
import React, {Component} from 'react';
import './ratingstars.css';

class AvgRating extends Component {
       constructor (props) {
         
        super(props);
        this.state={
            idnum1 : "avgStar_"+this.props.bookId+"_1",
            idnum2 : "avgStar_"+this.props.bookId+"_2",
            idnum3 : "avgStar_"+this.props.bookId+"_3",
            idnum4 : "avgStar_"+this.props.bookId+"_4",
            idnum5 : "avgStar_"+this.props.bookId+"_5"
        }
    } 
   
coloringStars(){
    for(let i=1;i<=5;i++){
       
          
        if( this.props.avg >= i){
            document.getElementById(`avgStar_${this.props.bookId}_${i}`).className = "ratingStar filledRatingStar";
        }else{
            document.getElementById(`avgStar_${this.props.bookId}_${i}`).className = "ratingStar emptyRatingStar";
        }
    
    
 }
}

    componentDidMount(){
       
        this.coloringStars();   
    }

    componentWillReceiveProps(){
        this.coloringStars();
    }
        render (){
            console.log("Avg Rating : "+this.props.avg);
            return (

                
             <div>
            <span id= {this.state.idnum1}  className="ratingStar emptyRatingStar" style={{float:"left"}}>&nbsp;</span>
            <span id= {this.state.idnum2}  className="ratingStar emptyRatingStar" style={{float:"left"}}>&nbsp;</span>
            <span id= {this.state.idnum3}  className="ratingStar emptyRatingStar" style={{float:"left"}}>&nbsp;</span>
            <span id= {this.state.idnum4}  className="ratingStar emptyRatingStar" style={{float:"left"}}>&nbsp;</span>
            <span id= {this.state.idnum5}  className="ratingStar emptyRatingStar" style={{float:"left"}}>&nbsp;</span>
            </div>
            ); }
        }


export default AvgRating ; 
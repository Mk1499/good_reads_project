import React , {Component} from 'react' ; 

class AddReview extends Component {

    constructor(props){
        super(props) ; 

        this.state = {
            style : {
                    padding : "5%" 
                }
            }

    }

    addReview = (e)=> {
       
        let review = new FormData(e.target) ; 
        var result = {};
        let bookId = this.props.bookId ; 
        let userId = localStorage.getItem("userId");
        for (let entry of review.entries()) {
            result[entry[0]] = entry[1];
        }
        console.log(result);
        let url = `https://gomaanodejsapp.herokuapp.com/review/add/${bookId}/${userId}` ; 

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                //"Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(result)

        })

    }

    render() {
      
        return (
            <section>
            <h2 style={this.state.style}>Add your Review </h2>
 <div className = "card" style= {this.state.style}>
    <form onSubmit = {this.addReview}>
     <div className="row">
       <div className = "col-sm-9">
       <div class="form-group">
  <textarea class="form-control" placeholder="Add Your Review Here" name="review_body" rows="5" id="comment"></textarea>
       </div> 
       </div>
       <div className = "col-sm-3">
       <button type="submit" className="btn btn-danger">Add Review</button>
       </div>
     </div>  
      
    
    
    </form>
 
 </div>
 </section>
        );
    }
}
export default AddReview ; 
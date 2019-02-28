import React , {Component} from 'react' ; 
import './style.css' ; 

class BookReview extends Component {

    
    constructor (props){
        super(props) ; 

        this.state = {
            userName : this.props.review.user_id.first_name + " "+ this.props.review.user_id.last_name  , 
            body : this.props.review.body , 
            userId : this.props.review.user_id._id
        }
    }


 
    

    render (){
        return (
            <section>
            <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-2">
                        <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid"/>
                       
                    </div>
                    <div className="col-md-10">
                        <p>
                            <span className="float-left" ><strong>{this.state.userName}</strong></span>
                           
                       </p>
                       <div className="clearfix"></div>
                        <p>{this.state.body}</p>
                     
                    </div>
                </div>
                </div>
                </div>
 
 <br /> <br /> <br /> <br />

 
 
                 </section>               
        );
    }
}
export default BookReview ; 
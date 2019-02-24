import React , {Component} from 'react' ; 
import Navbar from '../Shared/navbar' ; 
import AuthorBooks from '../Author-Books/authorBooks' ;


class AuthorProfile extends Component {

    constructor(props){
        super(props);
        this.state = {
            book : { bookId:1 ,cover:"Book Cover " , name : "inferno" , author:"Dan Brawn" , avgRating:4 , rating:4 , shelve:"read"}
        }
    }

    render () {
        return (
            <div>
            < Navbar /> 
            <div class="container Author-page">
        <div class="row">
            <div class="">
                <div class="card well-sm">
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" width = "100%" alt="" class="img-rounded img-responsive" />
                        </div>
                        <div class="col-sm-6 col-md-8 auth-info">
                            <h4>Auhtor Name</h4>
                            <small><i class="glyphicon glyphicon-gift"></i>June 02, 1988</small>
                            <p>
                            Description HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription HereDescription Here
                          </p>
                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br /><br /><br /><br /><br />
    <div className="container card">
        <div className="row">
        
        <h3 style = {{margin:"20px"}}>Author's Books</h3>
        <AuthorBooks book ={this.state.book}/>
        </div>
    </div>
   
    </div>
        );
    }
}
export default AuthorProfile ; 
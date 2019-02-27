import React ,{Component} from 'react' ;

import Navbar from '../Shared/navbar' ; 
import Sidebar from './sidebar' ; 
import UserTable from './userTable' ; 


class UserHomePage extends Component {

    constructor (props) {
        super(props);
        this.state={
          bookfilter:"All"
        } 
    
      }

      filterBooks =(filter)=>{
     
        this.setState({
             bookfilter : filter  
          })
          
      }

      render (){
         
        return (
        <div>
        <Navbar />
        <div className = "container-fluid">
        <div className = "row">
          <Sidebar changeState = {this.filterBooks}/>
          
          <div className="col-lg-10 col-md-9 user-table">
          <UserTable currentState={this.state.bookfilter}/>
          </div>
      
        </div>
        </div>
   </div>);}
      }


export default UserHomePage ; 
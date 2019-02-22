import React , {Component}from 'react' ; 

class Sidebar extends Component {


 
  // testFun(){
  //   alert("its Works") ; 
  // }

  
change=(e)=>{
   this.props.changeState(e.target.value) ; 
}
    render (){
        
      var style = {
           width : '100%' , 
           backgroundColor:"transparent" , 
         
           
         }

        return (
            <nav className="col-lg-2 col-md-3 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">

              <li className="nav-item">
                <button className="btn nav-link active" value="All" style={style} onClick={this.change} > 
                 All 
                 <span className="sr-only">(current)</span>
                </button>
                <hr />
              </li>

              <li className="nav-item">
                <button className="btn nav-link"  style={style} value ="Read" onClick={this.change} >
                  Read
                </button>
                <hr />
              </li>

              <li className="nav-item">
                <button className="btn nav-link" value="Currently Reading" style={style}  onClick={this.change}>
                  Currently Reading 
                </button>
                <hr />
              </li>

              <li className="nav-item">
                <button className="btn nav-link" value="Want to Read" style={style} onClick={this.change}>
                  Want to Read
                </button>
                <hr />
              </li>

              
            </ul>
          </div>
        </nav>
        )
    }
}
export default Sidebar ; 
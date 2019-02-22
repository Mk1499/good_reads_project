import React , {Component} from 'react' ; 

class DropDown extends Component {

    constructor(props){
        super(props) ;
        this.state ={
            compId : "shelveDropDown"+this.props.bookId 
        }
    }

    handleChange=(e)=>{
       this.props.shelveChanged(this.props.bookId,e.target.value)
    }
    componentDidMount(){
          document.getElementById(this.state.compId).value = this.props.shelveState ; 
    }
    render(){
        return (
            <select class="custom-select" id={this.state.compId} onChange={this.handleChange}>
            <option value="read">Read</option>
            <option value="currently-reading">Currently Read</option>
            <option value="want-to-read">Want to Read</option>
          </select>
        );
    }
}
export default DropDown ; 
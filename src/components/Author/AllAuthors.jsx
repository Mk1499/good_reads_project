import React , {Component} from 'react' ; 
import AuthorCard from './AuthorCard' ; 
import Navbar from '../Shared/navbar' ; 

class AllAuthors extends Component {

    constructor(props){
        super (props) ; 
        this.state = {
            authors : []
        }
    }

    componentDidMount(){
        fetch('https://gomaanodejsapp.herokuapp.com/author/all')
        .then(response => response.json())
        .then(result => this.setState({ authors: result.allAuthors }));
    }
    
    render () {
        return (
            <div>
            <Navbar />
            <div className="cards_container row">
             
                {
                this.state.authors.map((author) => {
                    return (
                        <div className="col-md-4">
                        <AuthorCard className="col-md-4" authorInfo={author} />
                        </div>
                    );
                })
            }

            </div>
        </div>
        );
    }
}
export default AllAuthors ; 
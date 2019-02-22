import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import TopRated from './TopRated';
import data from './DumyData/data';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import MenuContent from './menuContent';
import Slider from "react-slick";


class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
      properties: data.properties,
      property: data.properties[0]
    }
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }
     
render(){
  const {property} = this.state;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
      return (
         <div className="LeftSide">  
        <CheeseburgerMenu
          isOpen={this.state.menuOpen}
          closeCallback={this.closeMenu.bind(this)}>
          <MenuContent closeCallback={this.closeMenu.bind(this)} />
       </CheeseburgerMenu>
      
      <HamburgerMenu
        isOpen={this.state.menuOpen}
        menuClicked={this.openMenu.bind(this)}
        width={32}
        height={24}
        strokeWidth={3}
        rotate={0}
        color='#3a4660'
        borderRadius={0}
        animationDuration={0.5}
      /> 

      <div className="rated">
          <span className="title">Top Rated Books</span>
        <div className="bookslide">
            <Slider {...settings}>
            <TopRated property={property} />
            </Slider>
             </div>
            <button className="next"
          onClick={() => this.nextProperty()} 
          disabled={property.index === data.properties.length-1}
        >Next</button>
        <button className="prev"
          onClick={() => this.prevProperty()} 
          disabled={property.index === 0}
        >Prev</button>
        </div>
        </div>
        
        );
    }

}

export default Main;
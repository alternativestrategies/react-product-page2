import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import SlideItem from './SlideItem';
import listItems from './listItems';

class MainSlider extends Component{

  state = {
    slideshow: this.props.slide,
    slideIndex: 0,
    currentIndex: 0
  }


componentDidMount(){
  var that = this;
    this.timeout = setTimeout(function () {
        that.showSlides()
      }, 2000);
}

componentDidUpdate(){
  var that = this;
  this.timeout = setTimeout(function () {
      that.showSlides()
    }, 3000);
}

componentWillUnmount(){
  clearTimeout(this.timeout);
}

showSlides = () => {
  //assigning a variable to index
  var index = 0;
  index = this.state.currentIndex + 1; 

  this.state.currentIndex = index >= listItems.length ? 0 : index; 
   //sets state with slideIndex to be currentIndex and slideshow to be the listItem with the currentIndex
   this.setState({
    slideIndex: this.state.currentIndex,
    slideshow: listItems[this.state.currentIndex]
  });
      
}
// contains the slideshow props being
render(){
  return(
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="pink-bg"></div>
            <div id="slideshow">
              <SlideItem 
                  img={this.state.slideshow.img}
                />  
            </div>
        </div>
          <div className="col-md-6">
            <div className="shop-now">
            <h2 className="shop-now-title">
            Fall Must Haves
            </h2>
            <p className="shop-now-sub">
              Shop our exclusive collection of planners and journals
            </p>
            <a href="/product">
            <Button className="shop-now-btn">
              Shop Now</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </React.Fragment>
    
  )
}
}

export default MainSlider;
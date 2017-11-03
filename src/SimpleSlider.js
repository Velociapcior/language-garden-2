import React, { Component } from 'react';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './App.css';

class SimpleSlider extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <LeftArrow/>,
        nextArrow: <RightArrow/>,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseoOnHover: true,
        swipeToSlide: true
      };
      return (
        <Slider {...settings}>
          <img alt="1" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
          <img alt="2" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
          <img alt="3" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
          <img alt="4" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
          <img alt="5" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
          <img alt="6" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
        </Slider>
      );
    }
  }

  class LeftArrow extends Component {
    render(){
      return<button className='prev-arrow' onClick={this.props.onClick}>{"←"}</button>
    }
  }

  class RightArrow extends Component {
    render(){
      return<button className='next-arrow' onClick={this.props.onClick}>{"→"}</button>
    }
  }

 export default SimpleSlider;
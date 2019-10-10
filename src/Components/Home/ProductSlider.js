import React from 'react';
import Slider from 'react-slick';
import Products from '../../Data.json';

//product slider using react-slick
const ProductSlider = () => {
  const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 930,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
  }
    //component to loop images through
    return (
    <div className="slider">  
      <h2 className="pt-4 pb-2">Search Products</h2>  
        <Slider {...settings}>
          {Products
          .map( product => 
            <div className="slide">
            <img 
                src={`assets/img/${product.product_img}`} 
                alt={product.name}/>
            </div>
            )}
        </Slider>
      </div>
    );
  
}

export default ProductSlider;
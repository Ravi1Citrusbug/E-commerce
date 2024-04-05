import img1 from './image/e-img1.jpg'
import img2 from './image/e-img2.jpg'
import img3 from './image/e-img3.jpg'
import "./advertisement.css"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Set autoplay speed to 1 second (1000 milliseconds)
  };

  return (
      <Slider {...settings}>
      <div >
        <img src={img1} alt="Image 1" />
      </div>
      <div>
        <img src={img2} alt="Image 2" />
      </div>
      <div >
        <img  src={img3} alt="Image 3" />
      </div>
    </Slider>
  
  );
};

export default Carousel;
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/image1.jpg';
import first from '../../assets/first.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';

const SliderComponent = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images at once
    slidesToScroll: 1, // Scroll one image at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="relative max-w-5xl mx-auto py-8">
      <Slider ref={sliderRef} {...settings}>
        <div className="px-7">
          <img className="w-full h-auto ml-20 md:ml-0 md:w-full md:h-auto" src={image1} alt="error" />
        </div>
        <div className="px-7">
          <img className="w-full h-auto ml-20 md:ml-0 md:w-full md:h-auto" src={first} alt="error" />
        </div>
        <div className="px-7">
          <img className="w-full h-auto ml-20 md:ml-0 md:w-full md:h-auto" src={image5} alt="error" />
        </div>
        <div className="px-7">
          <img className="w-full h-auto ml-20 md:ml-0 md:w-full md:h-auto" src={image4} alt="error" />
        </div>
        <div className="px-7">
          <img className="w-full h-auto ml-20 md:ml-0 md:w-full md:h-auto" src={image3} alt="error" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;

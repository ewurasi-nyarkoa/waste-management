import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../../assets/images/image12.png";
import image2 from "../../assets/images/image11.png";
import image3 from "../../assets/images/image13.png";
import { Link } from 'react-router-dom';

const DirectionPage = () => {
  const img = [image1, image2, image3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, 
  };

  return (
    <div className="relative max-h-[75vh]">
      <Slider {...settings} className="absolute inset-0 h-full w-full">
        {img.map((img, index) => (
          <div key={index} className="h-full w-full">
            <img src={img} alt={`Slide ${index + 1}`} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50 filter blur-sm"></div>
          </div>
        ))}
      </Slider>
      
     
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-6">
        <div className="relative z-20">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-green-500">SWKWaste</span> Wise
          </h1>
          <p className="text-lg mb-2">Leading the Way in Sustainable Waste Management</p>
          <p className="text-lg mb-8">Reduce, Reuse, Recycle – A Cleaner Planet Starts Today</p>
          <Link to="/signin" className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DirectionPage;

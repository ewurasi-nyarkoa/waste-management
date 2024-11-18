import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../../assets/images/image12.png";
import image2 from "../../assets/images/image11.png";
import image3 from "../../assets/images/image13.png";
import logo from "../../assets/images/SWK_LOGO__5_.png";
import { Link } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';

// Add this CSS to your styles or create a new animation
const pulseAnimation = `
  @keyframes breathe {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const HeroSection = () => {
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
    <div className="relative h-screen overflow-hidden">
      <div className="absolute top-4 right-4 z-20">
        <Link 
          to="/AdminLogin" 
          className="px-4 py-2 text-sm font-medium text-white bg-black bg-opacity-50 
                     hover:bg-opacity-70 rounded-full transition-all duration-300 
                     flex items-center gap-2 backdrop-blur-sm border border-white/20"
        >
          <FaUserShield className="text-green-400" />
          Admin Portal
        </Link>
      </div>

      <style>{pulseAnimation}</style>
      <Slider {...settings} className="absolute inset-0 h-full w-full">
        {img.map((img, index) => (
          <div key={index} className="h-full w-full">
            <img src={img} alt={`Slide ${index + 1}`} className="h-full w-full object-cover sm:object-contain" />
            <div className="absolute inset-0 bg-black opacity-50 filter blur-sm"></div>
          </div>
        ))}
      </Slider>
      
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4 sm:px-6 md:px-8">
        <div className="relative z-20 max-w-lg mx-auto">
          {/* <div className="mb-6 p-4 rounded-lg bg-black bg-opacity-40 backdrop-blur-sm">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
              <img 
                src={logo} 
                alt="SWKWaste Logo" 
                className="h-20 sm:h-20 md:h-32 w-auto object-contain"
                
      style={{
        filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))',
        
      }}
              />
           
           
            </h1>
          </div> */}
          
          <p className="text-xl sm:text-2xl md:text-3xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
            Leading the Way in Sustainable Waste Management
          </p>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-12 font-light tracking-wide text-gray-100">
            Reduce • Reuse • Recycle
            <span className="block mt-2 text-green-300">
              A Cleaner Planet Starts Today
            </span>
          </p>
          
          <Link 
            to="/signin" 
            className="inline-block px-8 py-4 text-lg font-semibold text-white 
                       bg-gradient-to-r from-green-500 to-green-600 
                       rounded-full shadow-lg hover:from-green-600 hover:to-green-700 
                       transition-all duration-300 transform hover:scale-105 
                       animate-[breathe_2s_ease-in-out_infinite] hover:animate-none
                       border-2 border-green-400"
            style={{
              boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

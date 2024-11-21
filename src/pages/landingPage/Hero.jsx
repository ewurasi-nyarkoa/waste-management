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
        <div className="relative z-20 max-w-2xl mx-auto">
          {/* Title Section */}
          <div className="mb-8 p-6 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-300 via-green-400 to-green-500 text-transparent bg-clip-text">
                Taka Kipawa
              </span>
            </h1>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-green-300 to-green-500 rounded-full mb-4"></div>
            {/* <p className="text-lg sm:text-xl text-gray-200 font-light">
              Revolutionizing Waste Management
            </p> */}
          </div>
          
          <p className="text-xl sm:text-2xl md:text-3xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
            Leading the Way in Sustainable Waste Management
          </p>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-12 font-light tracking-wide text-gray-100">
            Reduce • Reuse • Recycle
            {/* <span className="block mt-2 text-green-300">
              A Cleaner Planet Starts Today
            </span> */}
          </p>
          
          {/* Get Started Button with enhanced styling */}
          <Link 
            to="/signin" 
            className="inline-block px-8 py-4 text-lg font-semibold text-white 
                     bg-gradient-to-r from-green-500 to-green-600 
                     rounded-full shadow-lg hover:from-green-600 hover:to-green-700 
                     transition-all duration-300 transform hover:scale-105 
                     animate-[breathe_2s_ease-in-out_infinite] hover:animate-none
                     border-2 border-green-400 relative group"
            style={{
              boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
            }}
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Link>

          {/* Optional: Add floating elements for visual interest */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </div>
  );
};

// Add this to your CSS or tailwind.config.js
const styles = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
`;

export default HeroSection;

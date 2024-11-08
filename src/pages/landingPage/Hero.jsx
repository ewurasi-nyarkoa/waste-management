import React from 'react';
import image4 from '../../assets/images/image4.png'

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" 
    style={{ backgroundImage: `url(${image4})` }}>
      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative pl-32 z-10 flex flex-col items-start justify-center h-full text-left text-white px-4 md:w-1/2">
        <p className="text-lg md:text-5xl mb-4 font-bold">Championing Sustainability through Waste Management</p>
        <p className="text-base md:text-lg mb-6">
        We are dedicated to fostering a cleaner future through sustainable waste management solutions. Our mission is to minimize waste impact and promote eco-friendly practices, creating positive change for communities and the planet.
        </p>
        <a href="https://www.youtube.com/watch?v=0NIgJD7QuQg" target="_blank" rel="noopener noreferrer">
  <button className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition">
    Play
  </button>
</a>
      </div>
    </div>
  );
};

export default HeroSection;

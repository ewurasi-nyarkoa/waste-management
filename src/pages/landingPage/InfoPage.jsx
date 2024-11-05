import React from 'react';
import { FaInfoCircle, FaCommentDots } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start px-6 py-10 lg:py-20 lg:px-16 bg-white dark:bg-gray-900">
      {/* Left side with image and experience */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center">
        <img
          src="src/assets/images/image5.png" 
          alt="Waste Management Workers"
          className="rounded-lg shadow-lg w-full lg:w-5/6"
        />
        <div className="absolute top-5 left-5 bg-gray-100 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-4xl font-bold text-green-700">18+</h2>
          <p className="text-gray-600">Years of Experience</p>
        </div>
      </div>

      {/* Right side with text content */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-10 text-gray-700 dark:text-gray-300">
        <h3 className="uppercase text-sm text-green-600 font-semibold">Who We Are</h3>
        <h1 className="text-3xl lg:text-5xl font-bold text-green-700 dark:text-white mt-2">
        SWK Taka Kipawa, the Future of Eco-Conscious Living!
        </h1>
        <p className="text-lg font-semibold text-gray-500 dark:text-gray-400 mt-4">
          Sustainable Waste Management Solutions for Homes, Businesses & Communities, Enhanced with Innovation.
        </p>
        <p className="mt-6 text-gray-600 dark:text-gray-400">
        The SWK Taka Kipawa App is a proudly Ghanaian-owned platform that combines waste management with an upcycling marketplace. Our mission is to make environmental responsibility accessible and impactful by empowering users to schedule waste pickups, shop eco-friendly products, and participate in sustainability workshops. We are committed to providing an intuitive, eco-conscious solution that supports households and businesses alike in building a greener future. With over{' '}
          <strong className="text-green-700 dark:text-white">5 million satisfied customers</strong>, we take immense
          pride in our commitment to excellence.
        </p>
        <button className="flex items-center mt-8 px-6 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800">
          <FaInfoCircle className="mr-2" /> More About Us
        </button>

        <div className="fixed bottom-4 right-4 flex items-center space-x-2 bg-white text-gray-700 p-3 rounded-full shadow-lg dark:bg-gray-800 dark:text-gray-300">
        <FaCommentDots className="text-2xl" />
        <span className="hidden lg:inline">Chat with us 👋</span>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;

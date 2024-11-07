import React from 'react';
import image from '../assets/images/image4.png'; // 
import WhoWeAre from './AboutUs/whoWeAreNow';
import AboutUs from './AboutUs/WhatWeDo';
import CoreValues from './AboutUs/OurValues';

const AboutUsPage = () => {
  return (
    <div>
        <WhoWeAre/>
        <AboutUs />
        <CoreValues />
    </div>
  
    // <div className="bg-gray-100">
    //   <div className="max-w-7xl mx-auto px-4 py-8">
    //     <h1 className="text-4xl font-bold text-center text-green-700 mb-6">Who We Are</h1>
        
    //     <div className="flex flex-col lg:flex-row mb-10">
    //       <div className="lg:w-1/2 p-4">
    //         <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Vision</h2>
    //         <p className="text-gray-700 mb-4">
    //           To be the leader in waste management solutions, contributing to a cleaner and healthier environment for future generations.
    //         </p>
    //         <p className="text-gray-700">
    //           We aim to provide innovative and sustainable waste management solutions that meet the needs of our customers and the communities we serve.
    //         </p>
    //       </div>
    //       <div className="lg:w-1/2 p-4">
    //         <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Mission</h2>
    //         <p className="text-gray-700 mb-4">
    //           Our mission is to deliver efficient waste management services while educating the public on the importance of environmental sustainability.
    //         </p>
    //         <p className="text-gray-700">
    //           We are committed to using the latest technologies and practices to ensure the highest quality of service.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
    //       <img src={image} alt="Waste Management" className="w-full h-64 object-cover" />
    //       <div className="p-6">
    //         <h3 className="text-2xl font-bold text-green-800 mb-4">Our Commitment</h3>
    //         <p className="text-gray-700 mb-4">
    //           We are dedicated to achieving a sustainable future through responsible waste management practices.
    //         </p>
    //         <p className="text-gray-700">
    //           Our team works tirelessly to ensure that waste is managed in a way that minimizes its impact on the environment.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="flex flex-col lg:flex-row mb-10">
    //       <div className="lg:w-1/2 p-4">
    //         <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Values</h2>
    //         <ul className="list-disc list-inside text-gray-700">
    //           <li>Integrity</li>
    //           <li>Innovation</li>
    //           <li>Teamwork</li>
    //           <li>Sustainability</li>
    //           <li>Customer Focus</li>
    //         </ul>
    //       </div>
    //       <div className="lg:w-1/2 p-4">
    //         <h2 className="text-2xl font-semibold text-green-600 mb-4">Contact Us</h2>
    //         <p className="text-gray-700 mb-4">For more information about our services, feel free to reach out to us.</p>
    //         <p className="text-gray-700">Email: info@zoomlionghana.com</p>
    //         <p className="text-gray-700">Phone: +233 123 456 789</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AboutUsPage;

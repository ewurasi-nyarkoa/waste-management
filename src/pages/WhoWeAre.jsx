import React from 'react';
import image from '../assets/images/image4.png'; // 
import WhoWeAre from './AboutUs/whoWeAreNow';
import AboutUs from './AboutUs/WhatWeDo';
import CoreValues from './AboutUs/OurValues';
import Footer from '../components/Footer';

const AboutUsPage = () => {
  return (
    <div>
        <WhoWeAre/>
        <AboutUs />
        <CoreValues />
        <Footer />
    </div>
  
  );
};

export default AboutUsPage;

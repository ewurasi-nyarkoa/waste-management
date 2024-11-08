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
  
  );
};

export default AboutUsPage;

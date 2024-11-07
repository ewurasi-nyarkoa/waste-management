import React from "react";
import image1 from "../../assets/images/image13.png"
const WhoWeAre = () => {
  return (
    <div className="relative bg-green-900 text-white h-screen flex flex-col justify-center items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-40">
        <img
          src={image1} // replace with the actual path to your image
          alt="Background trucks"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold uppercase tracking-wider">Who We Are</h2>
        <h1 className="text-4xl font-bold mt-4">
          So Much More Than <span className="italic">"Managing Waste"</span>
        </h1>
        <p className="text-lg mt-6 max-w-2xl mx-auto">
          With a focus on people, service and sustainability, Zoomlion is committed to
          the right actions today for a better shared tomorrow.
        </p>

        {/* Breadcrumb */}
        <div className="mt-8">
          <a href="/" className="text-black hover:underline">
            Home
          </a>
          <span className="mx-2">•</span>
          <span>Who We Are</span>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

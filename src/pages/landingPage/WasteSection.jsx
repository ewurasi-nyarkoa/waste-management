import React from 'react';

const WasteManagementSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="text-center md:text-left mb-10 w-[40%]">
            <p className="text-green-600 font-semibold uppercase text-sm">What We Offer</p>
            <h2 className="text-4xl font-bold text-green-800 mt-2">
              Sustainable Waste Management Solutions
            </h2>
          </div>
          <div className="w-[40%]">
            <p className="text-gray-700 mt-4 max-w-xl">
            The SWK Taka Kipawa App is a proudly Ghanaian-owned platform that combines waste management with an upcycling marketplace. Our mission is to make environmental responsibility accessible and impactful by empowering users to schedule waste pickups, shop eco-friendly products, and participate in sustainability workshops. We are committed to providing an intuitive, eco-conscious solution that supports households and businesses alike in building a greener future.
            </p>
            <a href="#services" className="text-green-800 font-semibold mt-4 inline-block underline">
              All Services
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-[5%] h-[70%]">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 h-[100%] transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300">
            <img src="src/assets/images/image6.png" alt="Waste Collection" className="w-full h-40 object-cover" />
            <h3 className="text-xl font-bold text-green-800 mt-4">Waste Collection</h3>
            <p className="text-gray-700 mt-2">
              Using meticulous collection strategies, we efficiently gather wastes, transport them to designated facilities for sorting and transfer and recycling.
            </p>
            <a href="#waste-collection" className="text-green-800 font-semibold mt-4 inline-block underline">
              Discover Recycle 365 »
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 h-[100%] transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300">
            <img src="src/assets/images/image7.png" alt="Composting & Recycling" className="w-full h-40 object-cover" />
            <h3 className="text-xl font-bold text-green-800 mt-4">Composting & Recycling</h3>
            <p className="text-gray-700 mt-2">
              Our Integrated Waste Processing and Recycling Plant receives, sorts, processes, and recycles solid waste and produces organic compost for agronomic purposes in Ghana and West Africa.
            </p>
            <a href="#composting-recycling" className="text-green-800 font-semibold mt-4 inline-block underline">
              Recycling Simplified »
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 h-[100%] transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300">
            <img src="src/assets/images/image8.png" alt="Landfill Management" className="w-full h-40 object-cover" />
            <h3 className="text-xl font-bold text-green-800 mt-4">Landfill Management</h3>
            <p className="text-gray-700 mt-2">
              We possess the appropriate technologies to effectively manage and decommission waste landfills.
            </p>
            <a href="#landfill-management" className="text-green-800 font-semibold mt-4 inline-block underline">
              Explore Landfill Management »
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteManagementSection;

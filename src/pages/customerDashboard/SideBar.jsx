

import React from 'react';

import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom' 

const CustomerDashboard = () => {
  return (
    <div className="flex h-screen ">
    
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Customer Dashboard</h1>
        </div>
        <nav className="mt-6">
        <ul>
      <li className="p-4 hover:bg-gray-700 cursor-pointer">
        <Link to="/" className="block w-full h-full">Overview</Link>
      </li>
      <li className="p-4 hover:bg-gray-700 cursor-pointer">
        <Link to="/customerDashboard/pickup" className="block w-full h-full">Waste Collection</Link>
      </li>
      <li className="p-4 hover:bg-gray-700 cursor-pointer">
        <Link to="/customerDashboard/products" className="block w-full h-full">Recycle</Link>
      </li>
      <li className="p-4 hover:bg-gray-700 cursor-pointer">
        <Link to="/customerDashboard/blogs" className="block w-full h-full">Blogs</Link>
      </li>
    </ul>
        </nav>
      </div>

     
      <div className="flex-1 p-6">
        {/* <h2 className="text-2xl font-semibold mb-4">Overview</h2> */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Welcome, User!</h3>
          <div className="flex items-center justify-between  p-4 ">
  <p className="text-gray-600 text-lg">
    Here you can manage your account settings and pick a date.
  </p>
  <Link to="/" className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
    Sell here
  </Link>
</div>

          
        </div>
    
        <div className="mt-4">
          <Outlet />
        </div>
       
       
    </div> 
    </div>
  );
};

export default CustomerDashboard;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const CustomerDashboard = () => {
  const [role, setRole] = useState(localStorage.getItem('userRole') || localStorage.getItem('userRoles') || 'user'); // Get the userRole from localStorage or default to 'user'
  
  useEffect(() => {
    // Check if the role is stored in userRole
    const storedRole = localStorage.getItem('userRole') || localStorage.getItem('userRoles');
    if (storedRole) {
      setRole(storedRole); // Update the state with the actual role
      console.log(storedRole)
    }
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Customer Dashboard</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">
              <Link to="/" className="block w-full h-full">Overview</Link>
            </li>

            {/* Conditionally rendered links for users */}
            {role === 'user' && (
              <> 
                <li className="p-4 hover:bg-gray-700 cursor-pointer">
                  <Link to="/customerDashboard/pickup" className="block w-full h-full">Waste Collection</Link>
                </li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">
                  <Link to="/customerDashboard/products" className="block w-full h-full">Recycle</Link>
                </li>
             </>
            )} 

            {/* Conditionally rendered link for vendors */}
            {role === 'vendor' && (
              <li className="p-4 hover:bg-gray-700 cursor-pointer">
                <Link to="/customerDashboard/products" className="block w-full h-full">Vendor Product</Link>
              </li>
            )}

            <li className="p-4 hover:bg-gray-700 cursor-pointer">
              <Link to="/customerDashboard/blogs" className="block w-full h-full">Blogs</Link>
            </li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">
              <Link to="/customerDashboard/articles" className="block w-full h-full">Articles</Link>
            </li>

         
            <li className="p-4 hover:bg-red-700 cursor-pointer mt-4">
              <Link to="/" className="block w-full h-full text-red-500 font-bold">Logout</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 p-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Welcome, {role === 'user' ? 'User' : 'Vendor'}!</h3>
          <div className="flex items-center justify-between p-4">
            <p className="text-gray-600 text-lg">
              Here you can manage your account settings and pick a date.
            </p>
            <Link to="/login" className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
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

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Outlet, useLocation, useOutletContext } from 'react-router-dom';
import { FaHome, FaRecycle, FaTrashAlt, FaBlog, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';
import { apiGetProfile } from '../../services/product';
import WasteSchedulePage from './DatePicker';
import { FaStore } from 'react-icons/fa';  



const SideBar= ({profile, role}) => {
  console.log('Current role:', role);

  const navigate = useNavigate();


  const LogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    setTimeout(() => {
      navigate("/");
    }, 1000);
   
  }

  // Function to check if link is active
  const isActiveLink = (path) => {
    return location.pathname.includes(path);
  };

  return (
    <div className="flex  bg-gray-100">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 h-screen w-64 bg-green-800 text-white overflow-y-auto scrollbar-hide">
        <div className="p-6 flex items-center gap-4">
          {profile && (
            <>
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-xl font-bold">
                {profile.name ? profile.name[0].toUpperCase() : '?'}
              </div>
              <div>
                <h1 className="text-2xl font-bold">Welcome,</h1>
                <p className="text-sm">{profile?.name || 'User'}</p>
              </div>
            </>
          )}
        </div>
        
        <nav className="mt-6">
          <ul>
            <li className={`p-4 cursor-pointer flex items-center transition-colors duration-200
              ${isActiveLink('/Landing') ? 'bg-green-700' : 'hover:bg-green-700'}`}>
              <FaHome className="mr-2" />
              <Link to="/" className="block w-full h-full">Overview</Link>
            </li>

            {role === 'user' && (
              <>
                <li className={`p-4 cursor-pointer flex items-center transition-colors duration-200
                  ${isActiveLink('/pickup') ? 'bg-green-700' : 'hover:bg-green-700'}`}>
                  <FaTrashAlt className="mr-2" />
                  <Link to="/customerDashboard/pickup" className="block w-full h-full">
                    Waste Collection
                  </Link>
                </li>

                <li className={`p-4 cursor-pointer flex items-center transition-colors duration-200
                  ${isActiveLink('/products') ? 'bg-green-700' : 'hover:bg-green-700'}`}>
                  <FaRecycle className="mr-2" />
                  <Link to="/customerDashboard/products" className="block w-full h-full">
                    Recycle
                  </Link>
                </li>

                <li className={`p-4 cursor-pointer flex items-center transition-colors duration-200
                  ${isActiveLink('/login') ? 'bg-green-700' : 'hover:bg-green-700'}`}>
                  <FaStore className="mr-2" />
                  <Link to="/login" className="block w-full h-full">Sell here</Link>
                </li>
              </>
            )}

            {role === 'admin' && (
              <>
                <li className={`p-4 cursor-pointer flex items-center transition-colors duration-200
                  ${isActiveLink('/adminview') ? 'bg-green-700' : 'hover:bg-green-700'}`}>
                  <FaTrashAlt className="mr-2" />
                  <Link to="/customerDashboard/adminview" className="block w-full h-full">
                    Ticket Management
                  </Link>
                </li>
              </>
            )}

            {role === 'vendor' && (
              <>
                <li className={`p-4 cursor-pointer flex items-center transition-colors duration-200
                  ${isActiveLink('/products') ? 'bg-green-700' : 'hover:bg-green-700'}`}>
                  <FaFileAlt className="mr-2" />
                  <Link to="/customerDashboard/products" className="block w-full h-full">
                    Vendor Product
                  </Link>
                </li>

                <li className={`p-4 cursor-pointer flex items-center transition-colors duration-200
                  ${isActiveLink('/addProduct') ? 'bg-green-700' : 'hover:bg-green-700'}`}>
                  <FaStore className="mr-2" />
                  <Link to="/customerDashboard/addProduct" className="block w-full h-full">
                    Add Product
                  </Link>
                </li>
              </>
            )}

            <li className={`p-4 cursor-pointer flex items-center transition-colors duration-200
              ${isActiveLink('/blogs') ? 'bg-green-700' : 'hover:bg-green-700'}`}>
              <FaBlog className="mr-2" />
              <Link to="/customerDashboard/blogs" className="block w-full h-full">Blogs</Link>
            </li>

            <li className={`p-4 cursor-pointer flex items-center transition-colors duration-200
              ${isActiveLink('/articles') ? 'bg-green-700' : 'hover:bg-green-700'}`}>
              <FaFileAlt className="mr-2" />
              <Link to="/customerDashboard/articles" className="block w-full h-full">Articles</Link>
            </li>
          </ul>
        </nav>

        <div className="mt-[10rem]">
          <ul>
            <li className="p-4 hover:bg-green-700 cursor-pointer flex items-center">
              <FaSignOutAlt className="mr-2" />
              <Link onClick={LogOut} className="block w-full h-full">Logout</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ml-64 flex-1 p-8" key={role + location.pathname}>
        <div className="max-w-7xl mx-auto">
          {/* Welcome Message */}
          <div className="mb-8 bg-white rounded-lg shadow-md border-l-4 border-green-500">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-green-800 mb-3">
                Welcome, {profile?.name || (role === 'user' ? 'User' : 'Vendor')}!
              </h3>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {role === 'user' ? (
                    <span className="flex flex-col gap-2">
                      <span className="text-xl font-semibold text-green-700">
                        Welcome to your eco-friendly hub! 🌱
                      </span>
                      <span>
                        Here you can schedule waste collections, explore recycling options, 
                        and make a positive impact on the environment. Let's make the world 
                        greener together!
                      </span>
                    </span>
                  ) : role === 'admin' ? (
                    <span className="flex flex-col gap-2">
                      <span className="text-xl font-semibold text-green-700">
                        Welcome to Admin Dashboard! 🌿
                      </span>
                      <span>
                        Here you can manage waste collection tickets, monitor activities,
                        and ensure smooth operations. Keep our environment clean and green!
                      </span>
                    </span>
                  ) : (
                    <span className="flex flex-col gap-2">
                      <span className="text-xl font-semibold text-green-700">
                        Welcome to your vendor dashboard! 🌿
                      </span>
                      <span>
                        Here you can showcase your eco-friendly products, connect with conscious 
                        consumers, and be part of the sustainable revolution. Let's grow your 
                        green business!
                      </span>
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className=''>
            {role === 'user' && <WasteSchedulePage />}
            </div>
        

          {/* Outlet for other content */}
          {/* <div className="bg-white rounded-lg shadow-sm p-6">
            <Outlet context={{ profile, role }} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

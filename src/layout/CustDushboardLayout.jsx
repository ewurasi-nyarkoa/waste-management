import React from 'react'
import CustomerDashboard from '../pages/customerDashboard/SideBar'
import BlogsPage from '../pages/blogs/BlogsPage'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const CustDushboardLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // If no token is found, redirect to the signin page
    if (!token) {
      navigate('/signin');
    }
  }, [navigate]);
  return (
    <div className='bg-gray-100 h-auto'>
      <CustomerDashboard />
     
     
    </div>
  )
}

export default CustDushboardLayout

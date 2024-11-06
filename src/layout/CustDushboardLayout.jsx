import React from 'react'
import CustomerDashboard from '../pages/customerDashboard/SideBar'
import BlogsPage from '../pages/blogs/BlogsPage'
import { Outlet } from 'react-router-dom'

const CustDushboardLayout = () => {
  return (
    <div className='bg-gray-100 h-auto'>
      <CustomerDashboard />
     
    </div>
  )
}

export default CustDushboardLayout

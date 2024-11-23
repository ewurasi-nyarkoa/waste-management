import React from 'react'
import CustomerDashboard from '../pages/customerDashboard/SideBar'
import BlogsPage from '../pages/blogs/BlogsPage'
import { useNavigate,useLocation,Outlet } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { apiGetProfile } from '../services/product';
import SideBar from '../pages/customerDashboard/SideBar';



const CustDushboardLayout = () => {
  const [isloading, setIsLoading]= useState(false);
  const role = localStorage.getItem("role")
  const [profile, setProfile] = useState();
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        const response = await apiGetProfile();
        setProfile(response.data);
        console.log(response.data);
      } catch (error) {
       
        console.error('Error fetching profile:', error);
       
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchProfile();
  }, [role]); 




  return (
    <>{isloading ? <p>Loading...</p> : <div className='bg-gray-100 min-h-screen'>
      <SideBar profile={profile} role={role} />
   
      <div className="ml-0 lg:ml-64 p-4 sm:p-6 lg:p-8 transition-all duration-300"> 
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-none sm:rounded-lg shadow-lg 
                          p-3 sm:p-6 border-0 sm:border sm:border-gray-200 
                          min-h-screen sm:min-h-0 mx-[-1rem] sm:mx-0 
                          mt-[-1rem] sm:mt-0 ">
            <Outlet context={{ profile, role }} />
          </div>
        </div>
      </div>
    </div>}</>
  )
}

export default CustDushboardLayout

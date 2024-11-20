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

  // Fetch profile whenever role changes
  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true)
      try {
        const response = await apiGetProfile();
        setProfile(response.data);
        console.log(response.data)
       
      } catch (error) {
        console.error('Error fetching profile:', error);
        // Handle error - maybe redirect to login if unauthorized
        if (error.response?.status === 401) {
          navigate('/login');
        }
      }
      finally {setIsLoading(false)}
    };
    

    fetchProfile();
  }, [role]); 



  useEffect(() => {
    const token = localStorage.getItem("token");

    // If no token is found, redirect to the signin page
    if (!token) {
      navigate('/signin');
    }
  }, [navigate]);
  return (
    <>{isloading ? <p>Loading...</p> : <div className='bg-gray-100 min-h-screen'>
      <SideBar profile={profile} role={role} />
   
      <div className="ml-64 p-8"> 
        <div className="max-w-7xl ">
        
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <Outlet context={{ profile, role }} />
          </div>
        </div>
      </div>
    </div>}</>
  )
}

export default CustDushboardLayout

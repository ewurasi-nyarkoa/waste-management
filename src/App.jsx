
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/SigninPage/SignIn'
import SignupPage from './pages/signupPage/Signup'
import LandingLayout from './layout/LandingLayout'
import CustDushboardLayout from './layout/CustDushboardLayout'
import BlogsPage from './pages/blogs/BlogsPage'
import AboutUsPage from './pages/WhoWeAre'
import DirectionPage from './pages/directionPage/Direction'
import CustomerPage from './pages/recyclePage/CustomerPage'
import Login from './pages/recyclePage/VendorSignin'
import Signup from './pages/recyclePage/vendorSignUp'

import WasteSection from './pages/customerDashboard/Waste'



function App() {
 
  const router = createBrowserRouter([
    {
      path: "/d",
      element: <DirectionPage/>
    },
    {
      path: "/signin",
      element: <LoginPage />
    },
    {
      path: "/signup",
      element: <SignupPage/>
    },
    {
      path: "/Landing",
      element: <LandingLayout />
    },
    {
      path: "/who-we-are",
      element: <AboutUsPage />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/",
      element: <Signup />
    },
  
     {
      path:"/customerDashboard",
      element:<CustDushboardLayout/>,
      children:[
     
      {
      path: "blogs",
      element: <BlogsPage />
      },
      {
        path: "products",
        element: <CustomerPage />
      },
      {
        path: "pickup",
        element: <WasteSection />
      },
      ]
    },

    // {path:"/editform/:id",
    //   element:<EditProductForm/>
    // },
  
    // {path:"/single/:advertid",
    //   element:<SingleProduct/>
    // },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App

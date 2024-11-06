
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/SigninPage/SignIn'
import SignupPage from './pages/signupPage/Signup'
import LandingLayout from './layout/LandingLayout'
import CustDushboardLayout from './layout/CustDushboardLayout'
import BlogsPage from './pages/blogs/BlogsPage'
import AboutUsPage from './pages/WhoWeAre'
import DirectionPage from './pages/directionPage/Direction'



function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
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
      path:"/customerDashboard",
      element:<CustDushboardLayout/>,
      children:[
     
      {
      path: "blogs",
      element: <BlogsPage />
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

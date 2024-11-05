
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/SigninPage/SignIn'
import SignupPage from './pages/signupPage/Signup'
import LandingLayout from './layout/LandingLayout'
import CustDushboardLayout from './layout/CustDushboardLayout'
import BlogsPage from './pages/blogs/BlogsPage'



function App() {
 
  const router = createBrowserRouter([
    {
      path: "/signin",
      element: <LoginPage />
    },
    {
      path: "/signup",
      element: <SignupPage/>
    },
    {
      path: "/",
      element: <LandingLayout />
    },
     {
      path:"/customerDashboard",
      element:<CustDushboardLayout/>,
      children:[
      //  { index: true,
      //   element:<VendorView />,
      //  }
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

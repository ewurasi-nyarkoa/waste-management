
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { apiSignup } from '../../services/Auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SignupPage() {
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  
    const handleSubmit = async (event) => {
      event.preventDefault() // prevent the page from reloading
   
        setLoading(true)
        //prepare data to be sent to backend
        const formData = new FormData (event.target) // takes the data from the form
        const contactNumber = formData.get("contactNumber")
         const name = formData.get("name")
         const email = formData.get("email")
         const confirmpass = formData.get("confirmpass")
         const password = formData.get("password")

         console.log(name)
        //  const role = formData.get("role") //we do not need role for now since only vendors are signing in  or registering
  
         const payload = {name:name,email:email, password:password,contactNumber:contactNumber, role:"user"}
  
  
         //check if pass match
         if(!name || !email){
          alert("Please make sure all fields are filled")
          setLoading(false)
          
         }else if(password !== confirmpass){
          alert("passwords does not match. Try Again!")
          setLoading(false)
         }else{
  
          try{
            const response = await apiSignup(payload)
            console.log(response.data)
            setLoading(false)
            navigate ("/signin")
          }catch(err){
            console.log("error: ", err)
            setLoading(false)
            alert("An error occurred please try again")
            return;
          }      
        
         
         }
      
    }
  return (
    <div className="min-h-screen flex flex-col items-center bg-black dark:bg-gray-900 p-6">
      
     
      <div className="relative w-full max-w-md h-48 flex items-center justify-center mb-6">
        <img
          src="src/assets/images/image2.png" 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        {/* <h1 className="relative text-3xl font-bold text-green-500">Sign Up</h1> */}
      </div>

     
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center text-green-500">
          Waste Management Signup
        </h1>
        <p className="text-center text-gray-400 mb-4">
          Join us in managing waste responsibly.
        </p>

        <form onSubmit={handleSubmit}
        className="space-y-6">
          <div>
            <label className="block text-gray-400">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 mt-1 text-gray-200 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-400">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 mt-1 text-gray-200 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="relative">
            <label className="block text-gray-400">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full p-3 mt-1 text-gray-200 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-500"
            />
            <span className="absolute right-4 top-9 cursor-pointer text-gray-500 dark:text-gray-400">
              <FaEye />
            </span>
            <small className="block mt-1 text-xs text-gray-500">
              Password legnth must be atleast 6 characters
            </small>
          </div>
          <div>
            <label className="block text-gray-400">Confirm Password</label>
            <input
              type="password"
              name="confirmpass"
              className="w-full p-3 mt-1 text-gray-200 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-500"
            />
          </div>
           <div>
            <label className="block text-gray-400"> Contact </label>
            <input
              type="number"
              name="contactNumber"
              required
              className="w-full p-3 mt-1 text-gray-200 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-500"
            />
          </div> 
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-200"
          >
            {loading ? "Loading....":"Signup"}
          </button>
        </form>

        <div className="text-center mt-4 text-gray-400">
          <p>Already have an account?{' '}</p>
          <Link to="/signin"
           className="text-green-500 hover:underline">
        
              Sign in
          
         </Link>
          <p>
            By signing up, you agree to our{' '}
            <a href="/terms" className="text-green-500 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-green-500 hover:underline">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}

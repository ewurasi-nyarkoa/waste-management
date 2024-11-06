
import image1 from '../../assets/images/image15.png';
import { apiSignup } from '../../services/Auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'

function Signup() {
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
    
           const payload = {name:name,email:email, password:password,contactNumber:contactNumber, role:"vendor"}
    
    
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
              navigate ("/login")
            }catch(err){
              console.log("error: ", err)
              setLoading(false)
              alert("An error occurred please try again")
              return;
            }      
          
           
           }
        
      }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg w-full max-w-4xl">
        
       
        <div className="hidden md:block w-1/2 p-6">
          <img src={image1} alt="Signup" 
          className="w-full h-auto rounded-lg" />
        </div>
        
     
        <div className='w-full md:w-1/2 p-8'> 
            <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name = "name"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name = "email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name = "password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name = "confirmpass"
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="number"
            placeholder="Enter your conatact"
            name ="contactNumber"
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
           {loading ? "Loading": "signup"}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account? <Link to="/login"
             className="text-green-500 hover:underline">Sign in</Link>
        </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

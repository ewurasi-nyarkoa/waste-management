import { IoEarthOutline } from "react-icons/io5"; 
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { FaFacebookF, FaGoogle } from "react-icons/fa";
// import image1 from 'assets/images/signinimg.png';

function LoginPage() {
  return (
    <div className="flex min-h-screen relative flex-col md:flex-row">
     
    
      <div className="w-full md:w-1/2 h-full overflow-hidden relative">
        <img src="src/assets/images/image1.png" alt="Sign In" className="relative w-full h-full object-cover rounded-r-lg" />

        <div className="absolute top-1/4 left-1/4 text-white">
          <h1 className="text-3xl font-bold text-center mb-4 text-green border w-12 h-12 rounded-md bg-green-400">W</h1>
          <p className="flex items-center text-lg">
            Let’s change our earth <IoEarthOutline className="ml-2" />
          </p>
        </div>

        <div className="absolute top-20 left-3 w-6 h-6 rounded-full bg-green-400"></div>
        <div className="absolute top-40 right-14 w-6 h-6 rounded-full bg-green-400"></div> 
       
      </div>

    
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50 p-8">
        <h1 className="text-2xl font-bold mb-2">WASTEY</h1>
        <p className="text-lg mb-6">Login to the Portal</p>
        
        <form className="p-8 rounded-lg w-full max-w-sm">
          <div className="mb-4">
            <div className="flex items-center bg-gray-100 rounded-md p-2">
              <AiOutlineMail className="text-gray-500 h-5 w-5 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-100 w-full focus:outline-none px-2 text-gray-700"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center bg-gray-100 rounded-md p-2">
              <AiOutlineLock className="text-gray-500 h-5 w-5 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="bg-gray-100 w-full focus:outline-none px-2 text-gray-700"
              />
            </div>
          </div>
          <div className="absolute bottom-[37rem] right-20 w-8 h-8 rounded-full bg-white"></div>
          <div className="text-center text-gray-500 mt-4">OR</div>
          
          <div className="flex justify-between mt-4">
            <button className="bg-gray-100 flex-1 rounded-md p-2 flex justify-center items-center mx-2">
              <FaGoogle className="h-5 w-5 text-green-600" /> 
            </button>
            <button className="bg-gray-100 flex-1 rounded-md p-2 flex justify-center items-center mx-2">
              <FaFacebookF className="h-5 w-5 text-green-600" /> 
            </button>
          </div>

          <p className="mt-4 text-center text-sm">
            Not a user yet? <a href="#" className="text-green-500">SignUp</a>
          </p>
        </form>
        
        <footer className="text-center text-gray-400 mt-24 text-xs">
          © SWK corporate 
        </footer>
      </div>
    </div>
  );
}

export default LoginPage;

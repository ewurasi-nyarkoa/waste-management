import { Link } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
// import { apiDeleteProduct } from './services/product';

const VendorApiGet = ({ id, title, image, Description,price ,}) => {
    // const handleDelete = async (id) => {
    //     if (confirm('Are you sure you want to delete')) {
    //       try {
    //       const response = await apiDeleteProduct(id);
    //       console.log("Ad deleted:", response.data);
       
    //     } catch (error) {
    //       console.error("Error deleting ad:", error.response?.data || error.message);
    //     }
    //     } else {
    //       // Do nothing!
    //       console.log('no');
    //     }
        
    //   };





  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md p-4 text-center rounded-md w-64 h-auto flex flex-col justify-between">
      
     
      <div className="w-full h-36 mb-2">
        <img  src={`https://savefiles.org/${image}?shareable_link=473`} alt={title} className="w-full h-full object-cover rounded-md" />
      </div>

     
      <p className="text-gray-500 dark:text-gray-400 lowercase text-xs">{title}</p>
      <h2 className="text-md font-semibold ">{title}</h2>

    
      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1 mb-2"> {Description}</p>
      {/* <p className="text-gray-600 dark:text-gray-400 text-xs">Created: {new Date(createdAt).toLocaleDateString()}</p>
      <p className="text-gray-600 dark:text-gray-400 text-xs mb-2">Updated: {new Date(updatedAt).toLocaleDateString()}</p> */}

   
      <p className="text-lg font-bold text-primary">${price}</p>

     
      <div className="flex justify-between mt-4">
        <button className="text-green-600 font-bold py-1 px-2 flex items-center justify-center w-[40%] bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
          {/* <Link to={`/editform/${id}`}> */}
            <FaRegEdit className="mr-1" /> Edit
          {/* </Link> */}
        </button>
        <button 
        //   onClick={() => handleDelete(id)} 
          className="text-red-600 font-bold py-1 px-2 flex items-center justify-center w-[40%] bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
          <MdDeleteForever className="mr-1" /> Delete
        </button>
      </div>
    </div>
  );
};

export default VendorApiGet;

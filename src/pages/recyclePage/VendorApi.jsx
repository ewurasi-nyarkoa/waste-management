import { Link } from 'react-router-dom';
import { FaRegEdit, FaTrashAlt, FaEye, FaBox, FaClock } from 'react-icons/fa';
import Swal from 'sweetalert2';
// import { apiDeleteProduct } from './services/product';

const VendorApiGet = ({ id, title, image, description, price }) => {
  // const handleDelete = async (id) => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#10B981', // green
  //     cancelButtonColor: '#EF4444',  // red
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'Cancel'
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       try {
  //         const response = await apiDeleteProduct(id);
  //         Swal.fire(
  //           'Deleted!',
  //           'Product has been deleted.',
  //           'success'
  //         );
  //         // You might want to trigger a refresh of the products list here
  //       } catch (error) {
  //         Swal.fire(
  //           'Error!',
  //           'Failed to delete product.',
  //           'error'
  //         );
  //       }
  //     }
  //   });
  // };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden
                    transform hover:-translate-y-1 transition-all duration-300">
      {/* Image Container */}
      <div className="relative group">
        <img 
          src={`https://savefiles.org/${image}?shareable_link=473`}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 
                     group-hover:scale-105"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300
                        flex items-center justify-center">
          <Link 
            to={`/product/${id}`}
            className="bg-white/90 text-gray-800 p-2 rounded-full 
                     transform -translate-y-2 group-hover:translate-y-0 
                     transition-all duration-300"
          >
            <FaEye className="text-xl" />
          </Link>
        </div> */}
      </div>

      {/* Content Container */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white 
                       line-clamp-1 hover:line-clamp-none">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
          {description || 'No description available'}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-green-600 dark:text-green-400">
            GH₵ {price || '0.00'}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
          <Link 
            // to={`/editform/${id}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2
                     bg-green-50 dark:bg-green-900/30 
                     text-green-600 dark:text-green-400
                     rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50
                     transition-colors duration-300"
          >
            <FaRegEdit />
            <span className="text-sm font-medium">Edit</span>
          </Link>

          <button 
            // onClick={() => handleDelete(id)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2
                     bg-red-50 dark:bg-red-900/30 
                     text-red-600 dark:text-red-400
                     rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50
                     transition-colors duration-300"
          >
            <FaTrashAlt />
            <span className="text-sm font-medium">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorApiGet;

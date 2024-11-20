import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ApiGet = ({ id, title, inventory, image, description, price }) => {
  const navigate = useNavigate();
  console.log('Props received in ApiGet:', { id, title, inventory, image, description, price }); // Debug log
  const productId = id || 'no-id';
  

  // const handleViewDetails = () => {
  //   navigate(`../product/${id}`, { replace: true });
  // };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl 
                    transform hover:-translate-y-1 transition-all duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-xl h-56">
        <img 
          src={`https://savefiles.org/${image}?shareable_link=473`} 
          alt={title} 
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
        />
        {/* Stock Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            inventory > 0 
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {inventory > 0 ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white 
                       line-clamp-1 hover:line-clamp-none">
          {title}
        </h2>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600 dark:text-green-400">
            GH₵ {price || '0.00'}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {inventory} units left
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 
                      hover:line-clamp-none transition-all duration-300">
          {description || 'No description available'}
        </p>

        {/* Action Button */}
        <Link 
        to={`/customerDashboard/product/${id}`}
        className="block w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-lg
                 hover:bg-green-700 transition-colors duration-300
                 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
                 text-center" // Added text-center for proper alignment
      >
        View Details
      </Link>
      </div>
    </div>
  );
};

export default ApiGet;

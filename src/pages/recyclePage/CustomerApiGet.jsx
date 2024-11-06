

const ApiGet = ({ title, inventory, image, createdAt, updatedAt }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md p-4 text-center">
      <img 
        src={`https://savefiles.org/${image}?shareable_link=473`} 
        alt={title} 
        className="mb-4 w-full h-48 object-cover" 
      />
      <p className="text-gray-500 lowercase text-sm mb-2">{inventory > 0 ? 'In Stock' : 'Out of Stock'}</p>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2 mb-4">Created: {new Date(createdAt).toLocaleDateString()}</p>
      <p className="text-gray-600 dark:text-gray-400 mb-4">Updated: {new Date(updatedAt).toLocaleDateString()}</p>
      {/* You can also add a price or inventory number if needed */}
    </div>
  );
};

export default ApiGet;

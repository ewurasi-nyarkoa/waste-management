

import React from 'react';

const WasteCollection = ({ collection }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold">Waste Collection Details</h3>
      <div className="mt-2">
        <p><strong>User ID:</strong> {collection.user}</p>
        <p><strong>Pickup Date:</strong> {new Date(collection.pickupDate).toLocaleDateString()}</p>
        <p><strong>Location:</strong> {collection.location}</p>
        <p>
          <strong>Status:</strong> 
          <span className={`ml-2 ${collection.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>
            {collection.status}
          </span>
        </p>
      </div>
    </div>
  );
};

export default WasteCollection;

import React from 'react';
import { FaCheckCircle, FaClock, FaInfoCircle, FaShareAlt, FaTrash } from 'react-icons/fa';

const WasteCollection = ({ collection }) => {
  return (
    <div className="overflow-auto bg-white rounded-lg shadow-md p-4 mb-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="text-left text-gray-700 bg-gray-100 border-b">
            <th className="py-2 px-4">User ID</th>
            <th className="py-2 px-4">Pickup Date</th>
            <th className="py-2 px-4">Location</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4 text-center">Quick Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-800 border-b">
            <td className="py-2 px-4">{collection.user}</td>
            <td className="py-2 px-4">{new Date(collection.pickupDate).toLocaleDateString()}</td>
            <td className="py-2 px-4">{collection.location}</td>
            <td className="py-2 px-4">
              <span
                className={`inline-flex items-center px-2 py-1 text-sm font-semibold rounded-full ${
                  collection.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                }`}
              >
                {collection.status === 'Completed' ? (
                  <FaCheckCircle className="mr-1" />
                ) : (
                  <FaClock className="mr-1" />
                )}
                {collection.status}
              </span>
            </td>
            <td className="py-2 px-4 text-center">
              <div className="flex justify-center space-x-2 text-gray-500">
                <FaInfoCircle className="cursor-pointer hover:text-blue-600" />
                <FaShareAlt className="cursor-pointer hover:text-blue-600" />
                <FaTrash className="cursor-pointer hover:text-red-600" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WasteCollection;

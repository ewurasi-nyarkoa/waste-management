// src/App.jsx

import React from 'react';
import WasteCollectionList from '../customerDashboard/wasteList';
import DashboardStats from '../recyclePage/StatusTracking';

const WasteSection = () => {
  // Sample data for testing
  const wasteCollections = [
    {
      _id: '1',
      user: '60d5ec49d4d9c0000a123456', // Example User ID
      pickupDate: '2024-11-10T00:00:00Z',
      location: '123 Main St, Cityville',
      status: 'Scheduled'
    },
    {
      _id: '2',
      user: '60d5ec49d4d9c0000a654321', // Example User ID
      pickupDate: '2024-11-15T00:00:00Z',
      location: '456 Elm St, Townsville',
      status: 'Completed'
    }
  ];

  return (
    <div >
      <DashboardStats />
      <WasteCollectionList collections={wasteCollections} />
    </div>
  );
};

export default WasteSection;

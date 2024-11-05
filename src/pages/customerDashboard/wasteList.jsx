// src/components/WasteCollectionList.jsx

import React from 'react';
import WasteCollection from '../customerDashboard/WasteCollection';

const WasteCollectionList = ({ collections }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Waste Collection Records</h2>
      {collections.length === 0 ? (
        <p>No waste collection records available.</p>
      ) : (
        collections.map((collection) => (
          <WasteCollection key={collection._id} collection={collection} />
        ))
      )}
    </div>
  );
};

export default WasteCollectionList;

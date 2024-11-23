import React, { useEffect, useState } from 'react';
import { apiGetVendorsProducts } from '../../services/product';
import VendorApiGet from "../recyclePage/VendorApi";
import { Link } from 'react-router-dom';

const VendorView = () => {
  const [Adverts, setAdverts] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

 const fetchData = async () => {
    try {
      setLoading(true);
      const response = await apiGetVendorsProducts();
      
      console.log("API Response:", response);
      
      if (response.data && Array.isArray(response.data)) {
        setAdverts(response.data);
      } else {
        console.log("No products found or invalid data format");
        setAdverts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to fetch products'
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    );
  }

 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> 
      {Adverts.length > 0 ? (
        Adverts.map((advert) => (
          <VendorApiGet
            key={advert.id} 
            id={advert.id} 
            title={advert.title}
            description={advert.description}
            category={advert.category}
            image={advert.image}
            price={advert.price}
            // onDelete={handleProductDelete}  
            
          />
        ))
      ) : (
        <p>No products available</p>
        
      )}
     
    </div>
  );
};  

export default VendorView;
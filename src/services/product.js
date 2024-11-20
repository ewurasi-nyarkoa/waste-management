import { apiClient } from "./config";
import axios from 'axios';

// Get all products
export const apiGetProducts = async () => {
  return apiClient.get("/products");
};
// Add product

export const apiAddProducts = async (formData) => {
  return apiClient.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data", 
    },
  });
};
export const apiAddSchedule = async (formData) => {
  const token = localStorage.getItem('token'); 

  if (!token) {
    throw new Error('Authorization token is missing. Please log in again.');
  }

  return apiClient.post("/schedule", formData, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
};
export const apiGetScheduledProducts = async () => {
  return apiClient.get("/history");
};

export const apiGetScheduledCounts = async () => {
  return apiClient.get("/schedules/count/");
};



export const apiGetSingleScheduledProducts = async (id) => {
  return apiClient.get(`/schedule/${id}`);
};
export const apiGetProfile = async () => {
  return apiClient.get("/users/profile");
};
export const apiSendMessage = async (messageData) => {
  return apiClient.post("/send", messageData);
};

export const apiEditProduct = async (id, formData) => {
  return apiClient.patch(`schedules/${id}`, formData);
};
export const apiEditScheduledProduct = async (id, formData) => {
  return apiClient.patch(`/${id}/status`, formData);
};
// Get a single product by ID
export const apiGetSingleProduct = async (id) => {
  try {
    const token = localStorage.getItem('token');
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await apiClient.get(`/products/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    return response;
  } catch (error) {
    // Handle specific error cases
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      switch (error.response.status) {
        case 404:
          throw new Error('Product not found');
        case 401:
          throw new Error('Unauthorized access');
        case 403:
          throw new Error('Forbidden access');
        default:
          throw new Error('Failed to fetch product details');
      }
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response from server');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error('Error setting up request');
    }
  }
};
export const apiEditRecycledProduct = async (id, formData) => {
  return apiClient.patch(`/products/${id}`, formData);
};

// Delete product
export const apiDeleteScheduledTicket = async (id) => {
  return apiClient.delete(`/schedules/${id}`);
};
// Delete product
export const apiDeleteTicket = async (id) => {
  return apiClient.delete(`/products/${id}`);
};



// // Get a single product by ID
// export const apiGetSingleProduct = async (id) => {
//   return apiClient.get(`/adverts/${id}`);
// };

// // Edit product

// export const apiEditProduct = async (id, formData) => {
//   return apiClient.patch(`/adverts/${id}`, formData);
// };

// // Delete product
// export const apiDeleteProduct = async (id) => {
//   return apiClient.delete(`/adverts/${id}`);
// };
// export const apiGetVendorProducts = async () => {
//   return apiClient.get("/users/me/adverts");
// };
// export const apiGetVendorProfile = async () => {
//   return apiClient.get("/users/me");
// };
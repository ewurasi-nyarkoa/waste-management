import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { apiEditProduct } from '../../services/product';
import Swal from 'sweetalert2';

const WasteEditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    pickupDate: new Date(),  // Changed from date to pickupDate
    location: ''
  });

  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      pickupDate: date  // Changed from date to pickupDate
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitData = {
        ...formData,
        pickupDate: formData.pickupDate.toISOString(),  // Changed from date to pickupDate
        // status: 'updated'  // Include status if needed
      };
      
      console.log('Submitting data:', submitData); // Debug log
      await apiEditProduct(id, submitData);
      
      await Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Schedule updated successfully',
        confirmButtonColor: '#10B981'
      });
      
      navigate(-1);
    } catch (error) {
      console.error('Error:', error); // Debug log
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Failed to update schedule',
        confirmButtonColor: '#EF4444'
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Edit Waste Schedule</h1>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Pickup Date
            <DatePicker
              selected={formData.pickupDate}  // Changed from date to pickupDate
              onChange={handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full p-2 border rounded"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Location
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter pickup location"
              required
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Update Schedule
        </button>
      </form>
    </div>
  );
};

export default WasteEditPage;
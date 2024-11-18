import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import { apiAddSchedule } from '../../services/product';

const WasteSchedulePage = () => {
  const [pickupDate, setPickupDate] = useState(null);
  const [location, setLocation] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const scheduleData = {
      pickupDate: pickupDate ? pickupDate.toISOString() : null,
      location: location,
    };
  
    try {
      const response = await apiAddSchedule(scheduleData);
      console.log('Schedule submitted:', response.data);
  
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your waste pickup schedule has been submitted!',
      });
  
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error submitting schedule:', error);
      console.log('Error response:', error.response); 
  
      let errorMessage = 'There was an error submitting your schedule. Please try again.';
      if (error.message === 'Authorization token is missing. Please log in again.') {
        errorMessage = 'Your session has expired. Please log in again.';
      } else if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
      }
  
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: errorMessage,
      });
    }
  };
  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Schedule Waste Pickup
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal animation: fade and scale */}
          <div
            className="bg-white w-full max-w-md rounded-lg shadow-md p-6 relative transform transition-all duration-300 ease-in-out scale-95 opacity-0"
            style={{ animation: 'fadeInScale 0.3s forwards' }}
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Schedule Waste Pickup</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Pickup Date</label>
                <DatePicker
                  selected={pickupDate}
                  onChange={(date) => setPickupDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter location"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Submit Schedule
              </button>
            </form>

            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Keyframe animation for fade-in and scale-up */
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default WasteSchedulePage;

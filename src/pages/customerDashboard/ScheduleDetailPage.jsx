import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetSingleScheduledProducts, apiGetProfile } from '../../services/product';
import { FaCalendar, FaMapMarkerAlt, FaBox, FaClock, FaUser, FaInfoCircle, FaExclamationCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ScheduleDetailPage = () => {
  const { id } = useParams();
  const [schedule, setSchedule] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [scheduleResponse, profileResponse] = await Promise.all([
          apiGetSingleScheduledProducts(id),
          apiGetProfile()
        ]);
        
        setSchedule(scheduleResponse.data);
        setUserProfile(profileResponse.data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message || 'Failed to fetch details',
          confirmButtonColor: '#10B981'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!schedule) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-gray-600">Schedule not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-green-500 text-white p-6">
          <h1 className="text-2xl font-bold mb-2">Scheduled Pickup Details</h1>
          <div className="flex items-center gap-2">
            <FaCalendar />
            <span>
              Scheduled for: {new Date(schedule.pickupDate).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-6">
          {/* Location Section */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-500" />
              Pickup Location
            </h2>
            <p className="text-gray-600">
              {schedule.location}
            </p>
          </div>

          {/* Waste Details Section */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <FaBox className="text-green-500" />
              Waste Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Waste Type</p>
                <p className="font-medium text-gray-800">
                  {schedule?.wasteType || <span className="text-gray-400 italic flex items-center gap-1">
                    <FaInfoCircle className="text-gray-300" />
                    Paper
                  </span>}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Quantity</p>
                <p className="font-medium text-gray-800">
                  {schedule?.quantity ? 
                    `${schedule.quantity} kg` : 
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                      40
                    </span>
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Status Section */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <FaClock className="text-green-500" />
              Status
            </h2>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              schedule.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
              schedule.status === 'completed' ? 'bg-green-100 text-green-800' :
              'bg-red-100 text-red-800'
            }`}>
              {schedule.status.charAt(0).toUpperCase() + schedule.status.slice(1)}
            </span>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <FaUser className="text-green-500" />
              Contact Information
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Name:</span> {userProfile?.name || 'Not available'}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> {userProfile?.contactNumber || 'Not available'}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> {userProfile?.email || 'Not available'}
              </p>
            </div>
          </div>

          {/* Additional Notes */}
          {schedule.notes && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Additional Notes</h2>
              <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">
                {schedule.notes}
              </p>
            </div>
          )}
        </div>

        {/* Footer Section */}
        <div className="bg-gray-50 p-6">
          <p className="text-sm text-gray-500 text-center">
            Schedule ID: {schedule._id}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDetailPage;
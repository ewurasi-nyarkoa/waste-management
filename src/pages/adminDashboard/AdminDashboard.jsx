import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiCalendar, FiFileMinus, FiFileText, FiShare2, FiTrash2, FiUser } from 'react-icons/fi';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { TbRefreshAlert } from 'react-icons/tb';
import { PiSunLight } from 'react-icons/pi';
import { RiInformationLine } from 'react-icons/ri';
import { IoEllipse } from 'react-icons/io5';
import { apiGetScheduledProducts, apiEditScheduledProduct } from '../../services/product';
import Swal from 'sweetalert2';
import AdminDashboardStats from '../recyclePage/AdminStats';

const AdminDashboard = () => {
  const [tickets, setTickets] = useState([]);

  // Fetch all tickets
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await apiGetScheduledProducts();
        setTickets(response.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  // Handle status change
  const handleStatusChange = async (ticketId, newStatus) => {
    try {
      await Swal.fire({
        title: 'Change Status',
        text: `Are you sure you want to mark this ticket as ${newStatus}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#10B981',
        cancelButtonColor: '#EF4444',
        confirmButtonText: 'Yes, update it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await apiEditScheduledProduct(ticketId, { status: newStatus });
          // Refresh tickets after update
          const response = await apiGetScheduledProducts();
          setTickets(response.data);
          
          Swal.fire(
            'Updated!',
            'Ticket status has been updated.',
            'success'
          );
        }
      });
    } catch (error) {
      Swal.fire(
        'Error!',
        'Failed to update ticket status.',
        'error'
      );
    }
  };

  return (
    <>
      <AdminDashboardStats />
      
      <div className="bg-white rounded-lg shadow p-2 sm:p-4 overflow-hidden mt-4 sm:mt-10">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 px-2">
          Admin Dashboard - Ticket Management
        </h3>

        {/* Mobile View */}
        <div className="block lg:hidden">
          {tickets.map((ticket) => (
            <div key={ticket._id} 
                 className="border rounded-lg p-4 mb-4 hover:bg-gray-50 transition-colors">
              {/* Date and ID */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <FiCalendar className="text-green-500" />
                    {new Date(ticket.pickupDate).toLocaleDateString() || 'N/A'}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    ID: {ticket._id || 'N/A'}
                  </div>
                </div>
                <span className={`flex items-center px-3 py-1 gap-2 rounded-full text-sm
                  ${ticket.status === 'completed'
                    ? 'bg-[#78E0D4] text-[#2C4229]'
                    : 'bg-[#FFD70029] text-[#FFD700]'}`}>
                  <IoEllipse className="text-xs" />
                  {ticket.status || 'N/A'}
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <MdOutlinePeopleAlt className="text-green-500" />
                {ticket.location || 'N/A'}
              </div>

              {/* User */}
              <div className="flex items-center gap-2 mb-4">
                <FaUserCircle className="text-2xl text-[#FFFFFF] rounded-full border-[2px]" />
                <span className="text-sm">{ticket.user || 'Not assigned'}</span>
              </div>

              {/* Action Button */}
              <div className="flex justify-end pt-2 border-t">
                <button 
                  onClick={() => handleStatusChange(ticket._id, 'completed')}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    ticket.status === 'completed' 
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                  disabled={ticket.status === 'completed'}
                >
                  Mark Complete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4">
                  <span className="flex items-center space-x-2">
                    <FiCalendar className="text-green-500" />
                    <span className="text-[#344054]">Pickup Date</span>
                  </span>
                </th>
                <th className="py-2 px-4">
                  <span className="flex items-center space-x-2">
                    <FiFileMinus className="text-green-500" />
                    <span className="text-[#344054]">Id</span>
                  </span>
                </th>
                <th className="py-2 px-4">
                  <span className="flex items-center space-x-2">
                    <MdOutlinePeopleAlt className="text-green-500" />
                    <span className="text-[#344054]">Location</span>
                  </span>
                </th>
                <th className="py-2 px-4">
                  <span className="flex items-center space-x-2">
                    <FiUser className="text-green-500" />
                    <span className="text-[#344054]">User</span>
                  </span>
                </th>
                <th className="py-2 px-4">
                  <span className="flex items-center space-x-2">
                    <PiSunLight className="text-green-500" />
                    <span className="text-[#344054]">Status</span>
                  </span>
                </th>
                <th className="py-2 px-4">
                  <span className="flex items-center space-x-2">
                    <TbRefreshAlert className="text-green-500" />
                    <span className="text-[#344054]">Actions</span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="text-[#475467]">
              {tickets.map((ticket) => (
                <tr key={ticket._id} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4">
                    {new Date(ticket.pickupDate).toLocaleDateString() || 'N/A'}
                  </td>
                  <td className="py-2 px-4">{ticket._id || 'N/A'}</td>
                  <td className="py-2 px-4">{ticket.location || 'N/A'}</td>
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-2">
                      <FaUserCircle className="text-3xl text-[#FFFFFF] rounded-full border-[4px]" />
                      {ticket.user || 'Not assigned'}
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    <span className={`flex items-center px-4 gap-2 rounded-full w-fit py-1
                      ${ticket.status === 'completed'
                        ? 'bg-[#78E0D4] text-[#2C4229]'
                        : 'bg-[#FFD70029] text-[#FFD700]'}`}>
                      <IoEllipse />
                      {ticket.status || 'N/A'}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <button 
                      onClick={() => handleStatusChange(ticket._id, 'completed')}
                      className={`px-4 py-2 rounded-lg ${
                        ticket.status === 'completed' 
                          ? 'bg-gray-200 cursor-not-allowed' 
                          : 'bg-green-500 text-white hover:bg-green-600'
                      }`}
                      disabled={ticket.status === 'completed'}
                    >
                      Mark Complete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No Tickets Message */}
        {tickets.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No tickets available
          </div>
        )}
      </div>
    </>
  );
};

export default AdminDashboard;
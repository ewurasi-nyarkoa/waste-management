import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiCalendar, FiFileMinus, FiFileText, FiShare2, FiTrash2, FiUser } from 'react-icons/fi';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { TbRefreshAlert } from 'react-icons/tb';
import { PiSunLight } from 'react-icons/pi';
import { RiInformationLine } from 'react-icons/ri';
import { IoEllipse } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; 

import { apiDeleteScheduledTicket, apiGetUsersScheduledProducts } from '../../services/product';

const WasteCollectionList = () => {
  const [tickets, setTickets] = useState([]);
  const [deletingId, setDeletingId] = useState(null);

  // Fetch data from the backend
  useEffect(() => {
    const fetchTickets = async () => {
      console.log("Fetching tickets..."); 
      try {
        const response = await apiGetUsersScheduledProducts();
        // Debug logs
        console.log("Raw API Response:", response);
        console.log("Response data type:", typeof response.data);
        console.log("Response data:", response.data);
        
        // Check if response.data exists and is an array
        if (response.data && Array.isArray(response.data)) {
          setTickets(response.data);
        } else {
          console.error("Invalid data format received:", response.data);
          setTickets([]); // Set empty array as fallback
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
        if (error.response) {
          console.error("Error response:", error.response);
        }
      }
    };

    fetchTickets();
  }, []);

  // Debug log for state updates
  useEffect(() => {
    console.log("Tickets state updated:", tickets);
    console.log("Tickets length:", tickets.length);
  }, [tickets]);

  const handleEditTicket = (id) => {
    navigate(`/waste/edit/${id}`);
  };
  const handleDeleteTicket = async (id) => {
    console.log('Delete clicked for ID:', id);
    // Prevent default link behavior
    // e.preventDefault();
    
    // Show confirmation dialog
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#10B981',
      cancelButtonColor: '#EF4444',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    });

    if (result.isConfirmed) {
      setDeletingId(id);
      try {
        await apiDeleteScheduledTicket(id);
        
        // Update local state
        setTickets(prevTickets => 
          prevTickets.filter(ticket => ticket._id !== id)
        );

        // Show success message
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Schedule has been deleted.',
          confirmButtonColor: '#10B981',
          timer: 1500
        });

      } catch (error) {
        console.error('Delete error:', error);
        // Show error message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message || 'Failed to delete schedule',
          confirmButtonColor: '#10B981'
        });
      } finally {
        setDeletingId(null);
      }
    }
  };



  return (
    <div className="bg-white rounded-lg shadow p-4 overflow-x-auto mt-10">
      <h3 className="text-lg font-semibold mb-4">Ticket Management</h3>
      <table className="w-full min-w-[600px] text-left">
        <thead>
        <tr className="border-b">
  <th className="py-2">
    <span className="flex items-center space-x-2">
      <FiCalendar className="text-green-500" />
      <span className="text-[#344054]">Date</span>
    </span>
  </th>
  <th className="py-2">
    <span className="flex items-center space-x-2">
      <FiFileMinus className="text-green-500" />
      <span className="text-[#344054]">Id</span>
    </span>
  </th>
  <th className="py-2">
    <span className="flex items-center space-x-2">
      <MdOutlinePeopleAlt className="text-green-500" />
      <span className="text-[#344054]">Location</span>
    </span>
  </th>
  {/* <th className="py-2">
    <span className="flex items-center space-x-2">
      <FiUser className="text-green-500" />
      <span className="text-[#344054]">Assigned</span>
    </span>
  </th> */}
  <th className="py-2">
    <span className="flex items-center space-x-2">
      <PiSunLight className="text-green-500" />
      <span className="text-[#344054]">Status</span>
    </span>
  </th>
  <th className="py-2">
    <span className="flex items-center space-x-2">
      <TbRefreshAlert className="text-green-500" />
      <span className="text-[#344054]">Quick Actions</span>
    </span>
  </th>
</tr>
        </thead>
        <tbody className="text-[#475467]">
          {tickets.map((ticket) => (
            <tr key={ticket._id} className="border-t hover:bg-gray-50">
              <td className="py-2">{new Date(ticket.pickupDate).toLocaleDateString() || 'N/A'}</td>
              <td className="py-2">{ticket._id || 'N/A'}</td>
              <td className="py-2">{ticket.location || 'N/A'}</td>
              {/* <td className="py-2 flex items-center gap-2">
                <FaUserCircle className="text-3xl text-[#FFFFFF] w-10 h-10 rounded-full border-[4px]" />
                {ticket.user || 'Not assigned'}
              </td> */}
              <td className="py-2">
                <span
                  className={`flex items-center px-4 gap-2 rounded-full w-[142px] h-8 ${
                    ticket.status === 'In progress'
                      ? 'bg-[#FFD70029] text-[#FFD700]'
                      : 'bg-[#78E0D4] text-[#2C4229]'
                  }`}
                >
                  <IoEllipse />
                  {ticket.status || 'N/A'}
                </span>
              </td>
              <td className="py-2 flex space-x-2 text-[#101828] text-center ">
                <Link to={`/customerDashboard/schedule/${ticket._id}`}>
                  <RiInformationLine />
                </Link>
                {/* <FiShare2 /> */}
                <Link 
                  to= {`/schedule/${ticket._id}`}
                  className="hover:text-green-600 transition-colors duration-300"
                >
                  <FiFileText className="cursor-pointer" />
                </Link>
                <FiTrash2 
                  className={`cursor-pointer hover:text-red-500 w-4 h-4
                             ${deletingId === ticket._id ? 'opacity-50' : ''}
                             transition-all duration-200`}
                  onClick={() => handleDeleteTicket(ticket._id)}
                  style={{ cursor: deletingId === ticket._id ? 'wait' : 'pointer' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WasteCollectionList;

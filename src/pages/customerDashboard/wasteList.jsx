import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiCalendar, FiFileMinus, FiFileText, FiShare2, FiTrash2, FiUser } from 'react-icons/fi';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { TbRefreshAlert } from 'react-icons/tb';
import { PiSunLight } from 'react-icons/pi';
import { RiInformationLine } from 'react-icons/ri';
import { IoEllipse } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { apiGetScheduledProducts } from '../../services/product';

const WasteCollectionList = () => {
  const [tickets, setTickets] = useState([]);

  // Fetch data from the backend
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
  }, [location]);

  const handleEditTicket = (id) => {
    navigate(`/waste/edit/${id}`);
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
  <th className="py-2">
    <span className="flex items-center space-x-2">
      <FiUser className="text-green-500" />
      <span className="text-[#344054]">Assigned</span>
    </span>
  </th>
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
              <td className="py-2 flex items-center gap-2">
                <FaUserCircle className="text-3xl text-[#FFFFFF] w-10 h-10 rounded-full border-[4px]" />
                {ticket.user || 'Not assigned'}
              </td>
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
              <td className="py-2 flex space-x-2 text-[#101828]">
                <Link to={`/${ticket._id}/status`}>
                  <RiInformationLine />
                </Link>
                <FiShare2 />
                <Link 
                  to={`/customerDashboard/schedule/${ticket._id}`} 
                  className="hover:text-green-600 transition-colors duration-300"
                >
                  <FiFileText className="cursor-pointer" />
                </Link>
                <FiTrash2 />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WasteCollectionList;

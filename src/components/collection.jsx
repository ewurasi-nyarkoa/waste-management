import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { FiCalendar, FiFileMinus, FiFileText, FiShare2, FiTrash2, FiUser } from 'react-icons/fi';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { TbRefreshAlert } from 'react-icons/tb';
import { PiSunLight } from 'react-icons/pi';
import { RiInformationLine } from 'react-icons/ri';
import { IoEllipse } from 'react-icons/io5';

const collection = () => {
  return (
    <div>



<div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
<h3 className="text-lg font-semibold mb-4">Ticket Management</h3>
<table className="w-full min-w-[600px] text-left">
    <thead>
        <tr className="border-b">
            <th className="py-2"><FiCalendar className="text-green-500" /><span className="text-[#344054]">Date</span></th>
            <th className="py-2"><FiFileMinus className="text-green-500" /><span className="text-[#344054]">Code</span></th>
            <th className="py-2"><MdOutlinePeopleAlt className="text-green-500" /><span className="text-[#344054]">Department</span></th>
            <th className="py-2"><FiUser className="text-green-500" /><span className="text-[#344054]">Assigned</span></th>
            <th className="py-2"><PiSunLight className="text-green-500" /><span className="text-[#344054]">Status</span></th>
            <th className="py-2"><TbRefreshAlert className="text-green-500" /><span className="text-[#344054]">Quick Actions</span></th>
        </tr>
    </thead>
    <tbody className="text-[#475467]">
        {tickets.map((ticket, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
                <td className="py-2">{ticket.createdAt || 'N/A'}</td>
                <td className="py-2">{ticket.id || 'N/A'}</td>
                <td className="py-2">{ticket.department || 'N/A'}</td>
                <td className="py-2 flex items-center">
                    <FaUserCircle className="text-3xl text-[#FFFFFF] w-10 h-10 rounded-full border-[4px]" /> {ticket.user || 'Not assigned'}
                </td>
                <td className="py-2">
                    <span className={`flex items-center px-4 gap-2 rounded-full w-[142px] h-8 ${
                        ticket.status === 'In progress' ? 'bg-[#FFD70029] text-[#FFD700]' : 'bg-[#78E0D4] text-[#2C4229]'
                    }`}>
                        <IoEllipse />
                        {ticket.status || 'N/A'}
                    </span>
                </td>
                <td className="py-2 flex space-x-2 text-[#101828]">
                    <Link to="/edit" onClick={handleEditTicket}>
                        <RiInformationLine />
                    </Link>
                    <FiShare2 />
                    <FiFileText />
                    <FiTrash2 />
                </td>
            </tr>
        ))}
    </tbody>
</table>
</div>

      
    </div>
  )
}

export default collection

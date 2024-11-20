import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FiTrendingUp } from 'react-icons/fi';
import { apiGetScheduledProducts, apiGetScheduledCounts } from '../../services/product';

const StatBox = ({ title, value, percentage, icon, color, textColor, borderColor }) => (
  <div className={`p-6 rounded-lg shadow-md ${color} ${textColor}`}>
    <h3 className="text-lg font-semibold">{title}</h3>
    <div className="text-4xl font-bold my-2">{value}</div>
    <div className="flex items-center gap-1 text-sm">
      {percentage >= 0 ? (
        <FaArrowUp className="text-green-500" />
      ) : (
        <FaArrowDown className="text-red-500" />
      )}
      <span>{Math.abs(percentage)}%</span>
      <span>{percentage >= 0 ? "Compared to" : "versus"} last month</span>
    </div>
    <div className={`mt-4 ${borderColor}`}>
      {icon}
    </div>
  </div>
);

const DashboardStats = () => {
  const [ticketStats, setTicketStats] = useState({
    totalTickets: 0,
    completedTickets: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch total counts
        const countsResponse = await apiGetScheduledCounts();
        const historyResponse = await apiGetScheduledProducts();
        
        console.log('Counts Response:', countsResponse);
        console.log('History Response:', historyResponse);
        
        const completedTickets = historyResponse.data.filter(
          ticket => ticket.status === 'completed'
        ).length;
        
        const totalTickets = countsResponse.data?.count || countsResponse.data?.total || 0;

        setTicketStats({
          totalTickets: totalTickets,
          completedTickets: completedTickets,
        });
      } catch (error) {
        console.error('Error fetching ticket stats:', error);
      }
    };

    fetchStats();
  }, []);

  // Calculate points (20 per completed ticket)
  const totalPoints = ticketStats.completedTickets * 20;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatBox
        title="Total Tickets"
        value={ticketStats.totalTickets}
        percentage={10} // You might want to calculate this based on historical data
        icon={<FiTrendingUp size={24} />}
        color="bg-green-600"
        textColor="text-gray-900"
        borderColor="border-gray-400"
      />
      <StatBox
        title="Completed Tickets"
        value={ticketStats.completedTickets}
        percentage={5} // You might want to calculate this based on historical data
        icon={<FiTrendingUp size={24} />}
        color="bg-green-600"
        textColor="text-gray-900"
        borderColor="border-gray-100"
      />
      <StatBox
        title="Total Points"
        value={totalPoints}
        percentage={5} // Same as completed tickets percentage
        icon={<FiTrendingUp size={24} />}
        color="bg-green-600"
        textColor="text-gray-900"
        borderColor="border-gray-200"
      />
    </div>
  );
};

export default DashboardStats;

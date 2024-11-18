import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FiTrendingUp } from 'react-icons/fi';

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

const DashboardStats = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <StatBox
      title="Total Trash Taken"
      value="6"
      percentage={10}
      icon={<FiTrendingUp size={24} />}
      color="bg-green-600"
      textColor="text-white"
      borderColor="border-gray-400"
    />
    <StatBox
      title="Trash taken within 24 hours"
      value="1"
      percentage={6}
      icon={<FiTrendingUp size={24} />}
      color="bg-green-600"
      textColor="text-white"
      borderColor="border-gray-100"
    />
    <StatBox
      title="Points Taken"
      value="30"
      percentage={100}
      icon={<FiTrendingUp size={24} />}
      color="bg-green-600"
      textColor="text-gray-900"
      borderColor="border-gray-200"
    />
  </div>
);

export default DashboardStats;

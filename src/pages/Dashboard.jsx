import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiCalendar, FiBookOpen, FiSettings, FiLogOut } = FiIcons;

const Dashboard = () => {
  const { user, logout } = useAuth();

  const dashboardItems = [
    {
      icon: FiCalendar,
      title: 'Appointments',
      description: 'View and manage your therapy sessions',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: FiBookOpen,
      title: 'Resources',
      description: 'Access therapeutic tools and materials',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: FiUser,
      title: 'Progress',
      description: 'Track your therapeutic journey',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: FiSettings,
      title: 'Settings',
      description: 'Manage your account preferences',
      color: 'bg-gray-100 text-gray-600'
    }
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-light text-gray-900 mb-2">
                  Welcome to Your Dashboard
                </h1>
                <p className="text-gray-600">
                  Your personal space for managing your therapeutic journey
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
              >
                <SafeIcon icon={FiLogOut} className="mr-2" />
                Sign Out
              </button>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
                  <SafeIcon icon={item.icon} className="text-xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Book Appointment
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                View Resources
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Contact Dr. Rahman
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
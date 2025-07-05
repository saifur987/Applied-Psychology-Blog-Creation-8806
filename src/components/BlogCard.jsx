import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiClock, FiUser, FiArrowRight } = FiIcons;

const BlogCard = ({ post }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <SafeIcon icon={FiUser} className="mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <SafeIcon icon={FiClock} className="mr-1" />
              <span>{post.readTime} min</span>
            </div>
          </div>
          <div className="flex items-center">
            <SafeIcon icon={FiCalendar} className="mr-1" />
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
        
        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
        >
          Read More
          <SafeIcon icon={FiArrowRight} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
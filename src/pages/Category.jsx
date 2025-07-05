import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

const Category = () => {
  const { category } = useParams();
  const categoryPosts = blogPosts.filter(post => post.category === category);
  
  const categoryNames = {
    cognitive: 'Cognitive Psychology',
    behavioral: 'Behavioral Psychology',
    social: 'Social Psychology',
    clinical: 'Clinical Psychology',
    developmental: 'Developmental Psychology'
  };

  const categoryDescriptions = {
    cognitive: 'Explore how we process information, make decisions, and understand the world around us.',
    behavioral: 'Discover the science behind human behavior and how we can create positive change.',
    social: 'Learn about how social interactions and relationships shape our thoughts and actions.',
    clinical: 'Understand mental health conditions and evidence-based therapeutic approaches.',
    developmental: 'Examine how we grow and change throughout our lifespan.'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {categoryNames[category] || 'Category'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {categoryDescriptions[category] || 'Explore articles in this category.'}
          </p>
          <div className="mt-6">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
              {categoryPosts.length} articles
            </span>
          </div>
        </motion.div>

        {categoryPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
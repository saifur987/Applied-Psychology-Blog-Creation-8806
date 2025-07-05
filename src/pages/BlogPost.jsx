import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { blogPosts } from '../data/blogPosts';

const { FiCalendar, FiClock, FiUser, FiArrowLeft, FiShare2, FiBookmark } = FiIcons;

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors"
            >
              <SafeIcon icon={FiArrowLeft} className="mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)} Psychology
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-indigo-200">
              <div className="flex items-center">
                <SafeIcon icon={FiUser} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiCalendar} className="mr-2" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiClock} className="mr-2" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          
          <div className="p-8 md:p-12">
            {/* Article Actions */}
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
              <div className="flex space-x-4">
                <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                  <SafeIcon icon={FiShare2} className="mr-2" />
                  Share
                </button>
                <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                  <SafeIcon icon={FiBookmark} className="mr-2" />
                  Save
                </button>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2>Understanding the Core Concepts</h2>
              <p>
                Psychology has evolved significantly over the past century, moving from purely theoretical frameworks 
                to practical applications that directly impact our daily lives. This shift towards applied psychology 
                has opened new avenues for understanding human behavior in real-world contexts.
              </p>
              
              <h3>Key Principles</h3>
              <p>
                The foundation of applied psychology rests on several key principles that guide both research and practice. 
                These principles emphasize the importance of empirical evidence, ethical considerations, and practical utility 
                in addressing human challenges.
              </p>
              
              <blockquote className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8">
                <p className="text-indigo-900 font-medium">
                  "The ultimate goal of psychology is not just to understand the mind, but to improve the human condition 
                  through evidence-based interventions and insights."
                </p>
              </blockquote>
              
              <h3>Practical Applications</h3>
              <p>
                Applied psychology finds its expression in numerous fields, from clinical practice and educational settings 
                to organizational behavior and public policy. Each application requires a deep understanding of both 
                theoretical foundations and practical constraints.
              </p>
              
              <ul>
                <li>Clinical and therapeutic interventions</li>
                <li>Educational psychology and learning enhancement</li>
                <li>Organizational behavior and workplace dynamics</li>
                <li>Consumer psychology and decision-making</li>
                <li>Health psychology and behavioral change</li>
              </ul>
              
              <h3>Research Methodologies</h3>
              <p>
                The strength of applied psychology lies in its rigorous research methodologies. From controlled experiments 
                to longitudinal studies, researchers employ various approaches to ensure their findings are both valid and 
                applicable to real-world situations.
              </p>
              
              <h3>Future Directions</h3>
              <p>
                As we move forward, applied psychology continues to evolve with technological advances and changing social needs. 
                The integration of digital tools, artificial intelligence, and big data analytics is opening new frontiers 
                for psychological research and intervention.
              </p>
              
              <p>
                The field's commitment to evidence-based practice ensures that psychological insights continue to provide 
                meaningful solutions to human challenges, making it an essential discipline for understanding and improving 
                the human experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {relatedPost.excerpt.substring(0, 100)}...
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <SafeIcon icon={FiClock} className="mr-1" />
                      <span>{relatedPost.readTime} min read</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
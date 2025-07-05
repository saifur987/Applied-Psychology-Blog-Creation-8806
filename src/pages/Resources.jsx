import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBookOpen, FiHeadphones, FiVideo, FiFileText, FiExternalLink, FiPhone } = FiIcons;

const Resources = () => {
  const articles = [
    {
      title: 'Understanding Anxiety: A Simple Guide',
      excerpt: 'Learn about the nature of anxiety and simple techniques to manage it effectively.',
      readTime: '5 min read',
      category: 'Anxiety'
    },
    {
      title: 'The Power of Mindful Breathing',
      excerpt: 'Discover how simple breathing exercises can transform your mental state.',
      readTime: '3 min read',
      category: 'Mindfulness'
    },
    {
      title: 'Building Resilience in Difficult Times',
      excerpt: 'Practical strategies for developing emotional resilience and coping skills.',
      readTime: '7 min read',
      category: 'Resilience'
    },
    {
      title: 'Sleep and Mental Health',
      excerpt: 'Understanding the crucial connection between quality sleep and psychological well-being.',
      readTime: '6 min read',
      category: 'Wellness'
    }
  ];

  const exercises = [
    {
      icon: FiHeadphones,
      title: '5-Minute Mindfulness Meditation',
      description: 'A guided meditation to help you find calm and clarity in your day.',
      type: 'Audio Guide'
    },
    {
      icon: FiVideo,
      title: 'Progressive Muscle Relaxation',
      description: 'Step-by-step video guide to release physical tension and stress.',
      type: 'Video Guide'
    },
    {
      icon: FiFileText,
      title: 'Thought Record Worksheet',
      description: 'A practical tool to identify and challenge negative thought patterns.',
      type: 'Worksheet'
    },
    {
      icon: FiFileText,
      title: 'Daily Mood Tracker',
      description: 'Track your emotional patterns and identify triggers and trends.',
      type: 'Worksheet'
    }
  ];

  const emergencyContacts = [
    {
      name: 'Samaritans',
      number: '116 123',
      description: 'Free 24/7 emotional support for anyone in distress',
      available: '24/7'
    },
    {
      name: 'NHS 111',
      number: '111',
      description: 'Non-emergency medical advice and mental health support',
      available: '24/7'
    },
    {
      name: 'Crisis Text Line',
      number: 'Text SHOUT to 85258',
      description: 'Free, confidential, 24/7 text support for mental health crises',
      available: '24/7'
    },
    {
      name: 'CALM (Campaign Against Living Miserably)',
      number: '0800 58 58 58',
      description: 'Support for men experiencing depression or suicidal thoughts',
      available: '5pm-midnight daily'
    }
  ];

  const books = [
    {
      title: 'The Gifts of Imperfection',
      author: 'Brené Brown',
      description: 'A powerful guide to embracing vulnerability and building resilience.'
    },
    {
      title: 'Mindfulness for Beginners',
      author: 'Jon Kabat-Zinn',
      description: 'Simple introduction to mindfulness practice and its benefits.'
    },
    {
      title: 'The Anxiety and Worry Workbook',
      author: 'David A. Clark',
      description: 'Practical cognitive-behavioral strategies for managing anxiety.'
    },
    {
      title: 'Self-Compassion',
      author: 'Kristin Neff',
      description: 'Learn to treat yourself with the same kindness you show others.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-light text-gray-900 mb-6">
              Mental Health Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A curated collection of resources to support your mental health journey. 
              These tools and information are designed to complement professional therapy 
              and provide additional support when you need it most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Helpful Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Helpful Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Evidence-based insights and practical advice for common mental health challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Read Article</span>
                  <SafeIcon icon={FiExternalLink} className="ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Help Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Self-Help Tools & Exercises
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Practical tools and exercises you can use to support your mental health between sessions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exercises.map((exercise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <SafeIcon icon={exercise.icon} className="text-2xl text-blue-600" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    {exercise.title}
                  </h3>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {exercise.type}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {exercise.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Access Tool</span>
                  <SafeIcon icon={FiExternalLink} className="ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Crisis Support & Emergency Contacts
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              If you're experiencing a mental health crisis, please reach out for immediate support. 
              These services are available 24/7 and provide confidential, professional help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-400"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      {contact.name}
                    </h3>
                    <p className="text-2xl font-bold text-red-600">{contact.number}</p>
                  </div>
                  <SafeIcon icon={FiPhone} className="text-red-400 text-xl" />
                </div>
                <p className="text-gray-600 mb-2">{contact.description}</p>
                <p className="text-sm text-gray-500 font-medium">Available: {contact.available}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              <strong>Emergency:</strong> If you're in immediate danger, call 999 or go to your nearest A&E department.
            </p>
          </div>
        </div>
      </section>

      {/* Recommended Reading */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Recommended Reading
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Carefully selected books that offer valuable insights and practical tools for mental health and personal growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <div className="flex items-start">
                  <SafeIcon icon={FiBookOpen} className="text-blue-600 text-xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {book.title}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">by {book.author}</p>
                    <p className="text-gray-600 leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-yellow-800 mb-2">
              Important Disclaimer
            </h3>
            <p className="text-yellow-700 text-sm leading-relaxed">
              These resources are provided for educational purposes and are not a substitute for professional mental health treatment. 
              If you're experiencing severe symptoms or are in crisis, please seek immediate professional help or contact emergency services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
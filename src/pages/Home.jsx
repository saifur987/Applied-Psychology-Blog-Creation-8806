import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiShield, FiUsers, FiAward, FiArrowRight } = FiIcons;

const Home = () => {
  const features = [
    {
      icon: FiHeart,
      title: 'Compassionate Care',
      description: 'A warm, non-judgmental space where you can explore your thoughts and feelings safely.'
    },
    {
      icon: FiShield,
      title: 'Evidence-Based Practice',
      description: 'Therapeutic approaches grounded in scientific research and proven effectiveness.'
    },
    {
      icon: FiUsers,
      title: 'Individual Focus',
      description: 'Personalized treatment plans tailored to your unique needs and circumstances.'
    },
    {
      icon: FiAward,
      title: 'Professional Excellence',
      description: 'Licensed and regulated by professional bodies in the UK with ongoing training.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Welcome to a space of
                <span className="text-blue-600 font-medium"> healing</span> and
                <span className="text-blue-600 font-medium"> growth</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I'm Dr. Saifur Rahman, a licensed counselling psychologist in the UK. 
                My approach is simple: create a safe, compassionate space where you can 
                explore your thoughts and feelings without judgment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Book a Consultation
                  <SafeIcon icon={FiArrowRight} className="ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
                >
                  Learn More About Me
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Professional therapy setting"
                className="rounded-lg shadow-lg max-w-md w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic mb-6">
              "Simplicity is the ultimate sophistication. In therapy, the most profound 
              changes often come from the simplest insights."
            </blockquote>
            <cite className="text-lg text-gray-500">— Dr. Saifur Rahman</cite>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Why Choose My Practice
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My philosophy centers on simplicity, authenticity, and evidence-based care. 
              Here's what makes my approach unique.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <SafeIcon icon={feature.icon} className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Therapeutic Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I offer individual counselling sessions using evidence-based approaches 
                including Cognitive Behavioural Therapy (CBT), Person-Centered Therapy, 
                and Mindfulness-Based Interventions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 w-2 h-2 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h3 className="font-medium text-gray-900">Individual Therapy</h3>
                    <p className="text-gray-600">One-on-one sessions tailored to your specific needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 w-2 h-2 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h3 className="font-medium text-gray-900">Anxiety & Depression</h3>
                    <p className="text-gray-600">Specialized treatment for mood and anxiety disorders</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 w-2 h-2 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h3 className="font-medium text-gray-900">Trauma & PTSD</h3>
                    <p className="text-gray-600">Compassionate support for trauma recovery</p>
                  </div>
                </div>
              </div>
              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                View All Services
                <SafeIcon icon={FiArrowRight} className="ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Therapy session"
                className="rounded-lg shadow-lg max-w-md w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light text-white mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Taking the first step towards better mental health is courageous. 
              I'm here to support you every step of the way.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Schedule Your Consultation
              <SafeIcon icon={FiArrowRight} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
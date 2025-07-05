import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiBookOpen, FiUsers, FiHeart } = FiIcons;

const About = () => {
  const qualifications = [
    "Doctorate in Counselling Psychology (DCounsPsych)",
    "Licensed by the Health and Care Professions Council (HCPC)",
    "Chartered Psychologist with the British Psychological Society (BPS)",
    "Member of the Division of Counselling Psychology (DCoP)",
    "Continuing Professional Development (CPD) certified"
  ];

  const values = [
    {
      icon: FiHeart,
      title: 'Compassion',
      description: 'Every individual deserves to be heard and understood without judgment.'
    },
    {
      icon: FiBookOpen,
      title: 'Evidence-Based Practice',
      description: 'Therapeutic interventions grounded in scientific research and proven outcomes.'
    },
    {
      icon: FiUsers,
      title: 'Collaborative Approach',
      description: 'Working together as partners in your journey towards better mental health.'
    },
    {
      icon: FiAward,
      title: 'Professional Excellence',
      description: 'Committed to the highest standards of ethical practice and ongoing learning.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-light text-gray-900 mb-6">
                About Dr. Saifur Rahman
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I am a licensed counselling psychologist with over a decade of experience 
                helping individuals navigate life's challenges. My approach is rooted in 
                simplicity, compassion, and evidence-based practice.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe that therapy should be a collaborative process where you feel 
                safe, heard, and empowered to make positive changes in your life. My 
                philosophy centers on the idea that sometimes the most profound healing 
                comes from the simplest insights.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Dr. Saifur Rahman"
                className="rounded-lg shadow-lg max-w-md w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Professional Background
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              My journey in psychology began with a deep curiosity about human behavior 
              and a genuine desire to help others. Over the years, I've developed expertise 
              in various therapeutic modalities while maintaining my core philosophy of simplicity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-medium text-gray-900 mb-6">
                Education & Training
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-200 pl-4">
                  <h4 className="font-medium text-gray-900">Doctorate in Counselling Psychology</h4>
                  <p className="text-gray-600">University of London, 2012</p>
                </div>
                <div className="border-l-4 border-blue-200 pl-4">
                  <h4 className="font-medium text-gray-900">MSc in Clinical Psychology</h4>
                  <p className="text-gray-600">University of Manchester, 2009</p>
                </div>
                <div className="border-l-4 border-blue-200 pl-4">
                  <h4 className="font-medium text-gray-900">BSc in Psychology (First Class Honours)</h4>
                  <p className="text-gray-600">University of Cambridge, 2007</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-medium text-gray-900 mb-6">
                Professional Qualifications
              </h3>
              <ul className="space-y-3">
                {qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{qualification}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide every aspect of my practice and ensure that 
              you receive the highest quality of care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <SafeIcon icon={value.icon} className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              My Philosophy: Simplicity in Practice
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 leading-relaxed mb-6">
                In a world that often feels overwhelming and complex, I believe that therapy 
                should be a place of clarity and understanding. My philosophy of simplicity 
                doesn't mean oversimplifying your experiences—it means cutting through the 
                noise to find what truly matters.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                I've found that the most powerful therapeutic moments often come from simple 
                realizations, honest conversations, and genuine human connection. My role is 
                to create a space where these moments can naturally unfold.
              </p>
              <blockquote className="border-l-4 border-blue-200 pl-6 italic text-gray-700 text-xl">
                "The greatest revolution of our generation is the discovery that human beings, 
                by changing the inner attitudes of their minds, can change the outer aspects 
                of their lives."
              </blockquote>
              <p className="text-gray-500 mt-4">— William James</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
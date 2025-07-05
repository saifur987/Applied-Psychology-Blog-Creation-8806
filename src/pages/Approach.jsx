import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCompass, FiHeart, FiEye, FiTarget, FiUsers, FiSun } = FiIcons;

const Approach = () => {
  const principles = [
    {
      icon: FiCompass,
      title: 'Simplicity as Strength',
      description: 'Complex problems often have simple solutions. I help you cut through the noise to find clarity and understanding.',
      details: 'My approach strips away unnecessary complexity to focus on what truly matters in your healing journey.'
    },
    {
      icon: FiHeart,
      title: 'Compassionate Presence',
      description: 'Every session is a judgment-free space where you can be completely authentic and vulnerable.',
      details: 'I believe that genuine healing happens in an atmosphere of unconditional acceptance and understanding.'
    },
    {
      icon: FiEye,
      title: 'Mindful Awareness',
      description: 'Developing awareness of your thoughts, feelings, and patterns is the foundation of positive change.',
      details: 'Through mindfulness practices, you learn to observe your experiences without getting caught up in them.'
    },
    {
      icon: FiTarget,
      title: 'Goal-Oriented',
      description: 'We work collaboratively to identify clear, achievable goals that align with your values and aspirations.',
      details: 'Every session moves you closer to your desired outcomes while honoring your unique pace and process.'
    },
    {
      icon: FiUsers,
      title: 'Collaborative Partnership',
      description: 'You are the expert on your own life. I provide tools, insights, and support as we work together.',
      details: 'Therapy is most effective when it feels like a partnership where your voice and choices are always respected.'
    },
    {
      icon: FiSun,
      title: 'Strengths-Based',
      description: 'I help you recognize and build upon your existing strengths and resilience.',
      details: 'Rather than focusing solely on problems, we explore your natural abilities and resources for healing.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We begin with a free 15-minute consultation to discuss your needs and see if we\'re a good fit.',
      duration: '15 minutes'
    },
    {
      step: '02',
      title: 'Assessment & Goals',
      description: 'In our first session, we explore your concerns and collaboratively set therapeutic goals.',
      duration: '50 minutes'
    },
    {
      step: '03',
      title: 'Active Therapy',
      description: 'We work together using evidence-based techniques tailored to your specific needs.',
      duration: 'Ongoing'
    },
    {
      step: '04',
      title: 'Progress Review',
      description: 'Regular check-ins ensure we\'re on track and adjust our approach as needed.',
      duration: 'As needed'
    },
    {
      step: '05',
      title: 'Completion & Maintenance',
      description: 'As you reach your goals, we plan for maintaining progress and preventing relapse.',
      duration: 'Final sessions'
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
              My Therapeutic Approach
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My approach to therapy is grounded in simplicity, compassion, and evidence-based practice. 
              I believe that healing happens best in an environment of trust, understanding, and genuine human connection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic mb-6">
              "In the midst of complexity, there is simplicity. In the midst of confusion, there is clarity. 
              In the midst of suffering, there is healing."
            </blockquote>
            <cite className="text-lg text-gray-500">— My guiding philosophy</cite>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Core Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every aspect of my therapeutic work and ensure 
              that you receive compassionate, effective care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <SafeIcon icon={principle.icon} className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {principle.description}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {principle.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              The Therapeutic Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding what to expect can help reduce anxiety about starting therapy. 
              Here's how we'll work together on your journey toward healing and growth.
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1 bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-light text-blue-600 mr-4">{step.step}</span>
                    <h3 className="text-xl font-medium text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-2">{step.description}</p>
                  <p className="text-sm text-blue-600 font-medium">{step.duration}</p>
                </div>
                <div className="w-16 flex justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Approach Works */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Why This Approach Works
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Evidence-Based Foundation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All my therapeutic interventions are grounded in scientific research and 
                    proven to be effective for the conditions I treat.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Personalized Care</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every person is unique, and so is their path to healing. I tailor my approach 
                    to fit your specific needs, preferences, and circumstances.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Sustainable Change</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Rather than quick fixes, I focus on helping you develop lasting skills and 
                    insights that will serve you long after therapy ends.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-medium text-gray-900 mb-6">
                What Clients Say
              </h3>
              <div className="space-y-6">
                <blockquote className="border-l-4 border-blue-200 pl-4">
                  <p className="text-gray-600 italic mb-2">
                    "Dr. Rahman's approach is refreshingly simple yet profound. He helped me 
                    see my problems from a completely new perspective."
                  </p>
                  <cite className="text-sm text-gray-500">— Anonymous Client</cite>
                </blockquote>
                <blockquote className="border-l-4 border-blue-200 pl-4">
                  <p className="text-gray-600 italic mb-2">
                    "I finally found a therapist who doesn't overcomplicate things. The 
                    simplicity of his approach made all the difference."
                  </p>
                  <cite className="text-sm text-gray-500">— Anonymous Client</cite>
                </blockquote>
                <blockquote className="border-l-4 border-blue-200 pl-4">
                  <p className="text-gray-600 italic mb-2">
                    "His compassionate presence and clear guidance helped me through one of 
                    the most difficult periods of my life."
                  </p>
                  <cite className="text-sm text-gray-500">— Anonymous Client</cite>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;
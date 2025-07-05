import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiHeart, FiBrain, FiShield, FiSun, FiClock } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiUser,
      title: 'Individual Therapy',
      description: 'One-on-one sessions tailored to your specific needs and goals.',
      details: [
        'Personalized treatment plans',
        'Flexible scheduling options',
        'Confidential and safe environment',
        'Progress tracking and feedback'
      ]
    },
    {
      icon: FiHeart,
      title: 'Anxiety & Depression',
      description: 'Specialized treatment for mood and anxiety disorders using evidence-based approaches.',
      details: [
        'Cognitive Behavioural Therapy (CBT)',
        'Mindfulness-based interventions',
        'Coping strategies and skills',
        'Relapse prevention planning'
      ]
    },
    {
      icon: FiBrain,
      title: 'Trauma & PTSD',
      description: 'Compassionate support for trauma recovery and post-traumatic stress.',
      details: [
        'Trauma-focused CBT',
        'EMDR (Eye Movement Desensitization)',
        'Grounding and stabilization techniques',
        'Safe processing of traumatic memories'
      ]
    },
    {
      icon: FiShield,
      title: 'Stress Management',
      description: 'Learn effective strategies to manage stress and build resilience.',
      details: [
        'Stress identification and management',
        'Relaxation techniques',
        'Work-life balance strategies',
        'Burnout prevention and recovery'
      ]
    },
    {
      icon: FiSun,
      title: 'Personal Development',
      description: 'Support for personal growth, self-awareness, and life transitions.',
      details: [
        'Self-esteem and confidence building',
        'Life transitions and changes',
        'Goal setting and achievement',
        'Identity and purpose exploration'
      ]
    },
    {
      icon: FiClock,
      title: 'Short-term Therapy',
      description: 'Focused, solution-oriented therapy for specific issues and goals.',
      details: [
        'Solution-focused brief therapy',
        'Specific problem resolution',
        'Time-limited interventions',
        'Rapid skill development'
      ]
    }
  ];

  const therapeuticApproaches = [
    {
      name: 'Cognitive Behavioural Therapy (CBT)',
      description: 'Evidence-based approach focusing on the relationship between thoughts, feelings, and behaviors.'
    },
    {
      name: 'Person-Centered Therapy',
      description: 'Humanistic approach emphasizing your inherent capacity for growth and self-actualization.'
    },
    {
      name: 'Mindfulness-Based Interventions',
      description: 'Incorporating mindfulness practices to increase awareness and reduce psychological distress.'
    },
    {
      name: 'Acceptance and Commitment Therapy (ACT)',
      description: 'Helping you accept difficult experiences while committing to values-based actions.'
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
              Therapeutic Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I offer a range of therapeutic services designed to meet your unique needs. 
              Each approach is grounded in evidence-based practice and delivered with 
              compassion and understanding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <SafeIcon icon={service.icon} className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="bg-blue-200 w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Approaches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Therapeutic Approaches
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I draw from various evidence-based therapeutic modalities to provide 
              you with the most effective treatment for your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {therapeuticApproaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {approach.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {approach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                What to Expect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Session Duration</h3>
                  <p className="text-gray-600">
                    Individual sessions typically last 50 minutes, allowing adequate time 
                    for exploration and processing.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Frequency</h3>
                  <p className="text-gray-600">
                    Most clients benefit from weekly sessions initially, with frequency 
                    adjusted based on your needs and progress.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Confidentiality</h3>
                  <p className="text-gray-600">
                    All sessions are strictly confidential, adhering to professional 
                    ethical guidelines and legal requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">
                    Sessions are conducted in a comfortable, private office in central 
                    London, with online options available.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-medium text-gray-900 mb-6">
                Ready to Begin?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Taking the first step towards therapy requires courage. I'm here to 
                support you in a safe, non-judgmental environment where you can 
                explore your thoughts and feelings at your own pace.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-200 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Free 15-minute consultation call</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-200 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Flexible scheduling options</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-200 w-2 h-2 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Professional, compassionate care</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
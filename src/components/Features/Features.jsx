// src/components/Features/Features.jsx
import React from 'react';
import { 
  FaBrain, 
  FaChartPie, 
  FaShieldAlt, 
  FaRocket, 
  FaSyncAlt, 
  FaUsersCog 
} from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaBrain />,
      title: "Advanced AI Models",
      description: "Leverage state-of-the-art machine learning models tailored for enterprise applications and decision-making.",
      color: "text-blue-600",
      gradient: "from-blue-600/20 to-transparent",
    },
    {
      icon: <FaChartPie />,
      title: "Business Analytics",
      description: "Gain actionable insights with real-time analytics and comprehensive business intelligence dashboards.",
      color: "text-purple-600",
      gradient: "from-purple-600/20 to-transparent",
    },
    {
      icon: <FaShieldAlt />,
      title: "Enterprise Security",
      description: "Bank-grade security protocols with SOC 2 compliance and end-to-end encryption for your sensitive data.",
      color: "text-emerald-600",
      gradient: "from-emerald-600/20 to-transparent",
    },
    {
      icon: <FaRocket />,
      title: "Scalable Solutions",
      description: "Infrastructure that grows with your business, handling millions of operations with consistent performance.",
      color: "text-red-600",
      gradient: "from-red-600/20 to-transparent",
    },
    {
      icon: <FaSyncAlt />,
      title: "Seamless Integration",
      description: "Connect with your existing tools through our comprehensive API and pre-built enterprise integrations.",
      color: "text-amber-600",
      gradient: "from-amber-600/20 to-transparent",
    },
    {
      icon: <FaUsersCog />,
      title: "Team Collaboration",
      description: "Enhanced workflow management with role-based access control and team collaboration features.",
      color: "text-primary-600",
      gradient: "from-primary-600/20 to-transparent",
    },
  ];

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold md:text-4xl md:leading-tight text-neutral-800">
          Enterprise Features That Drive 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600"> Innovation</span>
        </h2>
        <p className="mt-4 text-lg text-neutral-600">
          Powerful capabilities designed for modern enterprises to accelerate AI adoption and digital transformation
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative min-h-[15rem] flex flex-col p-6 bg-white border border-neutral-200 shadow-sm rounded-xl hover:shadow-md transition"
          >
            {/* Gradient Background */}
            <div className={`absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l ${feature.gradient} opacity-50 rounded-r-xl transition-opacity group-hover:opacity-100`}></div>

            {/* Icon */}
            <div className={`relative mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} bg-white shadow-sm`}>
              <span className="w-6 h-6">{feature.icon}</span>
            </div>

            {/* Content */}
            <div className="relative">
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600">
                {feature.description}
              </p>
            </div>

            {/* Learn More Link */}
            <div className="relative mt-auto pt-4">
              <a className={`inline-flex items-center gap-x-1 ${feature.color} hover:opacity-80 font-medium`} href="#">
                Learn more
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center">
        <div className="inline-block bg-gradient-to-tr from-primary-600 to-accent-600 rounded-full p-1">
          <a 
            className="group inline-flex items-center gap-x-3.5 text-center bg-white hover:bg-transparent border border-transparent text-neutral-800 hover:text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-6"
            href="#"
          >
            Request Enterprise Demo
            <svg className="w-4 h-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        <p className="mt-4 text-neutral-600">
          Customizable solutions • Enterprise support • Dedicated success manager
        </p>
      </div>
    </section>
  );
};

export default Features;

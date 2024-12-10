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
            className="group relative flex flex-col h-full bg-white border border-neutral-200 shadow-sm rounded-2xl hover:shadow-xl transition-transform transform hover:scale-105 hover:rotate-1 hover:translate-y-1"
          >
            {/* Gradient Background */}
            <div className={`absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l ${feature.gradient} opacity-0 rounded-r-2xl transition-opacity group-hover:opacity-50`}></div>

            <div className="p-8 relative">
              {/* Icon */}
              <div className={`mb-6 ${feature.color}`}> 
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

// src/components/HowItWorks/HowItWorks.jsx
import React from 'react';
import { FaRobot, FaChartLine, FaCogs } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "AI-Powered Insights",
      description: "Leverage AI to analyze business processes and identify optimization opportunities.",
      icon: <FaRobot className="w-6 h-6" />, // Adjusted icon size
      color: "text-blue-600",
    },
    {
      id: 2,
      title: "Seamless Integration",
      description: "Easily integrate AI-driven tools into your workflows without disruption.",
      icon: <FaCogs className="w-6 h-6" />,
      color: "text-purple-600",
    },
    {
      id: 3,
      title: "Measurable Impact",
      description: "Track efficiency gains and operational improvements with real-time analytics.",
      icon: <FaChartLine className="w-6 h-6" />,
      color: "text-primary-600",
    },
  ];

  return (
    <section className="max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-10 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-6">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-neutral-800">
          How <span className="text-primary-600">Corp8.ai</span> Elevates Your Business
        </h2>
        <p className="mt-2 text-md text-neutral-600">
          AI solutions designed for seamless integration and measurable results.
        </p>
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div 
            key={step.id}
            className="flex flex-col h-full bg-white border border-neutral-200 shadow-sm rounded-lg p-5 hover:shadow-md transition-transform transform hover:scale-105"
          >
            {/* Icon */}
            <div className={`flex items-center justify-center w-10 h-10 mb-3 rounded-full ${step.color} bg-white shadow-md`}>
              {step.icon}
            </div>

            {/* Step Title and Description */}
            <h3 className="text-lg font-semibold text-neutral-800 mb-1">{step.title}</h3>
            <p className="text-sm text-neutral-600">{step.description}</p>
          </div>
        ))}
      </div>
      {/* End Grid */}
    </section>
  );
};

export default HowItWorks;

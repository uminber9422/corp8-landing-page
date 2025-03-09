// src/components/HowItWorks/HowItWorks.jsx
import React from 'react';
import { FaRobot, FaChartLine, FaCogs, FaArrowRight } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "AI Analysis",
      description: "Our advanced AI analyzes your business processes and identifies optimization opportunities using cutting-edge machine learning.",
      icon: <FaRobot className="w-6 h-6" />,
      color: "text-blue-600",
      gradient: "from-blue-600/20 to-transparent",
    },
    {
      id: 2,
      title: "Smart Integration",
      description: "Seamlessly integrate AI-powered solutions into your existing workflows with our enterprise-grade implementation process.",
      icon: <FaCogs className="w-6 h-6" />,
      color: "text-purple-600",
      gradient: "from-purple-600/20 to-transparent",
    },
    {
      id: 3,
      title: "Performance Boost",
      description: "Monitor and measure the impact with real-time analytics, showing clear ROI and operational improvements.",
      icon: <FaChartLine className="w-6 h-6" />,
      color: "text-primary-600",
      gradient: "from-primary-600/20 to-transparent",
    },
  ];

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold md:text-4xl md:leading-tight text-neutral-800">
          How <span className="text-primary-600">Corp8.ai</span> Transforms Your Business
        </h2>
        <p className="mt-4 text-lg text-neutral-600">
          Our enterprise AI implementation process is designed for seamless integration and maximum impact
        </p>
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Process Cards */}
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className="group relative flex flex-col h-full bg-white border border-neutral-200 shadow-md rounded-2xl hover:shadow-2xl transition-transform transform hover:scale-105 hover:translate-y-2 hover:skew-y-1"
          >
            <div className="p-8">
              {/* Icon */}
              <div className={`flex items-center justify-center w-12 h-12 mb-4 rounded-full ${step.color} bg-white shadow-lg`}> 
                {step.icon}
              </div>

              {/* Step Title and Description */}
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
            </div>

          </div>
        ))}
      </div>
      {/* End Grid */}

      {/* Bottom CTA */}
      <div className="mt-20 text-center">
        <div className="inline-block bg-gradient-to-tr from-primary-600 to-accent-600 rounded-full p-1">
          <a 
            className="group inline-flex items-center gap-x-3.5 text-center bg-white hover:bg-transparent border border-transparent text-neutral-800 hover:text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-6"
            href="https://wa.me/+918200793896?text=I%20want%20to%20get%20a%20demo%20of%20Corp8%20AI"
          >
            Schedule a Demo
            <FaArrowRight className="w-3.5 h-3.5 transition ease-in-out group-hover:translate-x-1" />
          </a>
        </div>
        <p className="mt-4 text-neutral-600">
          Enterprise-grade AI solutions • Custom implementation • 24/7 support
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;

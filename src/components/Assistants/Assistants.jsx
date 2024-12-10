// src/components/Assistants/Assistants.jsx
import React from 'react';
import { 
  FaIndustry, 
  FaChartLine, 
  FaRobot, 
  FaShieldAlt, 
  FaRegLightbulb, 
  FaCheck 
} from 'react-icons/fa';

const Assistants = () => {
  const assistants = [
    {
      title: "Manufacturing AI",
      description: "Optimize production workflows and predict maintenance needs with advanced AI-driven insights.",
      color: "text-blue-600",
      gradient: "from-blue-600/20 to-transparent",
      icon: <FaIndustry />,
      features: [
        "Predictive maintenance",
        "Quality control automation",
        "Supply chain optimization"
      ],
    },
    {
      title: "Financial Intelligence",
      description: "Transform financial operations with AI-powered analytics and automated risk assessment.",
      color: "text-purple-600",
      gradient: "from-purple-600/20 to-transparent",
      icon: <FaChartLine />,
      features: [
        "Risk analysis automation",
        "Market trend prediction",
        "Fraud detection systems"
      ],
    },
    {
      title: "Customer Service AI",
      description: "Enhance customer experience with 24/7 intelligent support and personalized interactions.",
      color: "text-emerald-600",
      gradient: "from-emerald-600/20 to-transparent",
      icon: <FaRobot />,
      features: [
        "Multi-language support",
        "Sentiment analysis",
        "Automated ticket routing"
      ],
    },
  ];

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold md:text-4xl md:leading-tight text-neutral-800">
          Industry-Specific 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600"> AI Solutions</span>
        </h2>
        <p className="mt-4 text-lg text-neutral-600">
          Tailored AI assistants designed for your industry's unique challenges and opportunities
        </p>
      </div>

      {/* Assistants Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {assistants.map((assistant, index) => (
          <div
            key={index}
            className="group relative flex flex-col min-h-[24rem] p-6 bg-white border border-neutral-200 shadow-sm rounded-xl hover:shadow-md transition"
          >
            {/* Gradient Background */}
            <div className={`absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l ${assistant.gradient} opacity-50 rounded-r-xl transition-opacity group-hover:opacity-100`}></div>

            {/* Icon */}
            <div className={`relative mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg ${assistant.color} bg-white shadow-sm`}>
              <span className="w-6 h-6">{assistant.icon}</span>
            </div>

            {/* Content */}
            <div className="relative mb-6">
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                {assistant.title}
              </h3>
              <p className="text-neutral-600">
                {assistant.description}
              </p>
            </div>

            {/* Features List */}
            <div className="relative mt-auto">
              <p className="font-semibold mb-3 text-neutral-800">Key Capabilities:</p>
              <ul className="space-y-3">
                {assistant.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-x-2">
                    <span className={`inline-flex items-center justify-center w-5 h-5 ${assistant.color}`}>
                      <FaCheck className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn More Link */}
            <div className="relative mt-6 pt-4 border-t border-neutral-200">
              <a className={`inline-flex items-center gap-x-1 ${assistant.color} hover:opacity-80 font-medium`} href="#">
                Explore Solution
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
            Schedule a Custom Solution Demo
            <svg className="w-4 h-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        <p className="mt-4 text-neutral-600">
          Industry expertise • Custom AI models • Enterprise integration
        </p>
      </div>
    </section>
  );
};

export default Assistants;

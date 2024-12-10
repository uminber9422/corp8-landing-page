import React, { useState } from 'react';
import { FaCheck, FaRocket, FaBuilding, FaGlobe } from 'react-icons/fa';

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Growth",
      icon: <FaRocket />,
      monthly: "$999",
      annual: "$899",
      description: "For growing companies starting their AI journey",
      color: "text-blue-600",
      gradient: "from-blue-600/20 to-transparent",
      features: [
        "Up to 100k API calls/month",
        "5 Custom AI Models",
        "Standard SLA",
        "Email & Chat Support",
        "Basic Analytics Dashboard",
        "Team Collaboration Tools"
      ],
    },
    {
      name: "Business",
      icon: <FaBuilding />,
      monthly: "$2,499",
      annual: "$2,249",
      description: "For established businesses scaling AI operations",
      color: "text-purple-600",
      gradient: "from-purple-600/20 to-transparent",
      popular: true,
      features: [
        "Up to 500k API calls/month",
        "15 Custom AI Models",
        "Advanced SLA",
        "24/7 Priority Support",
        "Advanced Analytics Suite",
        "Enterprise SSO",
        "Custom Integrations",
        "Dedicated Success Manager"
      ],
    },
    {
      name: "Enterprise",
      icon: <FaGlobe />,
      monthly: "Custom",
      annual: "Custom",
      description: "For large organizations with specific requirements",
      color: "text-emerald-600",
      gradient: "from-emerald-600/20 to-transparent",
      features: [
        "Unlimited API calls",
        "Unlimited Custom Models",
        "Custom SLA",
        "24/7 Dedicated Support",
        "Custom Analytics",
        "Advanced Security Features",
        "On-premise Deployment",
        "Custom AI Training"
      ],
    },
  ];

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold md:text-4xl md:leading-tight text-neutral-800">
          Enterprise-Ready
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600"> Pricing Plans</span>
        </h2>
        <p className="mt-4 text-lg text-neutral-600">
          Scalable solutions for businesses of all sizes
        </p>
      </div>

      {/* Toggle Monthly/Annual */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 rounded-full bg-neutral-100">
          <button
            onClick={() => setAnnual(false)}
            className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ${
              !annual ? 'bg-white shadow-sm text-neutral-800' : 'text-neutral-600 hover:text-neutral-800'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ${
              annual ? 'bg-white shadow-sm text-neutral-800' : 'text-neutral-600 hover:text-neutral-800'
            }`}
          >
            Annual
            <span className="ml-1 text-emerald-600 text-xs">Save 10%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`group relative flex flex-col h-full bg-white border border-neutral-200 shadow-md rounded-2xl hover:shadow-2xl transition-transform transform hover:scale-105 hover:rotate-1 hover:translate-y-1 ${plan.popular ? 'ring-2 ring-purple-600' : ''}`}
          >
            <div className="p-8">
              {/* Icon */}
              <div className={`flex items-center justify-center w-12 h-12 mb-4 rounded-full ${plan.color} bg-white shadow-lg`}> 
                {plan.icon}
              </div>

              {/* Plan Name and Price */}
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">{plan.name}</h3>
              <p className="text-neutral-600 mb-4">{plan.description}</p>
              <div className="flex items-baseline text-neutral-800">
                <span className="text-3xl font-bold">{annual ? plan.annual : plan.monthly}</span>
                <span className="ml-1 text-sm">/ {annual ? 'year' : 'month'}</span>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheck className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Select Plan Button */}
            <div className="mt-auto p-6">
              <button className={`w-full py-3 px-6 text-white font-medium rounded-full transition ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'}`}>Select Plan</button>
            </div>
          </div>
        ))}
      </div>

      {/* Enterprise Contact */}
      <div className="mt-20">
        <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 overflow-hidden">
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Need a Custom Solution?</h3>
            <p className="text-neutral-300 mb-6">Let's discuss your specific requirements and build the perfect plan for your organization</p>
            <a 
              className="inline-flex items-center gap-x-3.5 text-center bg-white hover:bg-neutral-100 border border-transparent text-neutral-800 text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-neutral-900 transition py-3 px-6"
              href="#"
            >
              Schedule a Consultation
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20 mix-blend-multiply"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary-600/30 to-transparent rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-600/30 to-transparent rounded-full filter blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

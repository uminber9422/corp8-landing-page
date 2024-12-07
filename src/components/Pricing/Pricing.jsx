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
            className={`group relative flex flex-col p-8 ${
              plan.popular 
                ? 'bg-gradient-to-br from-neutral-900 to-neutral-800 text-white lg:scale-110 z-10' 
                : 'bg-white'
            } border border-neutral-200 shadow-sm rounded-2xl transition-all duration-300 hover:border-transparent hover:shadow-xl`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute top-0 right-0 mt-4 mr-4">
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gradient-to-r from-primary-600 to-accent-600 text-white">Most Popular</span>
              </div>
            )}

            {/* Icon */}
            <div className={`mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg ${plan.popular ? 'bg-white/10' : plan.color} bg-white/80 shadow-sm`}>
              <span className={`w-6 h-6 ${plan.popular ? 'text-white' : ''}`}>{plan.icon}</span>
            </div>

            {/* Content */}
            <div>
              <h3 className={`text-xl font-semibold ${plan.popular ? 'text-white' : 'text-neutral-800'} mb-2`}>
                {plan.name}
              </h3>
              <p className={`text-sm ${plan.popular ? 'text-neutral-300' : 'text-neutral-600'} mb-5`}>
                {plan.description}
              </p>
              <div className="mb-8">
                <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-neutral-800'}`}>
                  {annual ? plan.annual : plan.monthly}
                </span>
                <span className={`text-sm ${plan.popular ? 'text-neutral-300' : 'text-neutral-600'}`}>/month</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-x-3">
                  <span className={`inline-flex items-center justify-center w-4 h-4 ${plan.popular ? 'text-primary-400' : plan.color}`}>
                    <FaCheck className="w-3 h-3" />
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-neutral-300' : 'text-neutral-600'}`}>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {plan.name === "Enterprise" ? (
              <div className="mt-auto">
                <a
                  href="#"
                  className={`py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border-2 ${
                    plan.popular 
                      ? 'border-white hover:border-neutral-300 text-white' 
                      : 'border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
                  } font-medium transition-all text-sm w-full`}
                >
                  Contact Sales
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ) : (
              <div className="mt-auto">
                <a
                  href="#"
                  className={`py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full ${
                    plan.popular 
                      ? 'bg-white text-neutral-800 hover:bg-neutral-100' 
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  } font-medium transition-all text-sm w-full`}
                >
                  Get Started
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            )}
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

// src/components/Testimonials/Testimonials.jsx
import React from 'react';
import { FaStar, FaQuoteLeft, FaBuilding } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "CTO",
      company: "TechGlobal Solutions",
      image: "https://placehold.co/100x100?text=M.C",
      text: "Corp8.ai has transformed our AI operations. Their enterprise solutions helped us reduce development time by 60% and improve model accuracy significantly.",
      color: "text-blue-600",
      gradient: "from-blue-600/20 to-transparent",
    },
    {
      name: "Sarah Williams",
      role: "Head of AI/ML",
      company: "FinanceHub Inc.",
      image: "https://placehold.co/100x100?text=S.W",
      text: "The scalability and security features of Corp8.ai are unmatched. We process millions of transactions daily with confidence in data protection.",
      color: "text-purple-600",
      gradient: "from-purple-600/20 to-transparent",
    },
    {
      name: "David Kumar",
      role: "VP of Engineering",
      company: "HealthTech Innovations",
      image: "https://placehold.co/100x100?text=D.K",
      text: "Corp8.ai's healthcare-specific AI models have revolutionized our patient care systems. The accuracy and compliance features are exceptional.",
      color: "text-emerald-600",
      gradient: "from-emerald-600/20 to-transparent",
    },
  ];

  const companies = [
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com", color: "#F25022", fontStyle: "font-sans" },
    { name: "Apple", logo: "https://logo.clearbit.com/apple.com", color: "#A2AAAD", fontStyle: "font-serif" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com", color: "#FF9900", fontStyle: "font-mono" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com", color: "#4285F4", fontStyle: "font-sans" },
    { name: "Meta", logo: "https://logo.clearbit.com/meta.com", color: "#3578E5", fontStyle: "font-sans" },
  ];

  const stats = [
    { value: "500+", label: "Enterprise Clients" },
    { value: "95%", label: "Client Retention" },
    { value: "24/7", label: "Support Coverage" },
    { value: "99.9%", label: "System Uptime" },
  ];

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold md:text-4xl md:leading-tight text-neutral-800">
          Trusted by Industry
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600"> Leaders</span>
        </h2>
        <p className="mt-4 text-lg text-neutral-600">
          See how enterprise organizations are transforming with Corp8.ai
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-3xl font-bold text-neutral-800">{stat.value}</h3>
            <p className="mt-1 text-neutral-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Company Logos Section */}
      <div className="text-center mb-16">
        <h3 className="text-2xl font-bold text-neutral-800 mb-8">Trusted by Fortune 500 Companies</h3>
        <div className="flex justify-center items-center gap-16">
          {companies.map((company, index) => (
            <div key={index} className="text-center">
              <img src={company.logo} alt={company.name} className="w-16 h-auto mx-auto mb-2 transition-transform duration-300 transform hover:scale-105" />
              <p className={`mt-2 text-lg ${company.fontStyle}`} style={{ color: company.color }}>
                {company.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group relative flex flex-col h-full bg-white border border-neutral-200 shadow-sm rounded-2xl hover:border-transparent hover:shadow-xl transition-all duration-300"
          >
            {/* Gradient Background */}
            <div className={`absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l ${testimonial.gradient} opacity-0 rounded-r-2xl transition-opacity group-hover:opacity-50`}></div>

            <div className="p-8 relative">
              {/* Quote Icon */}
              <div className={`mb-6 ${testimonial.color}`}> 
                <FaQuoteLeft className="w-8 h-8 opacity-20" />
              </div>

              {/* Content */}
              <p className="text-lg text-neutral-800 mb-6">"{testimonial.text}"</p>

              {/* Profile */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-neutral-800">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <div className="inline-block bg-gradient-to-tr from-primary-600 to-accent-600 rounded-full p-1">
          <a 
            className="group inline-flex items-center gap-x-3.5 text-center bg-white hover:bg-transparent border border-transparent text-neutral-800 hover:text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-6"
            href="#"
          >
            Join Industry Leaders
            <svg className="w-4 h-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        <p className="mt-4 text-neutral-600">
          Enterprise-grade AI solutions • Industry expertise • 24/7 support
        </p>
      </div>
    </section>
  );
};

export default Testimonials;

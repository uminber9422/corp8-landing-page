// src/components/SecurityPrivacy/SecurityPrivacy.jsx
import React from 'react';
import { 
  FaShieldAlt, 
  FaLock, 
  FaUserShield, 
  FaFingerprint, 
  FaCheckCircle, 
  FaCertificate, 
  FaHospital, 
  FaAward 
} from 'react-icons/fa';

const SecurityPrivacy = () => {
  const securityFeatures = [
    {
      icon: <FaShieldAlt />,
      title: "Enterprise-Grade Security",
      description: "Military-grade encryption with dedicated security operations center monitoring.",
      color: "text-blue-600",
      gradient: "from-blue-600/20 to-transparent"
    },
    {
      icon: <FaLock />,
      title: "Data Sovereignty",
      description: "Compliant data storage with regional isolation and custom retention policies.",
      color: "text-purple-600",
      gradient: "from-purple-600/20 to-transparent"
    },
    {
      icon: <FaUserShield />,
      title: "Access Control",
      description: "Role-based permissions, SSO integration, and detailed audit logging.",
      color: "text-emerald-600",
      gradient: "from-emerald-600/20 to-transparent"
    },
    {
      icon: <FaFingerprint />,
      title: "Identity Management",
      description: "Multi-factor authentication and biometric security options.",
      color: "text-amber-600",
      gradient: "from-amber-600/20 to-transparent"
    }
  ];

  const certifications = [
    {
      icon: <FaCheckCircle />,
      title: "SOC 2 Type II",
      description: "Certified security controls and processes",
      color: "text-blue-600"
    },
    {
      icon: <FaCertificate />,
      title: "ISO 27001",
      description: "International security standard",
      color: "text-purple-600"
    },
    {
      icon: <FaHospital />,
      title: "HIPAA Compliant",
      description: "Healthcare data protection",
      color: "text-emerald-600"
    },
    {
      icon: <FaAward />,
      title: "GDPR Ready",
      description: "European data protection",
      color: "text-amber-600"
    }
  ];

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold md:text-4xl md:leading-tight text-neutral-800">
          Enterprise-Grade
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600"> Security & Compliance</span>
        </h2>
        <p className="mt-4 text-lg text-neutral-600">
          Bank-level security infrastructure designed for enterprise data protection
        </p>
      </div>

      {/* Security Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {securityFeatures.map((feature, index) => (
          <div
            key={index}
            className="group relative flex flex-col p-6 bg-white border border-neutral-200 shadow-sm rounded-xl hover:shadow-md transition"
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
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="relative p-8 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Industry-Leading Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
                <div className={`mb-4 ${cert.color}`}>
                  <span className="w-8 h-8 inline-block">{cert.icon}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-neutral-300 text-center text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20 mix-blend-multiply"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary-600/30 to-transparent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-600/30 to-transparent rounded-full filter blur-3xl"></div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <div className="inline-block bg-gradient-to-tr from-primary-600 to-accent-600 rounded-full p-1">
          <a 
            className="group inline-flex items-center gap-x-3.5 text-center bg-white hover:bg-transparent border border-transparent text-neutral-800 hover:text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-6"
            href="#"
          >
            Download Security Whitepaper
            <svg className="w-4 h-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        <p className="mt-4 text-neutral-600">
          SOC 2 Type II • ISO 27001 • HIPAA • GDPR
        </p>
      </div>
    </section>
  );
};

export default SecurityPrivacy;

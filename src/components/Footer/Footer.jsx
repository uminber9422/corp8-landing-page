import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord, FaArrowRight, FaShieldAlt, FaAward, FaGlobe, FaHeadset } from 'react-icons/fa';

const Footer = () => {
  const certifications = [
    { name: "SOC 2 Type II", logo: "https://placehold.co/120x40?text=SOC2" },
    { name: "ISO 27001", logo: "https://placehold.co/120x40?text=ISO27001" },
    { name: "GDPR", logo: "https://placehold.co/120x40?text=GDPR" },
    { name: "HIPAA", logo: "https://placehold.co/120x40?text=HIPAA" },
  ];

  return (
    <footer className="bg-white border-t border-neutral-200">
      {/* Enterprise Banner */}
      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-primary-600 to-accent-600 rounded-xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }} />
          </div>

          <div className="relative">
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-flex items-center gap-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-4">
                <FaAward className="w-4 h-4" />
                Enterprise Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Transform Your Enterprise with AI
              </h2>
              <p className="text-white/80 mb-6">
                Join industry leaders using Corp8.ai to drive innovation and efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#" className="inline-flex justify-center items-center gap-x-2 py-3 px-6 sm:px-8 font-semibold rounded-full bg-white text-primary-600 hover:bg-neutral-100 transition-all duration-200">
                  Schedule Enterprise Demo
                  <FaArrowRight className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="inline-flex justify-center items-center gap-x-2 py-3 px-6 sm:px-8 font-semibold rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-200">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-[85rem] mx-auto py-8 px-4 sm:px-6 lg:px-8 border-b border-neutral-200">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="flex justify-center items-center">
              <img src={cert.logo} alt={cert.name} className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[85rem] py-12 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2">
            <a className="flex-none text-xl font-semibold text-black" href="#">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600">Corp8</span>.ai
            </a>
            <p className="mt-4 text-neutral-600">
              Enterprise-grade AI solutions powering the future of business. Secure, scalable, and customizable for your organization's needs.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-x-3">
                <FaShieldAlt className="w-5 h-5 text-primary-600" />
                <span className="text-sm text-neutral-600">Enterprise-grade Security</span>
              </div>
              <div className="flex items-center gap-x-3">
                <FaGlobe className="w-5 h-5 text-primary-600" />
                <span className="text-sm text-neutral-600">Global Infrastructure</span>
              </div>
              <div className="flex items-center gap-x-3">
                <FaHeadset className="w-5 h-5 text-primary-600" />
                <span className="text-sm text-neutral-600">24/7 Enterprise Support</span>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <a className="inline-flex justify-center items-center w-8 h-8 text-center text-neutral-600 hover:text-primary-600 transition" href="#">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a className="inline-flex justify-center items-center w-8 h-8 text-center text-neutral-600 hover:text-primary-600 transition" href="#">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a className="inline-flex justify-center items-center w-8 h-8 text-center text-neutral-600 hover:text-primary-600 transition" href="#">
                <FaGithub className="w-4 h-4" />
              </a>
              <a className="inline-flex justify-center items-center w-8 h-8 text-center text-neutral-600 hover:text-primary-600 transition" href="#">
                <FaDiscord className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900">Solutions</h4>
            <div className="mt-4 flex flex-col gap-3">
              <a className="text-neutral-600 hover:text-primary-600" href="#">Enterprise AI</a>
              <a className="text-neutral-600 hover:text-primary-600" href="#">Industry Solutions</a>
              <a className="text-neutral-600 hover:text-primary-600" href="#">Custom Development</a>
              <a className="text-neutral-600 hover:text-primary-600" href="#">Implementation</a>
              <a className="text-neutral-600 hover:text-primary-600" href="#">Case Studies</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900">Company</h4>
            <div className="mt-4 flex flex-col gap-3">
              <a className="text-neutral-600 hover:text-primary-600" href="#">About Corp8.ai</a>
              <a className="text-neutral-600 hover:text-primary-600" href="#">Leadership</a>
              <a className="text-neutral-600 hover:text-primary-600" href="#">Enterprise Blog</a>
              <a className="text-neutral-600 hover:text-primary-600" href="#">Press Room</a>
              <a className="text-neutral-600 hover:text-primary-600" href="#">Partners</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900">Resources</h4>
            <div className="mt-4 flex flex-col gap-3">
              <a className="text-neutral-600 hover:text-primary-600" href="#">Enterprise Docs</a>
              <a className="text-neutral-600 hover:text-primary-600" href="#">Support Center</a>
              <a className="text-neutral-600 hover:text-primary-600" href="#">Security</a>
              <a className="text-neutral-600 hover:text-primary-600" href="#">API Reference</a>
              <a className="text-neutral-600 hover:text-primary-600" href="#">System Status</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-0 sm:gap-x-6 md:gap-x-8">
          <div className="text-sm text-neutral-600">
            2024 Corp8.ai. All rights reserved.
          </div>
          <div className="flex gap-x-6 text-sm text-neutral-600 justify-start sm:justify-end">
            <a className="hover:text-primary-600" href="#">Privacy Policy</a>
            <a className="hover:text-primary-600" href="#">Terms of Service</a>
            <a className="hover:text-primary-600" href="#">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative overflow-hidden aurora-bg before:absolute before:top-0 before:start-1/2 before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2">
      <style jsx>{`
        @keyframes aurora {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .aurora-bg {
          background: linear-gradient(270deg, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb, #a18cd1, #fad0c4, #ff9a9e);
          background-size: 1400% 1400%;
          animation: aurora 15s ease infinite;
        }
      `}</style>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <a className="inline-flex items-center gap-x-2 bg-white border border-neutral-200 text-sm text-neutral-600 p-2 px-3 rounded-full" href="#">
            Explore Corp8.ai's new AI features
            <span className="flex items-center gap-x-1">
              <span className="border-s border-neutral-200 ps-2">Learn more</span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
        {/* End Announcement Banner */}

        {/* Title */}
        <div className="mt-12 max-w-4xl text-center mx-auto">
          <h1 className="block font-bold text-neutral-800 text-4xl md:text-5xl lg:text-6xl">
            Empower Your Business with 
            <span className="bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 text-transparent"> AI Solutions</span>
          </h1>
        </div>
        {/* End Title */}

        <div className="mt-8 max-w-3xl text-center mx-auto">
          <p className="text-lg text-neutral-600">
            Transform your business operations with Corp8.ai's enterprise-grade AI solutions. Streamline workflows, enhance productivity, and unlock new possibilities with our cutting-edge technology.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-3">
          <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-r from-primary-600 to-primary-700 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6" href="#">
            Get started
            <FaArrowRight className="w-3.5 h-3.5" />
          </a>
          <a className="inline-flex justify-center items-center gap-x-3 text-center bg-white border border-neutral-200 text-sm text-neutral-800 font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white py-3 px-6" href="#">
            <FaPlay className="w-3.5 h-3.5" />
            Watch demo
          </a>
        </div>
        {/* End Buttons */}

        {/* Brands */}
        <div className="mt-16">
          <div className="sm:py-8">
            <div className="sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-lg font-semibold text-neutral-600">
                  Trusted by industry leaders
                </h2>

                <div className="mt-8 relative overflow-hidden">
                  <div className="flex animate-scroll space-x-16">
                    {/* First set of brands */}
                    <div className="flex space-x-16 min-w-full">
                      <div className="flex items-center justify-center">
                        <span className="text-2xl font-bold" style={{ background: 'linear-gradient(to right, #00a4ef, #7fba00, #f25022, #ffb900)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Microsoft</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-2xl font-bold">
                          <span style={{ color: '#4285F4' }}>G</span>
                          <span style={{ color: '#EA4335' }}>o</span>
                          <span style={{ color: '#FBBC05' }}>o</span>
                          <span style={{ color: '#4285F4' }}>g</span>
                          <span style={{ color: '#34A853' }}>l</span>
                          <span style={{ color: '#EA4335' }}>e</span>
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#FF9900]">amazon</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-2xl" style={{ background: 'linear-gradient(to right, #555555, #A2AAAD)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                          <i className="fab fa-apple"></i> Apple
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-2xl font-bold" style={{ background: 'linear-gradient(to right, #0668E1, #3578E5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Meta</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#E31937]">TESLA</span>
                      </div>
                    </div>
                    {/* Duplicate set for seamless scrolling */}
                    <div className="flex space-x-16 min-w-full">
                      <div className="flex items-center justify-center">
                        <span className="text-2xl font-bold" style={{ background: 'linear-gradient(to right, #00a4ef, #7fba00, #f25022, #ffb900)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Microsoft</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-2xl font-bold">
                          <span style={{ color: '#4285F4' }}>G</span>
                          <span style={{ color: '#EA4335' }}>o</span>
                          <span style={{ color: '#FBBC05' }}>o</span>
                          <span style={{ color: '#4285F4' }}>g</span>
                          <span style={{ color: '#34A853' }}>l</span>
                          <span style={{ color: '#EA4335' }}>e</span>
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#FF9900]">amazon</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-2xl" style={{ background: 'linear-gradient(to right, #555555, #A2AAAD)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                          <i className="fab fa-apple"></i> Apple
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-2xl font-bold" style={{ background: 'linear-gradient(to right, #0668E1, #3578E5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Meta</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#E31937]">TESLA</span>
                      </div>
                    </div>
                  </div>
                </div>

                <style jsx>{`
                  @keyframes scroll {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-100%);
                    }
                  }
                  .animate-scroll {
                    animation: scroll 30s linear infinite;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
        {/* End Brands */}
      </div>
    </div>
  );
};

export default Hero;

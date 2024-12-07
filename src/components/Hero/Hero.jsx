import React from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/component/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <a className="inline-flex items-center gap-x-2 bg-white border border-neutral-200 text-sm text-neutral-600 p-2 px-3 rounded-full transition hover:border-neutral-300" href="#">
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
          <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 transition-all" href="#">
            Get started
            <FaArrowRight className="w-3.5 h-3.5" />
          </a>
          <a className="inline-flex justify-center items-center gap-x-3 text-center bg-white hover:bg-neutral-100 border border-neutral-200 text-sm text-neutral-800 font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-6" href="#">
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

                <div className="mt-8 flex justify-center gap-x-6 gap-y-4 sm:gap-x-12 flex-wrap">
                  {/* Replace these with actual brand logos */}
                  <div className="w-24 h-12 py-2 flex justify-center items-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition">
                    <span className="text-xl font-bold text-neutral-400">Brand 1</span>
                  </div>
                  <div className="w-24 h-12 py-2 flex justify-center items-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition">
                    <span className="text-xl font-bold text-neutral-400">Brand 2</span>
                  </div>
                  <div className="w-24 h-12 py-2 flex justify-center items-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition">
                    <span className="text-xl font-bold text-neutral-400">Brand 3</span>
                  </div>
                  <div className="w-24 h-12 py-2 flex justify-center items-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition">
                    <span className="text-xl font-bold text-neutral-400">Brand 4</span>
                  </div>
                </div>
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

import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import awslogo from "../../assets/awslogo.svg";

const Hero = () => {
  return (
    <div
      className="relative overflow-hidden aurora-bg before:absolute before:top-0 before:start-1/2 before:w-full before:h-full before:-z-[1] 
    before:transform before:-translate-x-1/2"
    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 bg-white border border-neutral-200 text-sm text-neutral-600 p-2 px-3 rounded-full"
            href="#"
          >
            Explore Corp8.ai's new AI features
            <span className="flex items-center gap-x-1">
              <span className="border-s border-neutral-200 ps-2">
                Learn more
              </span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
        {/* End Announcement Banner */}

        {/* Title */}
        <div className="mt-12 max-w-4xl text-center mx-auto">
          <h1 className="block font-bold text-neutral-800 text-4xl md:text-5xl lg:text-6xl">
            Transform Your Business with
            <span className="bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 text-transparent">
              {" "}
              AI-Powered Solutions
            </span>
          </h1>
        </div>
        {/* End Title */}

        <div className="mt-8 max-w-3xl text-center mx-auto">
          <p className="text-lg text-neutral-600">
            Transform your business operations with Corp8.ai's enterprise-grade
            AI solutions. Streamline workflows, enhance productivity, and unlock
            new possibilities with our cutting-edge technology.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-3">
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-r from-primary-600 to-primary-700 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6"
            href="#"
          >
            Get started
            <FaArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-white border border-neutral-200 text-sm text-neutral-800 font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white py-3 px-6"
            href="#"
          >
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
      
                </h2>

                {/* Add this new logos section */}
                <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300">
                  <a
                    href="https://aws.amazon.com/startups/"
                    className="flex-shrink-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={awslogo} // Ensure this URL is correct
                      alt="AWS Startups"
                      className="h-12 object-contain"
                    />
                  </a>
                  <a
                    href="https://www.microsoft.com/startups"
                    className="flex-shrink-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      fetchpriority="high"
                      decoding="async"
                      src="https://www.floatingparticle.com/wp-content/uploads/2021/06/nvidia-logo-compressed.svg"
                      alt="NVIDIA logo"
                      class="wp-image-2402"
                      width="150"
                      height="255"
                    ></img>
                  </a>
                  <a
                    href="https://www.nvidia.com"
                    className="flex-shrink-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/663e1523beb298605ebc45d9/66659e7f0449ef4a4cd773d4_logo_microsoft_for_startups.png"
                      jsaction=""
                      class="sFlh5c FyHeAf iPVvYb"
                      width="150"
                      height="255"
                   
                      alt="HIGO TECHS joins the Microsoft for Startups program"
                      jsname="kn3ccd"
                      aria-hidden="false"
                    ></img>
                  </a>
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

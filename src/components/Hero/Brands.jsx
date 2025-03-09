import React from "react";
import awslogo from "../../assets/awslogo.svg";

const Brands = () => {
  return (
    <div className="mt-16">
      <div className="sm:py-8">
        <div className="sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-neutral-600"></h2>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300">
              <a
                href="https://aws.amazon.com/startups/"
                className="flex-shrink-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={awslogo}
                  alt="AWS Startups"
                  className="h-12 object-contain"
                />
              </a>
              <a
                href="https://www.nvidia.com"
                className="flex-shrink-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.prod.website-files.com/663e1523beb298605ebc45d9/66659e7f0449ef4a4cd773d4_logo_microsoft_for_startups.png"
                  className="sFlh5c FyHeAf iPVvYb"
                  width="150"
                  height="255"
                  alt="Microsoft for Startups program"
                  aria-hidden="false"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;

import React from "react";

const HeroTitle = () => {
  return (
    <div className="mt-12 max-w-4xl text-center mx-auto">
      <h1 className="block font-bold text-neutral-800 text-4xl md:text-5xl lg:text-6xl">
        Transform Your Business with
        <span className="bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 text-transparent">
          {" "}
          AI-Powered Solutions
        </span>
      </h1>
    </div>
  );
};

export default HeroTitle;

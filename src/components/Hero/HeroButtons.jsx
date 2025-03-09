import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";

const HeroButtons = () => {
  return (
    <div className="mt-10 flex justify-center gap-3">
      <a
        className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-r from-primary-600 to-primary-700 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6"
        href="https://app.corp8.ai/"
      >
        Get started
        <FaArrowRight className="w-3.5 h-3.5" />
      </a>
      {/* <a
        className="inline-flex justify-center items-center gap-x-3 text-center bg-white border border-neutral-200 text-sm text-neutral-800 font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white py-3 px-6"
            href="https://wa.me/8200793896?text=I%20want%20to%20get%20a%20demo%20of%20Corp8%20AI"
      >
        <FaPlay className="w-3.5 h-3.5" />
        Watch demo
      </a> */}
    </div>
  );
};

export default HeroButtons;

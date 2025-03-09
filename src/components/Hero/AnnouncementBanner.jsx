import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AnnouncementBanner = () => {
  return (
    <div className="flex justify-center">
      <a
        className="inline-flex items-center gap-x-2 bg-white border border-neutral-200 text-sm text-neutral-600 p-2 px-3 rounded-full"
        href="https://www.linkedin.com/feed/update/urn:li:activity:7288117510954962945/?actorCompanyId=105745134"
      >
        Explore Corp8.ai's new AI collaboration
        <span className="flex items-center gap-x-1">
          <span className="border-s border-neutral-200 ps-2">Learn more</span>
          <FaArrowRight className="w-3.5 h-3.5" />
        </span>
      </a>
    </div>
  );
};

export default AnnouncementBanner;

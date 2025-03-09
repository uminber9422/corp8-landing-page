import React from "react";
import AnnouncementBanner from "./AnnouncementBanner";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import Brands from "./Brands";

const Hero = () => {
  return (
    <div
      className="relative overflow-hidden aurora-bg before:absolute before:top-0 before:start-1/2 before:w-full before:h-full before:-z-[1] 
    before:transform before:-translate-x-1/2"
    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <AnnouncementBanner />
        <HeroTitle />
        <HeroDescription />
        <HeroButtons />
        <Brands />
      </div>
    </div>
  );
};

export default Hero;

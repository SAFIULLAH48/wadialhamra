import React from "react";
import SliderComponent from "../components/resuablecomponents/Slider";

const Ourrecentprojects = () => {
  return (
    <div className="my-16 sm:my-24 lg:my-32 px-4 sm:px-10 lg:px-28">
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-xl sm:text-2xl md:text-subheading font-subheading font-bold text-custom-black mr-2">
            OUR RECENT
          </span>
          <span className="text-xl sm:text-2xl md:text-subheading font-subheading font-bold text-custom-red">
            PROJECTS
          </span>
        </div>
      </div>
      <div className="w-full">
        <SliderComponent />
      </div>
    </div>
  );
};

export default Ourrecentprojects;

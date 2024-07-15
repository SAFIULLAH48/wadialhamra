import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contactcard = ({ title, subtitle, className }) => {
  return (
    <div className={`inline-block border-l-4 border-l-custom-red shadow-md shadow-slate-300 sm:w-72 md:w-96 lg:w-[50%] xl:w-[40%] 2xl:w-[30%] hover:border-b-4 border-b-custom-red ${className}`}>
      <div className="flex flex-col items-center justify-center py-4 gap-10 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="h-6 w-6 text-custom-red"
        />
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-xl font-paragraph text-custom-black font-semibold">
            {title}
          </span>
          <span className='text-[0.7rem] sm:text-sm md:text-base font-paragraph text-custom-black text-center line-clamp-3 h-14'>
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contactcard;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Servicecard = (props) => {
  return (
    <div className="relative flex flex-col items-center border rounded-xl shadow-xl p-5 overflow-hidden group bg-white h-full">
      {/* Background color transition effect */}
      <div className="absolute left-0 top-0 bottom-0 bg-red-800 w-0 transition-all duration-700 group-hover:w-full"></div>
      {/* FontAwesome Icon */}
      <FontAwesomeIcon
        icon={faHome}
        className="text-white rounded-xl hover:bg-black transition duration-300 bg-red-800 mt-12 mb-8 relative z-10 text-4xl"
      />
      {/* Subheading */}
      <p className="text-custom-red font-bold text-lg relative z-10 group-hover:text-white mb-2">
        {props.subheading}
      </p>
      {/* Paragraph */}
      <p
        className="text-custom-grey text-justify relative z-10 group-hover:text-white"
        style={{ letterSpacing: "0.06em", wordSpacing: "0.2em" }}
      >
        {props.paragraph}
      </p>
    </div>
  );
};

export default Servicecard;

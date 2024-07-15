import React from "react";
import Contactcard from "../components/resuablecomponents/Contactcard";

const Contactus = () => {
  return (
    <div>
      <div className="flex items-center gap-2 justify-center my-5">
        <span className="text-black font-heading font-bold text-2xl sm:text-3xl md:text-4xl">
          CONTACT
        </span>
        <span className="text-custom-red font-heading font-bold text-2xl sm:text-3xl md:text-4xl">
          US
        </span>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 my-7 mx-5 sm:mx-16 md:mx-28">
        <Contactcard
          title="PHONE:"
          subtitle="+971 55 619 6465"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
        />
        <Contactcard
          title="E-MAIL:"
          subtitle="abidbangash@gmail.com"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
        />
        <Contactcard
          title="ADDRESS:"
          subtitle="Abu Dhabi"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
        />
      </div>
    </div>
  );
};

export default Contactus;

import React from "react";
import mksmart from '../assets/mksmart.jfif';

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-20 mx-4 sm:mx-10 lg:mx-28 mt-10 sm:mt-16 lg:mt-28">
      <div className="flex flex-col mt-8 sm:mt-16 sm:w-1/2">
        <img className="w-full h-auto mx-auto sm:ml-0 sm:max-w-full lg:max-w-full" src={mksmart} alt="error" />
      </div>
      <div className="sm:w-1/2">
        <div className="flex justify-center mb-5">
          <span className="text-subheading font-subheading text-custom-black font-bold">
            ABOUT
          </span>
          <span className="text-subheading font-subheading text-custom-red font-bold">
            US
          </span>
        </div>
        <p className="text-paragraph font-paragraph text-custom-grey text-justify w-full">
          Welcome to Wadi Al Hamra, your trusted partner in marble and stone
          fitting solutions in Abu Dhabi. Established in 2020, we take pride in
          being a registered and reputable company dedicated to delivering
          unparalleled craftsmanship and service excellence. At Wadi Al Hamra,
          our vision is to set new standards in the marble and fitting industry,
          and our mission is to bring your architectural visions to life with
          precision and elegance. With years of experience, our team of skilled
          professionals ensures that every project, big or small, is executed
          with the utmost attention to detail and quality. Committed to customer
          satisfaction, we go beyond expectations to create spaces that stand as
          a testament to our dedication and expertise. Wadi Al Hamra is not just
          a company; it's a promise of outstanding craftsmanship and a
          commitment to shaping spaces that resonate with timeless beauty. Join
          us in the journey of transforming spaces with the artistry of marble
          and stone at Wadi Al Hamra.
        </p>
      </div>
    </div>
  );
};

export default About;

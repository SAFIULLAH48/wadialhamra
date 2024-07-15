import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail, IoMdTime } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between gap-8 md:gap-16 lg:gap-24">
          {/* Contact Information Section */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col justify-between gap-5">
                <div className="flex items-center gap-4">
                  <FaPhone size={20} color="red" />
                  <p className="text-sm">+971 55 619 6465</p>
                </div>
                <div className="flex items-center gap-4">
                  <IoLocationSharp size={20} color="red" />
                  <p className="text-xs md:text-sm">Abu Dhabi</p> {/* Updated location */}
                </div>
                <div className="flex items-center gap-4">
                  <IoMdMail size={20} color="red" />
                  <p className="text-xs md:text-sm">abidbangash@.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Open Hours Section */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="font-bold text-lg mb-4">Open Hours</h4>
            <div className="flex flex-col gap-2">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"].map((day) => (
                <div className="flex items-center justify-between" key={day}>
                  <span className="flex items-center gap-2">
                    <IoMdTime size={23} color="red" />
                    <span className="text-xs md:text-sm">{day}</span>
                  </span>
                  <p className="text-sm ml-2">9am - 6pm</p>
                </div>
              ))}
            </div>
          </div>

          {/* Google Map Section */}
          <div className="w-full md:w-1/3">
            <div className="mt-4 md:mt-9" style={{ maxWidth: "100%" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.4327008836013!2d54.36452221510941!3d24.4538660833982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67ee23b3fdd5%3A0x2b1a09b7347818d5!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1626345061580!5m2!1sen!2sae"
                width="100%"
                height="150"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

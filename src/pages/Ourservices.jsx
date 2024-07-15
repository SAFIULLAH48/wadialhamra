import React from "react";
import Servicecard from "../components/resuablecomponents/Servicecard";

// Define the services data
const services = [
  {
    subheading: "Kitchen Countertops",
    paragraph: "Transform your kitchen into a masterpiece with our premium marble and granite countertops. At Wadi Al Hamra, we offer a wide variety of elegant stone options to suit every taste and style. Our countertops are meticulously crafted to provide both beauty and durability, making them ideal for the heart of your home. Whether you prefer the sleek, modern look of polished granite or the timeless elegance of classic marble, our expert installation ensures a perfect fit. From intricate edge designs to custom island countertops, our solutions will elevate your kitchen's functionality and aesthetic appeal.",
  },
  {
    subheading: "Bathroom Vanities and Countertops",
    paragraph: "Elevate your bathroom with our luxurious marble and granite vanities and countertops. Our services are designed to bring a touch of sophistication and functionality to your personal retreat. We specialize in creating custom vanities that blend seamlessly with your bathroom’s decor, offering a range of styles from contemporary to traditional. Our stone countertops not only enhance the visual appeal but also provide a durable and easy-to-maintain surface. With our attention to detail and expert installation, your bathroom will exude elegance and comfort, turning your daily routine into a lavish experience.",
  },
  {
    subheading: "Living Room Feature Walls",
    paragraph: "Create a striking focal point in your living room with our custom stone feature walls. At Wadi Al Hamra, we understand that a feature wall can transform your living space, adding texture, color, and depth to your interiors. Choose from an array of marble and granite options to achieve the look that best suits your style, whether it's a dramatic, high-contrast feature or a subtle, sophisticated design. Our team of experts will ensure precise installation, enhancing your living room's ambiance and making it a true reflection of your personal taste and design vision.",
  },
  {
    subheading: "Exterior Facade Cladding",
    paragraph: "Enhance the curb appeal of your property with our exterior stone facade cladding services. Our facade solutions not only provide a stunning visual impact but also offer long-lasting protection against the elements. From sleek modern finishes to rustic textures, our range of marble and granite options can be customized to complement any architectural style. We use high-quality materials and precise installation techniques to ensure your building’s exterior stands out and endures through time. With Wadi Al Hamra, your facade will reflect both elegance and durability, making a lasting impression on visitors and passersby.",
  },
  {
    subheading: "Outdoor Patios and Walkways",
    paragraph: "Transform your outdoor spaces with our exquisite marble and stone patio and walkway installations. At Wadi Al Hamra, we specialize in creating beautiful and functional outdoor areas that enhance your property's landscape. Whether you're looking for a serene patio for relaxation or a stylish walkway to connect different areas of your garden, our selection of high-quality stones offers durability and aesthetic appeal. Our expert installation ensures a flawless finish that withstands the elements while adding a touch of luxury to your outdoor environment.",
  },
  {
    subheading: "Commercial Office Flooring",
    paragraph: "Upgrade your commercial space with our premium stone flooring solutions. Our marble and granite flooring options are perfect for high-traffic areas, offering both elegance and resilience. Whether you’re designing a modern office, a luxurious reception area, or a stylish retail space, our flooring solutions provide a sophisticated look that enhances the professional environment. We ensure meticulous installation to meet the highest standards, delivering a floor that not only enhances the visual appeal of your space but also stands up to the demands of daily use.",
  },
];

const Ourservices = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col items-center gap-2">
        <div className="text-black font-heading font-bold text-2xl">
          OUR
        </div>
        <div className="text-custom-red font-heading font-bold text-2xl">
          SERVICES
        </div>
        <div className="text-custom-grey text-lg text-center mt-2">
          The Services We Offer Are ...
        </div>
      </div>

      <div className="flex flex-col gap-4 mx-4 sm:mx-8 mt-7 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {services.map((service, index) => (
            <div key={index}>
              <Servicecard
                subheading={service.subheading}
                paragraph={service.paragraph}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourservices;

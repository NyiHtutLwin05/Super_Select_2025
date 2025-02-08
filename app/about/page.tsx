import React from "react";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      {" "}
      <div className=" flex justify-evenly mt-5">
        <div className=" w-[25%]">
          <h1
            className=" text-2xl font-monument font-5xl w-20  text-secondary-text"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            About Company
          </h1>
          <p
            className=" font-sfPro mt-4"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Trusted Interior & Exterior Glass decoration firm by Experienced
            Glass Professionals. We formed & established in 2006, specialized in
            Glass Partition and Installation for home and office.
          </p>
        </div>
        <div className=" w-[25%] flex flex-col text-right items-center">
          <h1
            className=" text-2xl font-monument font-5xl w-20  text-secondary-text 
     "
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            About Factory
          </h1>
          <p
            className=" font-sfPro mt-4 "
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            At our glass factory, we specialize in the production of tempered
            glass and a variety of other glass products. Our tempered glass
            machine is certified by ISO. In addition to tempered glass, we also
            produce laminated glass and double-glazed glass. We also offer
            custom services such as cutting, edging, drilling, and printing to
            meet the specific needs of our customers.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default page;

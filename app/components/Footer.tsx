import React from "react";

const Footer = () => {
  const CurrentYear = new Date().getFullYear();

  return (
    <div className="flex justify-center">
      <footer className=" mt-7 mb-2 absolute bottom-0">
        <p className=" text-secondary-text font-light font-serif">
          &copy; {CurrentYear} All rights reserved. Created by Nyi Htut.
        </p>
      </footer>
    </div>
  );
};

export default Footer;

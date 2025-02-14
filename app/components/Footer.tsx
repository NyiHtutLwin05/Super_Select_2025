import React from "react";

const Footer = () => {
  const CurrentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-[#E2EDEE] dark:bg-secondary">
      <footer className="mb-2">
        <p className="text-center text-secondary-text font-light font-serif">
          &copy; {CurrentYear} All rights reserved. Created by Nyi Htut.
        </p>
      </footer>
    </div>
  );
};

export default Footer;

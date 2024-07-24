"use client";

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 py-4 text-center">
      <p>
        &copy; {currentYear} Developed by{" "}
        <a
          href="https://www.ninjahub.io"
          className="text-blue-500 hover:underline"
        >
          NinjaHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darkGray text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Calendar App. All rights reserved.
        </p>
        <p>Contact us: support@calendarapp.com</p>
      </div>
    </footer>
  );
};

export default Footer;

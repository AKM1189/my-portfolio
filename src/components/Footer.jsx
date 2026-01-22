import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 text-center">
      <p>&copy; {new Date().getFullYear()} Aung Kaung Myat. All rights reserved.</p>
      <div className="flex justify-center gap-5 mt-3">
        <a href="#" className="hover:text-indigo-600"><i className="fa-brands fa-facebook"></i></a>
        <a href="#" className="hover:text-indigo-600"><i className="fa-brands fa-github"></i></a>
        <a href="#" className="hover:text-indigo-600"><i className="fa-brands fa-linkedin"></i></a>
      </div>
    </footer>
  );
};

export default Footer;

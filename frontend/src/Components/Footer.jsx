import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black text-white p-3">
      <div className="md:flex justify-center mt-2 md:p-0 pt-8 ">
        <div className="text-center mx-2">
          <NavLink to="/about" className="text-white hover:text-indigo-600">
            About Us
          </NavLink>
        </div>
        <div className="text-center mx-2">
          <NavLink to="/policy" className="text-white hover:text-indigo-600">
            Policy
          </NavLink>
        </div>
        <div className="text-center mx-2">
          <NavLink to="/contact" className="text-white hover:text-indigo-600">
            Contact Us
          </NavLink>
        </div>
      </div>
      <h4 className="text-center pt-2">All Right Reserved &copy; Prasad</h4>
    </div>
  );
}

export default Footer;

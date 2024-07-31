import React from "react";
import { Link } from "react-router-dom";

const ManagmentHead = () => {
  return (
    <div className="about-bg xl:px-20  px-10 py-16 w-full">
      <h2 className="relative z-10 text-2xl font-bold text-[#fff]">
        MANAGEMENT
      </h2>
      <div className="relative z-10 flex space-x-4 py-4 text-[#fff]">
        <Link to="/">
          <p className="hover:text-[#828E4C] duration-300 cursor-pointer">
            HOME
          </p>
        </Link>
        <p>-</p>
        <p> MANAGEMENT</p>
      </div>
    </div>
  );
};

export default ManagmentHead;

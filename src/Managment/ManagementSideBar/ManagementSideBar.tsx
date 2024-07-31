import React from "react";
import { Link } from "react-router-dom";

const ManagementSideBar = () => {
  return (
    <div className="">
      <div className="lg:w-[60vh] w-full border px-4 py-4">
        <h2 className=" text-lg font-semibold border-b-2 border-b-[#828e4c42] py-2">
          Manage Products
        </h2>

        <div className="space-y-2 py-2 mt-4 cursor-pointer font-medium text-[#5c5a5a]">
          <div>
            <Link to="/management">
              <p className="hover:text-[#828E4C] duration-300">Add Products</p>
            </Link>
          </div>
          <div>
            <Link to="/management/products">
              <p className="hover:text-[#828E4C] duration-300">
                Manage Products
              </p>
            </Link>
          </div>
          <div>
            <Link to="/management/payment">
              <p className="hover:text-[#828E4C] duration-300">
                Manage Payment
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementSideBar;

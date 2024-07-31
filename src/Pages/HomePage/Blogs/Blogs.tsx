import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";

import { IoMdArrowRoundForward } from "react-icons/io";

import img from "../../../assets/img/blog1.jpg";
import img2 from "../../../assets/img/blog2.jpg";
import img3 from "../../../assets/img/blog3.jpg";

const Blogs = () => {
  return (
    <div className="xl:px-20 px-8 bg-[#EFEFE3] w-full py-12">
      <h2 className="text-xl font-semibold py-2 text-[#828E4C]">
        OUR NEWS AND ARTICLES
      </h2>
      <p className="lg:w-[50%] md:w-[60%] w-full text-[#14px] text-[#26262691]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione porro
        maxime itaque aliquid perferendis! Vel commodi.
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 py-6 mt-6">
        <div className="border border-[#E4E5D4] group cursor-pointer hover:border-[#828e4c50] duration-300">
          <div className="overflow-hidden">
            <img
              className="group-hover:scale-110 overflow-hidden duration-300 w-full"
              src={img}
              alt=""
            />
          </div>

          <div>
            <div className="grid grid-cols-2">
              <button className="flex items-center space-x-2 bg-[#828E4C] text-[#fff] py-3 lg:px-6 md:px-6 sm:px-4 px-2 text-[14px] font-medium">
                <span>
                  <FaRegCalendarAlt />
                </span>
                <span>28 JUN, 2020</span>
              </button>
              <button className="flex items-center space-x-2 bg-[#fff] text-[#262626] py-3 lg:px-6 md:px-6 sm:px-4 px-2 text-[14px] font-medium">
                <span className="text-[#828E4C]">
                  <FaRegComment />
                </span>
                <span>3 COMMENTS</span>
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold">
                We Won The Best Indoor Planets Design
              </h2>
              <p className="py-3 text-[#262626a6]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
              <button className="flex items-center space-x-1 font-semibold text-[#828E4C] hover:text-[#262626] duration-300">
                <span>READ MORE</span>{" "}
                <span>
                  <IoMdArrowRoundForward />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="border border-[#E4E5D4] group cursor-pointer hover:border-[#828e4c50] duration-300">
          <div className="overflow-hidden">
            <img
              className="group-hover:scale-110 overflow-hidden duration-300 w-full"
              src={img2}
              alt=""
            />
          </div>

          <div>
            <div className="grid grid-cols-2">
              <button className="flex items-center space-x-2 bg-[#828E4C] text-[#fff] py-3 lg:px-6 md:px-6 sm:px-4 px-2 text-[14px] font-medium">
                <span>
                  <FaRegCalendarAlt />
                </span>
                <span>28 JUN, 2020</span>
              </button>
              <button className="flex items-center space-x-2 bg-[#fff] text-[#262626] py-3 lg:px-6 md:px-6 sm:px-4 px-2 text-[14px] font-medium">
                <span className="text-[#828E4C]">
                  <FaRegComment />
                </span>
                <span>3 COMMENTS</span>
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold">
                Landscaping Mistakes How to Avoid Them
              </h2>
              <p className="py-3 text-[#262626a6]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
              <button className="flex items-center space-x-1 font-semibold text-[#828E4C] hover:text-[#262626] duration-300">
                <span>READ MORE</span>{" "}
                <span>
                  <IoMdArrowRoundForward />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="border border-[#E4E5D4] group cursor-pointer hover:border-[#828e4c50] duration-300">
          <div className="overflow-hidden">
            <img
              className="group-hover:scale-110 overflow-hidden duration-300 w-full"
              src={img3}
              alt=""
            />
          </div>

          <div>
            <div className="grid grid-cols-2">
              <button className="flex items-center space-x-2 bg-[#828E4C] text-[#fff] py-3 lg:px-6 md:px-6 sm:px-4 px-2 text-[14px] font-medium">
                <span>
                  <FaRegCalendarAlt />
                </span>
                <span>28 JUN, 2020</span>
              </button>
              <button className="flex items-center space-x-2 bg-[#fff] text-[#262626] py-3 lg:px-6 md:px-6 sm:px-4 px-2 text-[14px] font-medium">
                <span className="text-[#828E4C]">
                  <FaRegComment />
                </span>
                <span>3 COMMENTS</span>
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold">
                Keeping Rodents & More Out of Your Lawn
              </h2>
              <p className="py-3 text-[#262626a6]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
              <button className="flex items-center space-x-1 font-semibold text-[#828E4C] hover:text-[#262626] duration-300">
                <span>READ MORE</span>{" "}
                <span>
                  <IoMdArrowRoundForward />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

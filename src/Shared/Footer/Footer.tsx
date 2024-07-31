import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

import logo from "../../assets/img/logo-white.png";
import img from "../../assets/img/blog1.jpg";
import img2 from "../../assets/img/blog2.jpg";

const Footer = () => {
  return (
    <div className="xl:px-20 px-16 bg-[#222222] w-full py-16 text-[#fff]">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        <div>
          <div className="w-[25vh] h-[12vh]">
            <img src={logo} alt="" />
          </div>

          <div className="space-y-4 my-4">
            <p className="flex items-start text-md space-x-2">
              <span>
                <FaMapMarkerAlt />
              </span>

              <span>Mirpur-1, Dhaka Bangladesh</span>
            </p>
            <p className="flex items-center text-md space-x-2">
              <span>
                <MdOutlineMail />
              </span>

              <span>Email : almamon@gmail.com</span>
            </p>
            <p className="flex items-center text-md space-x-2">
              <span>
                <FaPhone />
              </span>

              <span>Phone: +8801746770324</span>
            </p>
            <p></p>
          </div>
        </div>

        <div className="mt-4">
          <div>
            <h2 className="text-xl font-semibold">Our Products</h2>
          </div>

          <div className="space-y-4 my-6">
            <p className="flex items-center text-md space-x-2">
              <span>
                <IoIosArrowForward />
              </span>

              <span>Indoor Plant</span>
            </p>
            <p className="flex items-center text-md space-x-2">
              <span>
                <IoIosArrowForward />
              </span>

              <span>Outdoor Plant</span>
            </p>
            <p className="flex items-center text-md space-x-2">
              <span>
                <IoIosArrowForward />
              </span>

              <span>Money Plant</span>
            </p>

            <p className="flex items-center text-md space-x-2">
              <span>
                <IoIosArrowForward />
              </span>

              <span>Flower Plant</span>
            </p>

            <p className="flex items-center text-md space-x-2">
              <span>
                <IoIosArrowForward />
              </span>

              <span>Natural Plant</span>
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div>
            <h2 className="text-xl font-semibold">Useful Links</h2>
          </div>

          <div className="space-y-4 my-6">
            <p className="flex items-center text-md space-x-2">
              <span>
                <IoIosArrowForward />
              </span>

              <span>Home</span>
            </p>
            <p className="flex items-center text-md space-x-2">
              <span>
                <IoIosArrowForward />
              </span>

              <span>About us</span>
            </p>
            <p className="flex items-center text-md space-x-2">
              <span>
                <IoIosArrowForward />
              </span>

              <span>Contact Us</span>
            </p>

            <p className="flex items-center text-md space-x-2">
              <span>
                <IoIosArrowForward />
              </span>

              <span>Our Team</span>
            </p>

            <p className="flex items-center text-md space-x-2">
              <span>
                <IoIosArrowForward />
              </span>

              <span>Services</span>
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div>
            <h2 className="text-xl font-semibold">Recent Posts</h2>
          </div>

          <div className="space-y-4 my-6">
            <div className="flex items-center space-x-3">
              <div>
                <img className="w-[28vh]" src={img} alt="" />
              </div>

              <div>
                <p className="text-[12px] font-semibold text-[#828E4C]">
                  28 JUN, 2020
                </p>
                <h2 className="py-1 font-medium text-sm">
                  We Won The Best Indoor Planets Design
                </h2>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div>
                <img className="w-[28vh]" src={img2} alt="" />
              </div>

              <div>
                <p className="text-[12px] font-semibold text-[#828E4C]">
                  28 JUN, 2020
                </p>
                <h2 className="py-1 font-medium text-sm">
                  Landscaping Mistakes How to Avoid Them
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

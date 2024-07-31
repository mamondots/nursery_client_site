import React from "react";
import { FaUsers } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { CiGift } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";

const Facility = () => {
  return (
    <div className="xl:px-20 px-16 bg-[#EFEFE3] w-full py-16">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        <div className="text-center flex flex-col items-center gap-2 group cursor-pointer">
          <p className="text-[#828E4C] text-2xl font-bold bg-[#E4E5D4] group-hover:bg-[#828E4C] group-hover:text-[#fff] duration-300 px-3 py-3 rounded-full">
            <FaUsers />
          </p>
          <div className="">
            <h2 className="text-md font-medium py-1">24 X 7 Free Support</h2>
            <p className="text-[14px] text-[#26262677]">
              Passage Of Lorem Ipsum, You Need To Be Amet Embarrassing.
            </p>
          </div>
        </div>

        <div className="text-center flex flex-col items-center gap-2 group cursor-pointer">
          <p className="text-[#828E4C] text-2xl font-bold bg-[#E4E5D4] group-hover:bg-[#828E4C] group-hover:text-[#fff] duration-300 px-3 py-3 rounded-full">
            <TbTruckDelivery />
          </p>
          <div className="">
            <h2 className="text-md font-medium py-1">
              Free Worldwide Shipping
            </h2>
            <p className="text-[14px] text-[#26262677]">
              Passage Of Lorem Ipsum, You Need To Be Amet Embarrassing.
            </p>
          </div>
        </div>

        <div className="text-center flex flex-col items-center gap-2 group cursor-pointer">
          <p className="text-[#828E4C] text-2xl font-bold bg-[#E4E5D4] group-hover:bg-[#828E4C] group-hover:text-[#fff] duration-300 px-3 py-3 rounded-full">
            <AiFillDollarCircle />
          </p>
          <div className="">
            <h2 className="text-md font-medium py-1">Money Back Guarantee</h2>
            <p className="text-[14px] text-[#26262677]">
              Passage Of Lorem Ipsum, You Need To Be Amet Embarrassing.
            </p>
          </div>
        </div>

        <div className="text-center flex flex-col items-center gap-2 group cursor-pointer">
          <p className="text-[#828E4C] text-2xl font-bold bg-[#E4E5D4] group-hover:bg-[#828E4C] group-hover:text-[#fff] duration-300 px-3 py-3 rounded-full">
            <CiGift />
          </p>
          <div className="">
            <h2 className="text-md font-medium py-1">Win $100 To Shop</h2>
            <p className="text-[14px] text-[#26262677]">
              Passage Of Lorem Ipsum, You Need To Be Amet Embarrassing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;

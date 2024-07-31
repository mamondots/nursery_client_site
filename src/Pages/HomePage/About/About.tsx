import React from "react";
import about from "../../../assets/img/aboutus.jpg";

const About = () => {
  return (
    <div className="xl:px-20 px-16 bg-[#fff] w-full py-16">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="border border-[#828e4c42] p-2 rounded-sm">
          <img className="rounded-sm" src={about} alt="" />
        </div>

        <div>
          <h2 className="text-[#828E4C] font-semibold">ABOUT US</h2>
          <h2 className="py-2 lg:text-3xl md:text-3xl sm:text-2xl text-xl font-medium lg:w-[90vh] w-full">
            A Sanctuary for Plant Enthusiasts and Nature Lovers
          </h2>
          <p className="text-[14px] text-[#26262685] py-1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis. Sed ut perspiciatis unde omnis
            iste natus error.
          </p>

          <div className="flex flex-col gap-6 mt-12">
            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-base font-semibold text-[#262626] tracking-[2px]">
                  INDOOR PLANT
                </h2>
                <p className="lg:text-md md:text-md sm:text-md text-base font-semibold text-[#262626]">
                  90%
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[90%] h-[3px] bg-[#828E4C]"></div>
                <div className=" h-[12px] w-[12px] bg-[#828E4C]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-base font-semibold text-[#262626] tracking-[2px]">
                  HANGING PLANT
                </h2>
                <p className="lg:text-md md:text-md sm:text-md text-base font-semibold text-[#262626]">
                  80%
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[80%] h-[3px] bg-[#828E4C]"></div>
                <div className=" h-[12px] w-[12px] bg-[#828E4C]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-base font-semibold text-[#262626] tracking-[2px]">
                  MONEY PLANT
                </h2>
                <p className="lg:text-md md:text-md sm:text-md text-base font-semibold text-[#262626]">
                  70%
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[70%] h-[3px] bg-[#828E4C]"></div>
                <div className=" h-[12px] w-[12px] bg-[#828E4C]"></div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button className="py-3 px-6 bg-[#262626] text-[#fff] font-medium text-[14px] tracking-[2px]">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

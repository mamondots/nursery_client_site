import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import img from "../../../assets/img/testimonial-1.jpg";
import img2 from "../../../assets/img/testimonial-2.jpg";
import img3 from "../../../assets/img/testimonial-3.jpg";

const Testimonal = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-[#EFEFE3] xl:px-20 lg:px-16 md:px-16 w-full pb-12">
      <div className="lg:flex mt-[-8vh] relative z-10">
        <div className="lg:w-2/4 w-full bg-[#828E4C] lg:px-8 lg:py-8 p-6">
          <h2 className="lg:text-2xl md:text-2xl sm:text-2xl text-xl font-semibold text-[#fff] leading-[40px]">
            We are trusted by 1020+ Customer.
          </h2>
          <p className="py-4 text-[#ffffffa1]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu
            santium doloremque.
          </p>
          <button className="py-3 px-6 bg-[#fff] hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer text-[#262626] font-semibold text-[14px] my-2">
            VIEW ALL REVIEWS
          </button>
        </div>
        <div className="bg-[#fff] lg:w-3/4 w-full lg:p-16 md:p-16 p-8">
          <Slider {...settings}>
            <div className="">
              <div className="flex items-center justify-between">
                <div className="flex text-[#828E4C] space-x-1 text-lg">
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                </div>
                <div>
                  <p className="text-[#828E4C] text-xl">
                    <FaQuoteRight />
                  </p>
                </div>
              </div>
              <p className="py-4 text-lg font-medium">
                “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae.”
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-[12vh] h-[12vh]">
                  <img src={img} alt="" />
                </div>

                <div>
                  <h2 className="text-[#828E4C] text-lg font-semibold capitalize">
                    john doerr
                  </h2>
                  <p className="font-bold">- Developer</p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex items-center justify-between">
                <div className="flex text-[#828E4C] space-x-1 text-lg">
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                </div>
                <div>
                  <p className="text-[#828E4C] text-xl">
                    <FaQuoteRight />
                  </p>
                </div>
              </div>
              <p className="py-4 text-lg font-medium">
                “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae.”
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-[12vh] h-[12vh]">
                  <img src={img2} alt="" />
                </div>

                <div>
                  <h2 className="text-[#828E4C] text-lg font-semibold capitalize">
                    maria jakson
                  </h2>
                  <p className="font-bold">- Softwear Developer</p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex items-center justify-between">
                <div className="flex text-[#828E4C] space-x-1 text-lg">
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                </div>
                <div>
                  <p className="text-[#828E4C] text-xl">
                    <FaQuoteRight />
                  </p>
                </div>
              </div>
              <p className="py-4 text-lg font-medium">
                “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae.”
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-[12vh] h-[12vh]">
                  <img src={img3} alt="" />
                </div>

                <div>
                  <h2 className="text-[#828E4C] text-lg font-semibold capitalize">
                    prity khan
                  </h2>
                  <p className="font-bold">- UI/UX Designer</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;

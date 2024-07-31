import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Home.css";
import { FaPlay } from "react-icons/fa";
import VideoOne from "./Videoes/VideoOne";
import VideoTwo from "./Videoes/VideoTwo";
import { Link } from "react-router-dom";

const Home = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [isVideo, setIsVideo] = useState(false);
  const [isVideo2, setIsVideo2] = useState(false);
  return (
    <div>
      <Slider {...settings}>
        <div className="slider-img-one lg:px-20 md:px-16 sm:px-12 px-12 py-20">
          <div>
            <div className="flex items-center uppercase text-white gap-3 font-semibold">
              <p className="tracking-[2px]">instant.</p>
              <p className="tracking-[2px]">simple.</p>
              <p className="tracking-[2px]">smart</p>
            </div>

            <div className="py-4">
              <h2 className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-semibold xl:w-[90vh] w-full  text-white xl:leading-[3rem] lg:leading-[3rem] md:leading-[3rem]">
                Nursery Receives Grant to Enhance Outdoor Learning Spaces
              </h2>
              <p className="py-4 xl:w-[90vh] w-full text-[#ffffffaf] text-[14px]">
                Colors burst from every bed, Sunflowers tall, petals spread.
                Laughter rings through morning air, Children tending plants with
                care
              </p>
              <div className="xl:flex lg:flex md:flex flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col items-start gap-6 py-2">
                <Link to="/about">
                  <button className="py-4 px-8 bg-[#fff] hover:bg-[#828E4C] hover:text-[#fff] duration-300 text-[#262626] head-text font-medium text-sm">
                    Discover More
                  </button>
                </Link>
                <div
                  onClick={() => setIsVideo2(true)}
                  className="flex items-center space-x-2"
                >
                  <button className="px-5 py-5 bg-[#fff] rounded-full text-[#828E4C] hover:bg-[#828E4C] hover:text-white duration-300">
                    <span>
                      <FaPlay></FaPlay>
                    </span>
                  </button>
                  <p className="head-text font-bold text-sm text-[#fff] uppercase">
                    play more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-img-two lg:px-20 md:px-16 sm:px-12 px-12 py-20">
          <div>
            <div className="flex items-center uppercase text-white gap-3 font-semibold">
              <p className="tracking-[2px]">instant.</p>
              <p className="tracking-[2px]">simple.</p>
              <p className="tracking-[2px]">smart</p>
            </div>

            <div className="py-4">
              <h2 className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-semibold xl:w-[90vh] w-full  text-white xl:leading-[3rem] lg:leading-[3rem] md:leading-[3rem]">
                Nursery Receives Grant to Enhance Outdoor Learning Spaces
              </h2>
              <p className="py-4 xl:w-[90vh] w-full text-[#ffffffaf] text-[14px]">
                Colors burst from every bed, Sunflowers tall, petals spread.
                Laughter rings through morning air, Children tending plants with
                care
              </p>
              <div className="xl:flex lg:flex md:flex flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col items-start gap-6 py-2">
                <Link to="/about">
                  <button className="py-4 px-8 bg-[#fff] hover:bg-[#828E4C] hover:text-[#fff] duration-300 text-[#262626] head-text font-medium text-sm">
                    Discover More
                  </button>
                </Link>
                <div
                  onClick={() => setIsVideo(true)}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <button className="px-5 py-5 bg-[#fff] rounded-full text-[#828E4C] hover:bg-[#828E4C] hover:text-white duration-300">
                    <span>
                      <FaPlay></FaPlay>
                    </span>
                  </button>
                  <p className="head-text font-bold text-sm text-[#fff] uppercase">
                    play more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      <div>
        {isVideo ? (
          <>
            <VideoOne setIsVideo={setIsVideo}></VideoOne>
          </>
        ) : (
          <></>
        )}
      </div>

      <div>
        {isVideo2 ? (
          <>
            <VideoTwo setIsVideo2={setIsVideo2}></VideoTwo>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Home;

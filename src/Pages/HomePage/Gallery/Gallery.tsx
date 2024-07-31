import React from "react";
import img01 from "../../../assets/img/view1.jpg";
import img02 from "../../../assets/img/view2.jpg";
import img03 from "../../../assets/img/view3.jpg";
import img04 from "../../../assets/img/view4.jpg";
import img05 from "../../../assets/img/view5.jpg";
import img06 from "../../../assets/img/view6.jpg";
import img07 from "../../../assets/img/updateview7.jpg";
import img08 from "../../../assets/img/view7.jpg";
import img09 from "../../../assets/img/need2.jpg";
import "./Gallery.css";
import { GoPlus } from "react-icons/go";
const Gallery = () => {
  return (
    <div className="xl:px-20 px-16 bg-[#fff] w-full pb-8">
      <div>
        <h2 className="text-xl font-semibold py-2 text-[#828E4C]">
          Our Gallery
        </h2>
        <p className="lg:w-[50%] md:w-[60%] w-full text-[#14px] text-[#26262691]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          porro maxime itaque aliquid perferendis! Vel commodi.
        </p>
      </div>

      <div className="my-8 grid lg:grid-cols-2 gap-4">
        <div className="grid gap-4">
          <div className="card_box group relative cursor-pointer">
            <img className="rounded-tl-xl" src={img06} alt="" />
            <p className="right-0 opacity-0 group-hover:right-6 group-hover:opacity-100 duration-300 bottom-4 absolute z-10 rounded-full border border-[#fff] bg-[#828E4C] text-[#fff] p-2 text-xl">
              <GoPlus />
            </p>
          </div>
          <div className="relative group cursor-pointer">
            <img className="rounded-bl-xl" src={img09} alt="" />
            <p className="right-0 opacity-0 group-hover:right-6 group-hover:opacity-100 duration-300 bottom-4 absolute z-10 rounded-full border border-[#fff] bg-[#828E4C] text-[#fff] p-2 text-xl">
              <GoPlus />
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="relative group cursor-pointer">
            <img src={img02} alt="" />
            <p className="right-0 opacity-0 group-hover:right-6 group-hover:opacity-100 duration-300 bottom-4 absolute z-10 rounded-full border border-[#fff] bg-[#828E4C] text-[#fff] p-2 text-xl">
              <GoPlus />
            </p>
          </div>
          <div className="card_box3 group relative cursor-pointer">
            <img className="rounded-tr-xl" src={img03} alt="" />
            <p className="right-0 opacity-0 group-hover:right-6 group-hover:opacity-100 duration-300 bottom-4 absolute z-10 rounded-full border border-[#fff] bg-[#828E4C] text-[#fff] p-2 text-xl">
              <GoPlus />
            </p>
          </div>
          <div className="card_box2 group relative cursor-pointer">
            <img src={img07} alt="" />
            <p className="right-0 opacity-0 group-hover:right-6 group-hover:opacity-100 duration-300 bottom-4 absolute z-10 rounded-full border border-[#fff] bg-[#828E4C] text-[#fff] p-2 text-xl">
              <GoPlus />
            </p>
          </div>
          <div className="relative card_box4 group cursor-pointer">
            <img className="rounded-br-xl" src={img08} alt="" />
            <p className="right-0 opacity-0 group-hover:right-6 group-hover:opacity-100 duration-300 bottom-4 absolute z-10 rounded-full border border-[#fff] bg-[#828E4C] text-[#fff] p-2 text-xl">
              <GoPlus />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

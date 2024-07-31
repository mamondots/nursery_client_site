import React from "react";
import CategoryProductSilder from "./CategoryProductSilder/CategoryProductSilder";

const CategoryProducts = () => {
  return (
    <div className="xl:px-20 px-16 bg-[#fff] w-full pb-16">
      <div>
        <h2 className="text-xl font-semibold py-2 text-[#828E4C]">
          Our Product
        </h2>
        <p className="lg:w-[60%] md:w-[60%] w-full text-[#14px] text-[#26262691]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          porro maxime itaque aliquid perferendis! Vel commodi, quidem aperiam
          ratione possimus voluptate rerum et explicabo sequi.
        </p>
      </div>

      <div className="py-10">
        <CategoryProductSilder></CategoryProductSilder>

        <div className="flex items-center justify-center mt-8">
          <button className="py-3 px-6 text-[14px] text-[#828E4C] hover:bg-[#828E4C] hover:text-[#fff] duration-300 uppercase font-medium border border-[#828E4C] tracking-[2px]">
            view more products
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;

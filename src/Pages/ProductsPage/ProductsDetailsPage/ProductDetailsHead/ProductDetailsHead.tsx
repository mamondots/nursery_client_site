import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../../../redux/baseApi/baseApi";

const ProductDetailsHead = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleProductQuery(id);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  const { data: product } = data;

  const { title } = product;
  return (
    <div className="about-bg xl:px-20  px-10 py-16 w-full">
      <h2 className="relative z-10 text-2xl font-bold text-[#fff]">
        PRODUCTS DETAILS
      </h2>
      <div className="relative z-10 flex space-x-4 py-4 text-[#fff]">
        <Link to="/">
          <p className="hover:text-[#828E4C] duration-300 cursor-pointer">
            HOME
          </p>
        </Link>
        <p>-</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProductDetailsHead;

import React, { useCallback, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useGetProductsQuery } from "../../../redux/baseApi/baseApi";
import { TProduct } from "../../../redux/types";
import { Link } from "react-router-dom";

const ProductsItems = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState("");

  const { data, isLoading, isError } = useGetProductsQuery({
    search: searchValue,
    sortBy: sortValue,
    category,
    availability,
  });

  if (isLoading) {
    return <h2 className="left-[50%] relative">loading.....</h2>;
  }
  if (!isLoading && !isError && data.data?.length === 0) {
    return (
      <div className="text-center p-20 ">
        <h2 className="text-lg font-semibold">
          Can't find any products please reload the page and find products
        </h2>
      </div>
    );
  }

  const { data: products } = data;

  console.log(category);

  return (
    <div className="xl:px-20  px-10 py-16 w-full">
      <div className="lg:flex gap-6">
        <div className="lg:w-1/4 w-full flex flex-col gap-4">
          <div className="border border-[#E4E5D4] p-8">
            <h2 className=" text-lg font-semibold border-b-2 border-b-[#828e4c42] py-2">
              Categories
            </h2>

            <div className="space-y-2 py-2 mt-4 cursor-pointer font-medium text-[#5c5a5a]">
              <p
                onClick={() => setCategory("")}
                className="hover:text-[#828E4C] duration-300"
              >
                All Plants
              </p>
              <p
                onClick={() => setCategory("Hanging")}
                className="hover:text-[#828E4C] duration-300"
              >
                Hanging Plants
              </p>
              <p
                onClick={() => setCategory("Indoor")}
                className="hover:text-[#828E4C] duration-300"
              >
                Indoor Plants
              </p>
              <p
                onClick={() => setCategory("Low")}
                className="hover:text-[#828E4C] duration-300"
              >
                Low light Plant
              </p>
              <p
                onClick={() => setCategory("Money")}
                className="hover:text-[#828E4C] duration-300"
              >
                Money Plant
              </p>
              <p
                onClick={() => setCategory("Flowering")}
                className="hover:text-[#828E4C] duration-300"
              >
                Flowering Plants
              </p>
            </div>
          </div>

          <div className=" border border-[#E4E5D4] px-8 py-4">
            <h2 className=" text-lg font-semibold border-b-2 border-b-[#828e4c42] py-2">
              Availability
            </h2>

            <div className="py-2 mt-4  flex flex-col gap-2  cursor-pointer font-medium text-[#5c5a5a]">
              <p
                onClick={() => setAvailability("Instock")}
                className="hover:text-[#828E4C] duration-300"
              >
                In stock
              </p>
              <p
                onClick={() => setAvailability("Outofstock")}
                className="hover:text-[#828E4C] duration-300"
              >
                Out of stock
              </p>
            </div>
          </div>

          <div className=" border border-[#E4E5D4] px-8 py-4">
            <h2 className=" text-lg font-semibold border-b-2 border-b-[#828e4c42] py-2">
              Sorting
            </h2>

            <div className="py-2 mt-4  flex flex-col gap-2  cursor-pointer font-medium text-[#5c5a5a]">
              <p
                onClick={() => setSortValue("1")}
                className="hover:text-[#828E4C] duration-300"
              >
                Price High-Low
              </p>
              <p
                onClick={() => setSortValue("desc")}
                className="hover:text-[#828E4C] duration-300"
              >
                Price Low-High
              </p>
            </div>
          </div>

          <div className=" border border-[#E4E5D4] px-8 py-4">
            <h2 className=" text-lg font-semibold border-b-2 border-b-[#828e4c42] py-2">
              Size
            </h2>

            <div className="py-2 mt-4 cursor-pointer flex items-center gap-4">
              <p className="py-1 px-2 border text-sm font-medium border-[#828E4C]">
                SM
              </p>
              <p className="py-1 px-2 text-sm font-medium border border-[#828E4C]">
                MD
              </p>
              <p className="py-1 px-2 text-sm font-medium border border-[#828E4C]">
                XL
              </p>
              <p className="py-1 px-2 text-sm font-medium border border-[#828E4C]">
                2XL
              </p>
            </div>
          </div>
        </div>

        <div className="w-full  px-4">
          <div className="flex items-center justify-between lg:mt-0 md:mt-0 mt-4">
            <h2 className="text-lg font-semibold">10 - Products</h2>

            <div>
              <form className="flex items-center justify-center gap-4">
                <div className="border border-[#E4E5D4] py-2 px-4 outline-none">
                  <input
                    type="text"
                    className="outline-none"
                    placeholder="search here..."
                    onChange={(e) => setSearchValue(e.target.value || "")}
                  />
                </div>

                {/* <div>
                  <select
                    name=""
                    id=""
                    className="border border-[#E4E5D4] py-2 px-4 outline-none"
                    value={sortValue}
                    onChange={(e) => setSortValue(e.target.value)}
                  >
                    <option value="">Choose</option>
                    <option value="">Filter A-Z</option>
                    <option value="">Filter Z-A</option>
                    <option value="1">Price High-Low</option>
                    <option value="-1">Price Low-High</option>
                  </select>
                </div> */}
              </form>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 mt-6">
            {products?.map((product: TProduct) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsItems;

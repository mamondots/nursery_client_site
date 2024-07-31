import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { FaXmark } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { searched } from "../../../redux/features/fillter/fillterSlice";
import { useGetProductsQuery } from "../../../redux/baseApi/baseApi";

const SearchBar = ({ setSearch }) => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.filter);
  const { data, isLoading } = useGetProductsQuery(search);

  const [input, setInput] = useState(search);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(searched(input));
  };

  const handelSearchClose = () => {
    setSearch(false);
  };
  return (
    <div className=" bg-[#262626] xl:px-40  px-10 w-full py-20 absolute top-0 z-20">
      <form onSubmit={handleSubmit} className=" w-full">
        <div className=" border-b-2 border-b-[#828E4C] flex">
          <p className="px-2 py-2 bg-[#828E4C] text-[#fff] text-xl font-bold">
            <GoSearch />
          </p>
          <input
            className="w-full bg-transparent px-4 outline-none text-[#fff] border-none"
            type="text"
            disabled
            placeholder="advance Search here its disable...."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>

      <div>
        <p
          onClick={handelSearchClose}
          className="bg-[#828E4C] text-[#fff] hover:bg-[#fff] hover:text-[#262626] duration-300 cursor-pointer py-2 px-2 rounded-full top-8 right-10 absolute"
        >
          <FaXmark />
        </p>
      </div>
    </div>
  );
};

export default SearchBar;

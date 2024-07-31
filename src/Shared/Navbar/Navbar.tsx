import React, { useState } from "react";
import logo from "../../assets/img/logo-dark.png";
import logo2 from "../../assets/img/logo-white.png";
import { GoSearch } from "react-icons/go";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "../../Pages/HomePage/SearchBar/SearchBar";
import ProductCart from "../../Pages/ProductsPage/ProductCart/ProductCart";
import { useAppSelector } from "../../redux/app/hooks";
const Navbar = () => {
  const cart = useAppSelector((state) => state.cart.length);
  const [isOpen, setIsOpen] = useState(false);

  const [search, setSearch] = useState(false);

  const handelSearch = () => {
    setSearch(true);
  };

  const [isClose, setIsClose] = useState(false);

  const handleClose = () => {
    setIsClose(true);
  };
  return (
    <div>
      <div className="xl:px-20  px-10 bg-[#EFEFE3] w-full">
        <div className="flex justify-between items-center py-6">
          <div className="xl:w-[25vh] lg:w-[28vh] md:w-[20] w-[18vh]">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="hidden xl:flex">
            <ul className="flex uppercase space-x-10 font-semibold text-[14px]">
              <Link to="/">
                <li>
                  <a href="" className="hover:text-[#828E4C] duration-200">
                    Home
                  </a>
                </li>
              </Link>

              <Link to="/about">
                <li>
                  <a href="" className="hover:text-[#828E4C] duration-200">
                    about us
                  </a>
                </li>
              </Link>
              <Link to="/products">
                <li>
                  <a href="" className="hover:text-[#828E4C] duration-200">
                    products
                  </a>
                </li>
              </Link>

              <Link to="/management">
                <li>
                  <a href="" className="hover:text-[#828E4C] duration-200">
                    MANAGEMENT
                  </a>
                </li>
              </Link>

              <Link to="/contact">
                <li>
                  <a href="" className="hover:text-[#828E4C] duration-200">
                    contact us
                  </a>
                </li>
              </Link>
            </ul>
          </div>

          <div className=" justify-center items-center gap-2 text-[14px] hidden xl:flex">
            <div className="group">
              <div
                onClick={handelSearch}
                className="bg-[#E4E5D4] p-3 rounded-full group-hover:bg-[#828E4C] duration-300 cursor-pointer"
              >
                <p className="text-xl font-bold text-[#828E4C] group-hover:text-white duration-300">
                  <GoSearch />
                </p>
              </div>
            </div>

            <div onClick={handleClose} className="group">
              <div className="bg-[#E4E5D4] p-3 rounded-full group-hover:bg-[#828E4C] duration-300 cursor-pointer">
                <p className="text-xl relative flex items-center justify-center font-bold text-[#828E4C] group-hover:text-white duration-300">
                  <span>
                    <FaShoppingBasket />
                  </span>
                  <span className="text-sm font-semibold h-[16px] w-[16px] text-center top-[-8px] right-[-8px]  text-[#262626] rounded-full bg-[red] absolute">
                    {cart}
                  </span>
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-[#E4E5D4] p-3 rounded-full group-hover:bg-[#828E4C] duration-300 cursor-pointer">
                <p className="text-xl text-[#828E4C] font-bold group-hover:text-white duration-300">
                  <FaUser />
                </p>
              </div>
            </div>
          </div>

          <div
            onClick={() => setIsOpen(true)}
            className="xl:hidden flex text-2xl font-bold bg-[#E4E5D4] p-1"
          >
            <p>
              <MdMenu />
            </p>
          </div>
        </div>
      </div>

      {/* for mobile device */}

      <div
        className={`xl:hidden fixed top-0 z-20  py-6 px-12 lg:w-[30%] md:w-[35%] w-full h-screen duration-500 bg-[#222222] ${
          isOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="">
          <div className="flex items-center justify-between gap-8">
            <div className="xl:w-[25vh] lg:w-[28vh] md:w-[20] w-[20vh]">
              <img src={logo2} alt="" />
            </div>

            <div onClick={() => setIsOpen(false)} className="">
              <p className="px-2 py-2 text-xl font-bold rounded-full bg-[#828E4C] text-[#fff]">
                <IoMdClose />
              </p>
            </div>
          </div>

          <div className="py-6 text-white w-full">
            <ul className="flex flex-col gap-4 uppercase font-semibold side-nav text-[14px]">
              <li>
                <a href="" className="hover:text-[#828E4C] duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#828E4C] duration-200">
                  about us
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#828E4C] duration-200">
                  services
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#828E4C] duration-200">
                  products
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#828E4C] duration-200">
                  contact us
                </a>
              </li>
            </ul>
          </div>

          <div className=" justify-center items-center  text-[14px]">
            <div className="">
              <div className="border-b-2 border-b-[#ffffff80] cursor-pointer">
                <p className="px-2 py-2 rounded-sm bg-[#828E4C] text-[#fff] text-xl mt-2 inline-block">
                  <GoSearch />
                </p>
              </div>
            </div>
            <button className="bg-[#828E4C] text-[12px] mt-4 py-3 px-6 uppercase text-white font-medium tracking-[4px] rounded-sm">
              Management
            </button>
          </div>
        </div>
      </div>

      <div>{search && <SearchBar setSearch={setSearch}></SearchBar>}</div>
      <div>
        {isClose && <ProductCart setIsClose={setIsClose}></ProductCart>}
      </div>
    </div>
  );
};

export default Navbar;

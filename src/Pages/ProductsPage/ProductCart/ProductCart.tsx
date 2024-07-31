import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";

import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import Swal from "sweetalert2";
import { removeFromCart } from "../../../redux/features/cart/cartSlice";

const ProductCart = ({ setIsClose }) => {
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleDeleteItem = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const isCartEmpty = cart.length === 0;

  const handlePlaceOrder = () => {
    navigate("/checkout", { state: { totalPrice } });
    setIsClose(false);
  };

  const handleClose = () => {
    setIsClose(false);
  };
  return (
    <div className="w-full h-screen top-0 left-0 bg-[#26262691]  z-50 fixed">
      <div className="right-0 top-0 h-screen lg:w-[40%] md:w-[40%] w-full bg-[#262626] absolute p-12 overflow-scroll">
        <div className="text-[#fff] flex items-center justify-between border-b border-b-[#444444] pb-8">
          <h2>Cart ({cart?.length})</h2>
          <p
            onClick={handleClose}
            className="py-2 px-2  bg-[#828E4C] text-[#fff] cursor-pointer hover:bg-[#fff] hover:text-[#000] duration-300"
          >
            <FaXmark />
          </p>
        </div>

        <div>
          {cart.length === 0 ? (
            <div className="text-[#fff] text-center py-8">
              <h2>You have no product in cart</h2>
              <Link to="/products">
                <p
                  onClick={handleClose}
                  className="text-sm font-semibold pt-4 cursor-pointer"
                >
                  BACK TO SHOOP
                </p>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>

        <div>
          {cart?.map((item) => (
            <div className="py-6 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-[8vh] h-[8vh]">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="text-white space-y-1">
                    <h2>{item.title}</h2>
                    <p className="text-sm">
                      <span>TK.{item.price}</span>*<span>{item.quantity}</span>
                    </p>
                  </div>
                </div>

                <p
                  onClick={() => handleDeleteItem(item._id)}
                  className="py-2 px-2 rounded-full bg-[#828E4C] text-[#fff] cursor-pointer hover:bg-[#fff] hover:text-[#000] duration-300"
                >
                  <FaXmark />
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full relative">
          <div className="  w-full absolute top-10 text-[#fff]">
            <div className="flex items-center justify-between w-full py-4 ">
              <h2>Total Amount :</h2>
              <h2>TK.{totalPrice}</h2>
            </div>

            <div className="flex flex-col gap-4">
              <Link to="/checkout"></Link>

              <div>
                {isCartEmpty ? (
                  <button
                    disabled
                    className="py-2 px-4 w-full bg-[#fff] text-[#828E4C] duration-300"
                  >
                    Check out
                  </button>
                ) : (
                  <button
                    onClick={handlePlaceOrder}
                    className="py-2 px-4 w-full bg-[#828E4C] hover:bg-[#fff] hover:text-[#828E4C] duration-300 cursor-pointer"
                  >
                    Check out
                  </button>
                )}
              </div>

              <button className="py-2 px-4 border border-[#828E4C] hover:bg-[#828E4C] duration-300">
                View Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;

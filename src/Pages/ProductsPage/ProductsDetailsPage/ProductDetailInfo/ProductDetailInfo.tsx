import React, { useState } from "react";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FiTruck } from "react-icons/fi";
import { GoStopwatch } from "react-icons/go";
import { IoEyeOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuCircleOff } from "react-icons/lu";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { PiHandshakeLight } from "react-icons/pi";

import { Rating } from "@smastrom/react-rating";
import Product_DescriptionorReview from "../../Product_DescriptionorReview/Product_DescriptionorReview";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../../../redux/baseApi/baseApi";
import { useAppDispatch, useAppSelector } from "../../../../redux/app/hooks";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../../../redux/features/cart/cartSlice";
import { toast } from "sonner";
import { TProduct } from "../../../../redux/types";

const ProductDetailInfo = () => {
  const { id } = useParams();

  const cart = useAppSelector((state) => state.cart);

  const { data, refetch, isLoading } = useGetSingleProductQuery(id);
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  const { data: product } = data;

  const { image, title, price, rating, description, availability, _id, stock } =
    product;

  const existingCartProduct = cart.find((product) => product._id === id);

  const handleAddToCart = async () => {
    const newQuantity = existingCartProduct
      ? existingCartProduct.quantity + quantity
      : quantity;

    if (data?.data?.stock < newQuantity) {
      toast.error("Not enough stock available");
      return;
    }
    try {
      refetch();
      const cartData = {
        ...data.data,
        quantity,
      };

      dispatch(addToCart(cartData));
      toast.success("Product added to cart");
    } catch (error) {
      toast.error("Failed to add product to cart");
    }
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(value);
  };

  return (
    <div className="xl:px-20 px-8 bg-[#fff] w-full py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="border">
          <img src={image} alt="" />
        </div>

        <div className="">
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="flex py-2">
            <Rating style={{ maxWidth: 80 }} value={rating} readOnly /> (
            {rating}
            -customer review)
          </p>
          <div className="flex items-center space-x-4 py-2">
            <p className="font-medium">TK.{price}</p>
          </div>
          <p className="text-[#737373]">{description}</p>
          <div className="flex items-center space-x-2 py-2 font-medium">
            <p>Availability :</p>
            <p>{availability}</p>
          </div>

          <div className="flex items-center space-x-5 mt-4">
            <div className="">
              <input
                id="quantity"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="py-2 px-4 w-24 border border-gray-300 rounded-md"
                min="1"
              />
            </div>

            <div>
              <button
                onClick={handleAddToCart}
                disabled={stock === 0}
                className="px-8 py-2 bg-[#828E4C] hover:bg-[#262626] duration-300 text-[14px] text-[#fff] uppercase cursor-pointer"
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="py-4">
            <button className="bg-[#E5E5E5] text-[#828E4C] text-[15px] uppercase py-2 px-24 font-medium hover:bg-[#828E4C] hover:text-[#fff] duration-300 cursor-pointer">
              BUY IT NOW
            </button>
          </div>

          <div className="space-y-2 mt-4">
            <p className="flex items-center space-x-2">
              <span>
                <CiHeart />
              </span>{" "}
              <span>Add to wishlist</span>
            </p>

            <p className="flex items-center space-x-2">
              <span>
                <LuCircleOff />
              </span>{" "}
              <span>Delivery & Return</span>
            </p>

            <p className="flex items-center space-x-2">
              <span>
                <AiTwotoneQuestionCircle />
              </span>
              <span>Ask a Question</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-3  gap-4 py-4 mt-2">
            <div className="lg:text-center flex lg:items-center flex-col space-y-1">
              <p className="text-xl">
                <FiTruck />
              </p>
              <p className="text-[#757575]">Free Shipping</p>
            </div>

            <div className="lg:text-center flex lg:items-center flex-col space-y-1">
              <p className="text-xl">
                <PiHandshakeLight />
              </p>
              <p className="text-[#757575]">Secure payment</p>
            </div>

            <div className="lg:text-center flex lg:items-center flex-col space-y-1">
              <p className="text-xl">
                <LuCircleOff />
              </p>
              <p className="text-[#757575]">30 Days Return</p>
            </div>
          </div>
        </div>
      </div>

      <Product_DescriptionorReview></Product_DescriptionorReview>
    </div>
  );
};

export default ProductDetailInfo;

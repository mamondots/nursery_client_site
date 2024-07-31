import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { RootState } from "../../../redux/app/store";
import { toast } from "sonner";
import { addToCart } from "../../../redux/features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const { image, title, price, rating, _id, stock } = product;
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state: RootState) => state.cart);
  const [quantity, setQuantity] = useState(1);

  const existingCartProduct = cart.find((product) => product._id === _id);

  const handleAddToCart = async () => {
    const newQuantity = existingCartProduct
      ? existingCartProduct.quantity + quantity
      : quantity;

    if (stock < newQuantity) {
      toast.error("Not enough stock available");
      return;
    }
    try {
      const cartData = {
        ...product,
        quantity,
      };

      dispatch(addToCart(cartData));
      toast.success("Product added to cart");
    } catch (error) {
      toast.error("Failed to add product to cart");
    }
  };

  const hideColor = stock === 0 || stock === null;

  // const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = parseInt(event.target.value, 10);
  //   setQuantity(value);
  // };

  return (
    <div>
      <div className="border gap-4 p-4">
        <Link to={`/details/${_id}`}>
          <div>
            <img src={image} alt="" />
          </div>
        </Link>
        <div className="w-full">
          <div>
            <Link to={`/details/${_id}`}>
              <h2 className="font-medium">{title}</h2>
              <div className="flex items-center gap-1 text-[#ffa600] py-2">
                <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
              </div>
              <p className="font-medium">TK.{price}</p>
            </Link>

            {/* <div className="flex items-center mb-4">
              <label
                htmlFor="quantity"
                className="text-gray-700 font-medium mr-2 hover:text-[#CB1836]"
              >
                Quantity:
              </label>
              <input
                id="quantity"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 px-3 py-1 border border-gray-300 rounded-md"
                min="1"
              />
            </div> */}
          </div>

          <div>
            {hideColor ? (
              <button
                onClick={handleAddToCart}
                disabled
                className="py-2 px-4 text-[#fff] hover:bg-[#262626] duration-300 bg-[#070707] capitalize text-[14px]  my-2"
              >
                add to cart
              </button>
            ) : (
              <button
                onClick={handleAddToCart}
                disabled={stock === 0}
                className="py-2 px-4 text-[#fff] hover:bg-[#262626] duration-300 bg-[#828E4C] capitalize text-[14px]  my-2"
              >
                add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

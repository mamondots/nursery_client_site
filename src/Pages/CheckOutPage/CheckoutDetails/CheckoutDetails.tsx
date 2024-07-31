import React from "react";
import { useAppSelector } from "../../../redux/app/hooks";
import { useForm } from "react-hook-form";
import { useAddOrderMutation } from "../../../redux/baseApi/baseApi";
import { useNavigate } from "react-router-dom";
const CheckoutDetails = () => {
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // const items = cart?.length;

  const items = cart.reduce(
    (total, item) => total + item.quantity * item.quantity,
    0
  );

  const [addOrder, { isError, isLoading, isSuccess }] = useAddOrderMutation();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const allData = {
      name: data.name,
      phone: data.phone,
      city: data.city,
      email: data.email,
      deliveryAddress: data.deliveryAddress,
      note: data.note,
      totalPrice: totalPrice,
      items: items,
    };
    addOrder(allData);
    reset();
    navigate("/products");
  };

  return (
    <div className="xl:px-20 px-16 bg-[#EFEFE3] w-full py-16">
      <h2 className="bg-[#E4E5D4] py-2 px-4 border border-[#828e4c91] font-medium">
        Returning Customer ?
        <span className="px-1 cursor-pointer text-[#828E4C] hover:text-[red] duration-300">
          Click here to login
        </span>
      </h2>

      <div className="py-6">
        <h2 className="py-4 text-lg font-medium">BILLING & SHIPPING</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid lg:grid-cols-2 gap-8"
        >
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                {...register("name")}
                className="py-2 px-4 border outline-none w-full border-[#2626265b]"
                type="text"
                placeholder="Your Name.."
              />
              <input
                {...register("phone")}
                className="py-2 px-4 border outline-none w-full border-[#2626265b]"
                type="text"
                placeholder="Your Phone.."
              />
            </div>
            <div className="flex gap-4">
              <select
                {...register("city")}
                className="py-2 px-4 border outline-none w-full border-[#2626265b]"
              >
                <option value="">Your City</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Sylet">Sylet</option>
                <option value="Comilla">Comilla</option>
                <option value="Brahmanbaria">Brahmanbaria</option>
                <option value="Chittogram">Chittogram</option>
              </select>

              <input
                {...register("email")}
                className="py-2 px-4 border outline-none w-full border-[#2626265b]"
                type="email"
                placeholder="Your Email.."
              />
            </div>

            <input
              {...register("deliveryAddress")}
              className="py-2 px-4 border outline-none w-full border-[#2626265b]"
              type="text"
              placeholder="Your Address..."
            />
            <textarea
              {...register("note")}
              className="py-2 px-4 border outline-none w-full border-[#2626265b]"
              name=""
              id=""
              cols="30"
              rows="4"
              placeholder="Your Note (optinal)"
            ></textarea>
          </div>

          <div className="border-2 border-[#2626262c] py-4 px-6">
            <h2 className="text-lg font-medium border-b pb-4 border-b-[#2626262c]">
              Your Order
            </h2>

            <div className="py-6">
              {cart?.map((item) => (
                <div key={item._id} className="my-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        className="h-[8vh] w-[8vh] border"
                        src={item.image}
                        alt=""
                      />
                      <p className="text-sm">
                        {item.title} <span> (x {item.quantity})</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm">TK.{item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between py-2 border-b-2 border-[#2626262c] mt-4">
                <p>Total MRP.</p>
                <p>TK.{totalPrice}</p>
              </div>

              <div className="flex items-center justify-between py-2">
                <p>Total Amount : </p>
                <p>TK.{totalPrice}</p>
              </div>

              <div className="py-4">
                <h2>Choose Payment Method : </h2>
                <div className="flex flex-col gap-1 mt-2">
                  <div className="flex items-center gap-2 text-[#2626268e]">
                    <input type="checkbox" disabled name="" id="" />
                    <p>Check Payments</p>
                  </div>

                  <div className="flex items-center gap-2 text-[#262626d5] cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    <p>Cash on delivery</p>
                  </div>
                </div>
              </div>

              <div className="border border-[#2626262c] p-4">
                <p className="text-sm text-[#919191]">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>
              </div>

              <div className="py-4">
                <div className="flex items-center gap-2 text-[#2626268e]">
                  <input type="checkbox" name="" id="" />
                  <p className="text-[12px]">
                    I HAVE READ AND AGREE TO THE WEBSITE TERMS AND
                    CONDITIONS.... *
                  </p>
                </div>
              </div>

              <div>
                <input
                  className="px-6 py-2 bg-[#262626] text-[#fff] text-sm font-medium cursor-pointer hover:bg-[#828E4C] duration-300"
                  type="submit"
                  value="Place Order"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutDetails;

import React from "react";
import { useForm } from "react-hook-form";
import { useAddProductsMutation } from "../../redux/baseApi/baseApi";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const navagit = useNavigate();
  const [addProducts, { isError, isLoading, isSuccess }] =
    useAddProductsMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    addProducts(data);
    reset();
    navagit("/products");
  };
  return (
    <div className=" w-full px-12 ">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold py-2">Add Product</h2>
        <p className="text-[#727272]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="mt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-[#262626]">
              Product Title
            </label>
            <input
              {...register("title", { required: true })}
              className="px-4 py-2 border border-[#E4E5D4] outline-none"
              type="text"
              placeholder="Enter Title..."
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-[#262626]">
              Product Image
            </label>
            <input
              {...register("image", { required: true })}
              className="px-4 py-2 border border-[#E4E5D4] outline-none"
              type="url"
              placeholder="Enter Image Url..."
            />
          </div>

          <div className="lg:flex lg:space-x-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm font-semibold text-[#262626]">
                Product price
              </label>
              <input
                {...register("price", { required: true })}
                className="px-4 py-2 border border-[#E4E5D4] outline-none"
                type="text"
                placeholder="Enter  price..."
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm font-semibold text-[#262626]">
                Product Rating
              </label>
              <input
                {...register("rating", { required: true })}
                className="px-4 py-2 border border-[#E4E5D4] outline-none"
                type="text"
                placeholder="Enter Rating out of 5..."
              />
            </div>
          </div>

          <div className="lg:flex lg:space-x-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm font-semibold text-[#262626]">
                Product Category
              </label>
              <select
                {...register("category", { required: true })}
                className="px-4 py-2 border border-[#E4E5D4] outline-none"
              >
                <option value="">Category</option>
                <option value="Hanging">Hanging</option>
                <option value="Indoor">Indoor</option>
                <option value="Low">Low</option>
                <option value="Money">Money</option>
                <option value="Flowering">Flowering</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm font-semibold text-[#262626]">
                Product Availability
              </label>
              <select
                {...register("availability", { required: true })}
                className="px-4 py-2 border border-[#E4E5D4] outline-none"
              >
                <option value="">availability</option>
                <option value="Instock">In stock</option>
                <option value="Outofstock">Out of stock</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-[#262626]">
              Product Quintity
            </label>
            <input
              {...register("stock")}
              className="px-4 py-2 border border-[#E4E5D4] outline-none"
              type="text"
              placeholder="Enter Quintity..."
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-[#262626]">
              Product Description
            </label>
            <textarea
              {...register("description", { required: true })}
              className="px-4 py-2 border border-[#E4E5D4] outline-none"
              cols="30"
              rows="4"
              placeholder="Enter Description.."
            />
          </div>

          <input
            className="px-6 py-3 bg-[#828E4C] text-[14px] font-semibold text-[#fff] outline-none cursor-pointer hover:bg-[#262626] hover:text-[#fff] duration-300"
            type="submit"
            value="ADD PRODUCT"
          />
        </form>

        {isSuccess && <div>Video was added successfully</div>}
        {isError && <div>there is an error</div>}
      </div>
    </div>
  );
};

export default AddProducts;

import React from "react";
import { useForm } from "react-hook-form";
import { TProduct } from "../../redux/types";
import { useEditProductMutation } from "../../redux/baseApi/baseApi";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = ({ product }) => {
  const { id } = useParams();
  const navagite = useNavigate();
  const [editProduct, { isLoading, isSuccess }] = useEditProductMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const productData = {
      title: data.title,
      price: data.price,
      rating: data.rating,
      stock: data.stock,
      description: data.description,
      image: data.image,
      availability: data.availability,
      category: data.category,
    };

    const updateProductData = {
      id,
      data: productData,
    };

    try {
      const res = await editProduct(updateProductData).unwrap();
      if (res?.success) {
        console.log("done");
        navagite("/products");
      }
    } catch (err) {
      console.log("error");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-[#262626]">
          Product Title
        </label>
        <input
          {...register("title")}
          className="px-4 py-2 border border-[#E4E5D4] outline-none"
          defaultValue={product.title}
          type="text"
          placeholder="Enter Title..."
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-[#262626]">
          Product Image
        </label>
        <input
          {...register("image")}
          className="px-4 py-2 border border-[#E4E5D4] outline-none"
          defaultValue={product.image}
          type="url"
          placeholder="Enter Image URL..."
        />
      </div>

      <div className="lg:flex lg:space-x-4 w-full">
        <div className="flex flex-col gap-1 w-full">
          <label className="text-sm font-semibold text-[#262626]">
            Product price
          </label>
          <input
            {...register("price")}
            className="px-4 py-2 border border-[#E4E5D4] outline-none"
            type="text"
            defaultValue={product.price}
            placeholder="Enter price..."
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-sm font-semibold text-[#262626]">
            Product Rating
          </label>
          <input
            {...register("rating")}
            className="px-4 py-2 border border-[#E4E5D4] outline-none"
            type="text"
            defaultValue={product.rating}
            placeholder="Enter rating..."
          />
        </div>
      </div>

      <div className="lg:flex lg:space-x-4 w-full">
        <div className="flex flex-col gap-1 w-full">
          <label className="text-sm font-semibold text-[#262626]">
            Product Category
          </label>
          <select
            {...register("category")}
            className="px-4 py-2 border border-[#E4E5D4] outline-none"
          >
            <option value="">{product.category}</option>
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
            {...register("availability")}
            className="px-4 py-2 border border-[#E4E5D4] outline-none"
          >
            <option value="">{product.availability}</option>
            <option value="Instock">Instock</option>
            <option value="Outofstock">Outofstock</option>
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
          defaultValue={product.stock}
          placeholder="Enter Quintity..."
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-[#262626]">
          Product Description
        </label>
        <textarea
          {...register("description")}
          className="px-4 py-2 border border-[#E4E5D4] outline-none"
          cols="30"
          rows="4"
          defaultValue={product.description}
          placeholder="Enter Description..."
        />
      </div>

      <input
        className="px-6 py-3 bg-[#828E4C] text-[14px] uppercase font-semibold text-[#fff] outline-none cursor-pointer hover:bg-[#262626] hover:text-[#fff] duration-300"
        type="submit"
        value="Update PRODUCT"
      />
    </form>
  );
};

export default UpdateForm;

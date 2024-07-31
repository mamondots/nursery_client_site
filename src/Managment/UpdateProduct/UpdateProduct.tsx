import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/baseApi/baseApi";

import UpdateForm from "./UpdateForm";

const UpdateProduct = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleProductQuery(id);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  const { data: product } = data;

  return (
    <div className=" w-full px-12 ">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold py-2">Update Product</h2>
        <p className="text-[#727272]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="mt-6">
        <UpdateForm product={product}></UpdateForm>
      </div>
    </div>
  );
};

export default UpdateProduct;

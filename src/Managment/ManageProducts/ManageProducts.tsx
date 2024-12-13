import React from "react";
import { Link } from "react-router-dom";
import {
  useDeleteSingleProductMutation,
  useGetProductsQuery,
} from "../../redux/baseApi/baseApi";
import { TProduct } from "../../redux/types";
import ManageTable from "./ManageTable";

const ManageProducts = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery([]);
  if (isLoading) {
    return <h2>loading.....</h2>;
  }

  console.log(products);
  return (
    <div className="w-full lg:px-2 px-12">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold py-2">Manage Products</h2>
        <p className="text-[#727272]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="py-12">
        <ManageTable products={products.data}></ManageTable>
      </div>
    </div>
  );
};

export default ManageProducts;

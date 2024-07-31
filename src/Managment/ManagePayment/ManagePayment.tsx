import React from "react";
import { useGetOrdersQuery } from "../../redux/baseApi/baseApi";
import { TOrder } from "../../redux/types";

const ManagePayment = () => {
  const { data, isLoading, isError } = useGetOrdersQuery("");
  if (isLoading) {
    return <h2>loading.....</h2>;
  }

  const { data: orders } = data;
  return (
    <div className="w-full px-12">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold py-2">Manage Payments</h2>
        <p className="text-[#727272]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="overflow-x-auto mt-12">
        <table className="table text-center">
          {/* head */}
          <thead className="bg-[#E4E5D4]">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Items</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((product: TOrder, index: any) => (
              <tr key={product._id} className="py-1">
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.phone}</td>
                <td>{product.items}</td>
                <td>{product.totalPrice}</td>
                <th className="text-[#f53939b0] ">pending</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePayment;

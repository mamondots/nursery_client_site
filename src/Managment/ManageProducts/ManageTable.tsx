import React from "react";
import { TProduct } from "../../redux/types";
import { useDeleteSingleProductMutation } from "../../redux/baseApi/baseApi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Doilog from "../../utilits/Doilog";

const ManageTable = ({ products }) => {
  const [deleteSingleProduct] = useDeleteSingleProductMutation();
  console.log(products);
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
        deleteSingleProduct(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        {/* head */}
        <thead className="bg-[#E4E5D4]">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quintity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product: TProduct, index: any) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={product.image} alt="" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <th className="space-x-2">
                {/* <Link to={`/management/update/${product._id}`}>
                  <button className="px-4 py-2 rounded text-white bg-[#6a976a]">
                    Update
                  </button>
                </Link> */}

                <button className="shadow-2xl">
                  <Doilog product={product}></Doilog>
                </button>
                <button
                  onClick={() => handleDeleteItem(product._id)}
                  className="px-4 py-2 rounded text-white bg-[#8e5959]"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTable;

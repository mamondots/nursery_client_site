import React from "react";
import items from "../../../../../public/review.json";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const Products_review = () => {
  return (
    <div>
      <h2 className="text-xl font-medium">3 reviews for this plant</h2>
      <div className="py-4 space-y-6">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex items-center space-x-4">
              <div className="rounded-full">
                <img className="rounded-full" src={item.img} alt="" />
              </div>
              <div className="space-y-1">
                <p>
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={item.rating}
                    readOnly
                  />
                </p>
                <div className="flex space-x-3 text-[#525252]">
                  <h2 className="font-medium">{item.name}</h2>
                  <p>{item.date}</p>
                </div>
                <p className="text-[#525252]">{item.text}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="py-8">
          <h2 className="text-xl font-semibold">Add a review</h2>
          <div className="mt-4">
            <form className="space-y-2 lg:w-2/4 md:w-2/4 w-full">
              <div className="flex justify-center flex-col space-y-1">
                <label className="font-medium text-[#636363]">Your Name</label>
                <input
                  className="px-2 py-2 border outline-none"
                  type="text"
                  placeholder="Name.."
                />
              </div>

              <div className="flex justify-center flex-col space-y-1">
                <label className="font-medium text-[#636363]">Your Email</label>
                <input
                  className="px-2 py-2 border outline-none"
                  type="email"
                  placeholder="Email.."
                />
              </div>

              <div className="flex justify-center flex-col space-y-1">
                <label className="font-medium text-[#636363]">
                  Give Rating
                </label>
                <input
                  className="px-2 py-2 border outline-none"
                  type="email"
                  placeholder="Rating 1/5..."
                />
              </div>

              <textarea
                className="px-2 py-2 border outline-none w-full"
                placeholder="Your Review..."
                cols="10"
                rows="6"
              ></textarea>

              <input
                className="py-2 px-6 bg-[#262626] text-[#fff] 
                              cursor-pointer hover:bg-[#000] duration-300"
                type="submit"
                value="Add Review"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products_review;

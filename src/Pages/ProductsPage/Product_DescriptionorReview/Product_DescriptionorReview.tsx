import React, { useState } from "react";
import "./Product_DescriptionorReview.css";
import Products_description from "./Products_description/Products_description";
import Products_review from "./Products_review/Products_review";
const Product_DescriptionorReview = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <div className="py-10 mt-12">
      <div className="flex items-center justify-center space-x-8 text-xl font-medium cursor-pointer">
        <div
          onClick={() => toggleTab(1)}
          className={toggle === 1 ? "tab active-tab text-lg" : "tab text-lg"}
        >
          Description
        </div>
        <div
          onClick={() => toggleTab(2)}
          className={toggle === 2 ? "tab active-tab text-lg" : "tab text-lg"}
        >
          Reviews
        </div>
      </div>

      <div className="contents-tabs mt-12">
        <div className={toggle === 1 ? "content active-content" : "content"}>
          <Products_description></Products_description>
        </div>
        <div className={toggle === 2 ? "content active-content" : "content"}>
          <Products_review></Products_review>
        </div>
      </div>
    </div>
  );
};

export default Product_DescriptionorReview;

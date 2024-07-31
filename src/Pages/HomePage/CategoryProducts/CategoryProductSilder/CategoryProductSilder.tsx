import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import "./CategoryProductSilder.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import ProductCard from "../../../ProductsPage/ProductCard/ProductCard";
import { useGetProductsQuery } from "../../../../redux/baseApi/baseApi";
import { TProduct } from "../../../../redux/types";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow arrow-next" onClick={onClick}>
      <BsArrowRightShort></BsArrowRightShort>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow arrow-prev" onClick={onClick}>
      <BsArrowLeftShort></BsArrowLeftShort>
    </div>
  );
}
const CategoryProductSilder = () => {
  var settings = {
    dots: false,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data, isLoading, isError } = useGetProductsQuery([]);

  if (isLoading) {
    return <h2>loading.....</h2>;
  }

  const { data: products } = data;

  console.log(products);
  return (
    <div>
      <Slider {...settings}>
        {products?.slice(0, 5).map((product: TProduct) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryProductSilder;

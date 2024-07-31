import About from "./About/About";
import CategoryProducts from "./CategoryProducts/CategoryProducts";
import Facility from "./Facility/Facility";
import Gallery from "./Gallery/Gallery";
import Help from "./Help/Help";
import Home from "./Home/Home";
import React from "react";
import Testimonal from "./Testimonal/Testimonal";
import Blogs from "./Blogs/Blogs";

const HomePage = () => {
  return (
    <div>
      <Home></Home>
      <Facility></Facility>
      <About></About>
      <CategoryProducts></CategoryProducts>
      <Gallery></Gallery>
      <Help></Help>
      <Testimonal></Testimonal>
      <Blogs></Blogs>
    </div>
  );
};

export default HomePage;

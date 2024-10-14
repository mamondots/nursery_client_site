import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import ManagmentHead from "../Managment/ManagmentHead/ManagmentHead";
import ManagementSideBar from "../Managment/ManagementSideBar/ManagementSideBar";

const ManagmentLayout = () => {
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <ManagmentHead></ManagmentHead>
      <div className="lg:flex xl:px-20  px-10 py-16">
        <ManagementSideBar></ManagementSideBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ManagmentLayout;

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import React from "react";
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import Products from "../Pages/ProductsPage/Products/Products";
import ContactPage from "../Pages/ContactPage/ContactPage";
import ProductsDetailsPage from "../Pages/ProductsPage/ProductsDetailsPage/ProductsDetailsPage";
import ManagmentLayout from "../Layout/ManagmentLayout";
import AddProducts from "../Managment/AddProducts/AddProducts";
import ManageProducts from "../Managment/ManageProducts/ManageProducts";
import UpdateProduct from "../Managment/UpdateProduct/UpdateProduct";
import ManagePayment from "../Managment/ManagePayment/ManagePayment";
import CheckOutPage from "../Pages/CheckOutPage/CheckOutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/details/:id",
        element: <ProductsDetailsPage></ProductsDetailsPage>,
      },
      {
        path: "/checkout",
        element: <CheckOutPage></CheckOutPage>,
      },
    ],
  },

  {
    path: "/management",
    element: <ManagmentLayout></ManagmentLayout>,
    children: [
      {
        path: "/management",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/management/products",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "/management/payment",
        element: <ManagePayment></ManagePayment>,
      },
      {
        path: "/management/update/:id",
        element: <UpdateProduct></UpdateProduct>,
      },
    ],
  },
]);

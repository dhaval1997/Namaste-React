import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUS";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
import { Outlet, RouterProvider, createBrowserRouter, useParams } from "react-router-dom";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <Body /> },
      {
        path: "about",
        element: <AboutUs />,
      },
      { path: "contact", element: <ContactUs /> },
      {
        path: "restaurants/:resId",
        element: <RestaurantInfo />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

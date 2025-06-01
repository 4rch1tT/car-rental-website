import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import UserRoot from "./root/UserRoot";
import Booking from "./pages/Booking";
import Fleet from "./pages/Fleet";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import "./index.css";
import Wishlist from "./pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "fleet",
        element: <Fleet />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "sign-up",
        element: <SignUp/>,
      },
      {
        path: "booking/:id",
        element: <Booking />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

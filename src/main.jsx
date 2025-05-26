import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import UserRoot from "./root/UserRoot";
import Booking from "./pages/Booking";
import Fleet from "./pages/Fleet";
import "./index.css";

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
        path: 'fleet',
        element: <Fleet/>,
      },
      {
        path: "booking/:id",
        element: <Booking />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

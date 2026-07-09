import React from "react";
import { createBrowserRouter } from "react-router";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
    ],
  },
]);

export default router;

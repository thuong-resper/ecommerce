import React from "react";

export const routes = [
  {
    path: "/",
    name: "HomePage",
    component: React.lazy(() => import("./pages/HomePage/HomePage")),
    exact: true,
  },
  {
    path: "/product/:id",
    name: "ProductPage",
    component: React.lazy(() => import("./pages/ProductPage/ProductPage")),
    exact: false,
  },
  {
    path: "/auth",
    name: "AuthPage",
    component: React.lazy(() => import("./pages/AuthPage/AuthPage")),
    exact: false,
  },
];
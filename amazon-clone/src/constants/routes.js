import React from "react";

export const routes = [
  {
    path: "/",
    name: "AdminLayoutRoute",
    component: React.lazy(() => import("../containers/Layout/AdminLayoutRoute")),
    exact: true,
  },
  {
    path: "/auth",
    name: "AuthRoute",
    component: React.lazy(() => import("../containers/Auth/Auth")),
    exact: false,
  },
];

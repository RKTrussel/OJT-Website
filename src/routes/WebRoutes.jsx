import React from "react";
import { Navigate } from "react-router-dom";

const CliberducheWebsite = React.lazy(() =>
  import("../pages/CliberducheWebsite")
);

const WebRoutes = {
  path: "/",
  children: [
    {
      index: true,
      element: <Navigate to="cliberduche-website/" replace />,
    },
    {
      path: "cliberduche-website",
      element: <Navigate to="/cliberduche-website/" replace />,
    },
    {
      path: "cliberduche-website/",
      element: <CliberducheWebsite />,
    },
  ],
};

export default WebRoutes;

import React from "react";
import { Navigate } from "react-router-dom";

const CliberducheWebsite = React.lazy(() =>
  import("../pages/CliberducheWebsite")
);
const SampleProjects = React.lazy(() => import("../projects/SampleProjects"));

const WebRoutes = {
  path: "/",
  children: [
    {
      index: true,
      element: <Navigate to="cliberduche-website" replace />,
    },
    {
      path: "cliberduche-website",
      element: <CliberducheWebsite />,
    },
    // {
    //   path: "cliberduche-website/sample-project",
    //   element: <SampleProjects />,
    // },
  ],
};

export default WebRoutes;

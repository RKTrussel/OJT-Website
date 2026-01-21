import React from "react";
import { Navigate } from "react-router-dom";

const CliberducheWebsite = React.lazy(() =>
  import("../pages/CliberducheWebsite")
);
const BridgeConstructionMain = React.lazy(() =>
  import("../pages/BridgeConstructionMain")
);
const LandDevelopmentMain = React.lazy(() =>
  import("../pages/LandDevelopmentMain")
);
const RoadConstructionMain = React.lazy(() =>
  import("../pages/RoadConstructionMain")
);

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
    {
      path: "cliberduche-website/bridge-construction",
      element: <BridgeConstructionMain />,
    },
    {
      path: "cliberduche-website/land-development",
      element: <LandDevelopmentMain />,
    },
    {
      path: "cliberduche-website/road-construction",
      element: <RoadConstructionMain />,
    },
  ],
};

export default WebRoutes;

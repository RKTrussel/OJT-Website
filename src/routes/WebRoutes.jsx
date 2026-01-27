import React from "react";
import { Navigate } from "react-router-dom";

const CliberducheWebsite = React.lazy(
  () => import("../pages/CliberducheWebsite"),
);
const CBD_2019Main = React.lazy(() => import("../pages/CBD_2019Main"));
const MDI_2024Main = React.lazy(() => import("../pages/MDI_2024Main"));
const MDI_2025Main = React.lazy(() => import("../pages/MDI_2025Main"));
const MDI_2026Main = React.lazy(() => import("../pages/MDI_2026Main"));
const Pier2_NorthHarbour2026Main = React.lazy(
  () => import("../pages/Pier2_NorthHarbour2026Main"),
);
const SilangCavite2021Main = React.lazy(
  () => import("../pages/SilangCavite2021Main"),
);
const TanzaCavite2026Main = React.lazy(
  () => import("../pages/TanzaCavite2026Main"),
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
      path: "cliberduche-website/cbd-2019",
      element: <CBD_2019Main />,
    },
    {
      path: "cliberduche-website/mdi-2024",
      element: <MDI_2024Main />,
    },
    {
      path: "cliberduche-website/mdi-2025",
      element: <MDI_2025Main />,
    },
    {
      path: "cliberduche-website/mdi-2026",
      element: <MDI_2026Main />,
    },
    {
      path: "cliberduche-website/pier-2-north-harbour-2026",
      element: <Pier2_NorthHarbour2026Main />,
    },
    {
      path: "cliberduche-website/silang-cavite-2021",
      element: <SilangCavite2021Main />,
    },
    {
      path: "cliberduche-website/tanza-cavite-2026",
      element: <TanzaCavite2026Main />,
    },
  ],
};

export default WebRoutes;

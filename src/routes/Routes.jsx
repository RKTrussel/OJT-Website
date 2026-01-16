import { Suspense, useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebRoutes from "./WebRoutes";
import LinearIndeterminate from "../components/LinearIndeterminate";

const Routes = () => {
  const router = useMemo(() => createBrowserRouter([WebRoutes]), []);

  return (
    <Suspense fallback={<LinearIndeterminate />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;

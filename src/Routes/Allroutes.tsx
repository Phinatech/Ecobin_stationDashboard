import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { StationAuthlay } from "../Components/Layout/stationAuthLayout";
import { ErrorBoundary, HomeLoading, NotFound } from "../utils";
import { StationDashboardlayout } from "../Components";
import { StationHome } from "../pages";
import Registermallam from "../pages/stationDashboard/Registermallam";
import Notification from "../pages/stationDashboard/Notification";
import AssignMallam from "../pages/stationDashboard/AssignMallam";

const Stationlogin = lazy(() => import("../pages/auth/Stationlogin"));

export const element = createBrowserRouter([
  {
    path: "/",
    element: <StationAuthlay />,
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <div>
                <HomeLoading />
              </div>
            }
          >
            <Stationlogin />,
          </Suspense>
        ),
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  //station routes
  {
    path: "/station",
    element: <StationDashboardlayout />,

    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <div>
                <HomeLoading />
              </div>
            }
          >
            <StationHome />
          </Suspense>
        ),
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "/station/mallam",
        element: <Registermallam />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "/station/Notify",
        element: <Notification />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "/station/assign",
        element: <AssignMallam />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

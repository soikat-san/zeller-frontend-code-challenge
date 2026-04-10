import App from "./App";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFoundView from "./components/common/notfound";

const Home = lazy(() => import("./pages/home"));
const Customers = lazy(() => import("./pages/customers"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundView />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
    ],
  },
]);

import App from "./App";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundView from "./components/common/notfound";

const Home = lazy(() => import("./pages/home"));
const Customers = lazy(() => import("./pages/customers"));

const routerConfig = createBrowserRouter([
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

const AppRouter = () => {
  return <RouterProvider router={routerConfig} />;
};

export default AppRouter;

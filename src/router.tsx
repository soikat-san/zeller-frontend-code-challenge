import App from "./App";
import { Home } from "./pages/home";
import { Customers } from "./pages/customers";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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

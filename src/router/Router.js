// @ts-nocheck
import { createBrowserRouter } from "react-router-dom";
import Rooot from "../layout/Root/Rooot";
import Contact from "../pages/Contact/Contact";
import HomePage from "../pages/Home/HomePage/HomePage";
import Cart from "../redux/cart/Cart";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Rooot />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
export default routes;

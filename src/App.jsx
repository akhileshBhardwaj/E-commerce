import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Testimonial from "./pages/Testimonial";
import AboutUs from "./pages/AboutUs";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "product/:id",
          element: <ProductDetail />,
        },
        {
          path: "testimonial",
          element: <Testimonial />,
        },
        {
          path: "about",
          element: <AboutUs />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <CheckOut />,
        },
      ],
    },
  ]);

  return <RouterProvider router={route} />;
};

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Testimonial from "./pages/Testimonial";
import AboutUs from "./pages/AboutUs";

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
          path: "testimonial",
          element: <Testimonial />,
        },
        {
          path: "about",
          element: <AboutUs />,
        },
      ],
    },
  ]);

  return <RouterProvider router={route} />;
};

export default App;

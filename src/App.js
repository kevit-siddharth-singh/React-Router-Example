import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import _404_Page from "./pages/_404_Page";
import RootLayout from "./pages/RootLayout";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <HomePage />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetailsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <_404_Page />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

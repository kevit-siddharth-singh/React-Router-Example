import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import _404_Page from "./pages/_404_Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product",
    element: <Product />,
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

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Install from "../pages/Install/Install";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import NotFoundProduct from "../pages/NotFoundProduct/NotFoundProduct.jsx";
import AppNotFound from "../pages/AppNotFound/AppNotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement: <ErrorPage />, 

    children: [
      // 1. Home Page Route: '/'
      {
        index: true, 
        element: <Home />,
      },
      // 2. All Products Route: '/products'
      {
        path: "products",
        element: <Products />,
      },
      // 3. Single Product Details Route: '/product/123'
      {
        path: "product/:id", // 
        element: <ProductDetails />,
      },
      // 4. Installed Apps List Route: '/install'
      {
        path: "install",
        element: <Install />,
      },
      // 5. Custom Error Pages (যদি router.jsx এ না থাকে)
      // Note: Product not found (search এর পর) এবং App not found (URL ভুল)
      {
        path: "product-not-found",
        element: <NotFoundProduct />,
      },
      {
        path: "app-not-found",
        element: <AppNotFound />,
      },
      // 6. 404 Catch-all Route
      {
        path: "*", // '*' মানে, উপরে কোনো রুট ম্যাচ না করলে এটি দেখাও
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
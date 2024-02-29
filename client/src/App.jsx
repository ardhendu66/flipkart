import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import CartPage from "./pages/CartPage"
import Checkout from "./pages/Checkout"
import ProductDetails from "./features/Product/ProductDetail/ProductDetails"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    children: [
    ]
  },
  {
    path: '/register',
    element: <SignupPage />
  },
  {
    path: '/cart',
    element: <CartPage />
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  {
    path: '/product',
    element: <ProductDetails />
  },
  {
    path: '/*',
    element: <div>Error Page</div>
  }
])

export default () => {
  return (
    <RouterProvider router={router} />
  )
}
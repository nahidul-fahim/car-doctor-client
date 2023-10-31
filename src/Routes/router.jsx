import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Erropage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Components/Auth/Login";
import Signup from "../Components/Auth/Signup";
import CheckOut from "../Pages/CheckOut/CheckOut";
import MyCart from "../Pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoute><CheckOut /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/mycart",
        element: <PrivateRoute><MyCart /></PrivateRoute>
      }
    ]
  },
]);

export default router;
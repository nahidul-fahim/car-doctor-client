import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Erropage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Components/Auth/Login";
import Signup from "../Components/Auth/Signup";

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
        }
      ]
    },
  ]);

  export default router;
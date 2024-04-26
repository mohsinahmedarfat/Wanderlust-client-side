import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorPage";
import Root from "../layout/Root";
import AllSpot from "../pages/allSpot/AllSpot";
import AddSpot from "../pages/addSpot/AddSpot";
import MyList from "../pages/myList/MyList";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allSpot",
        element: <AllSpot></AllSpot>,
      },
      {
        path: "/addSpot",
        element: <AddSpot></AddSpot>,
      },
      {
        path: "/myList",
        element: <MyList></MyList>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;

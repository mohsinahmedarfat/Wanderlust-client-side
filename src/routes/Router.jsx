import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorPage";
import Root from "../layout/Root";
import AllSpot from "../pages/allSpot/AllSpot";
import AddSpot from "../pages/addSpot/AddSpot";
import MyList from "../pages/myList/MyList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import SpotDetails from "../pages/allSpot/SpotDetails";
import UpdateSpot from "../pages/myList/UpdateSpot";
import CountrySpots from "../pages/home/countries/CountrySpots";

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
        loader: () =>
          fetch("https://b9a10-wanderlust-server.vercel.app/touristSpots"),
      },
      {
        path: "/spot/:id",
        element: (
          <PrivateRoute>
            <SpotDetails></SpotDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b9a10-wanderlust-server.vercel.app/touristSpots/${params.id}`
          ),
      },
      {
        path: "/countries/:country_name",
        element: <CountrySpots></CountrySpots>,
      },
      {
        path: "/addSpot",
        element: (
          <PrivateRoute>
            <AddSpot></AddSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: `/updateSpot/:id`,
        element: (
          <PrivateRoute>
            <UpdateSpot></UpdateSpot>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b9a10-wanderlust-server.vercel.app/touristSpots/${params.id}`
          ),
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

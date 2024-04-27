import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SpotDetails from "../pages/SpotDetails/SpotDetails";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import PrivateRoute from "./PrivateRoute";
import { apiBaseUrl } from "../utils/baseUrl";
import MyList from "../pages/MyList/MyList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`${apiBaseUrl}/spot`),
      },
      {
        path: "/spot-details/:id",
        element: (
          <PrivateRoute>
            <SpotDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-tourists-spots",
        element: <AllTouristsSpot />,
        loader: () => fetch(`${apiBaseUrl}/spot`),
      },
      {
        path: "/my-list",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-tourist-spot",
        element: (
          <PrivateRoute>
            <AddTouristsSpot />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
]);

// Export
export default router;

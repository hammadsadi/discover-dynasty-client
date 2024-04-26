import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SpotDetails from "../pages/SpotDetails/SpotDetails";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/spot-details/:id",
        element: <SpotDetails />,
      },
      {
        path: "/all-tourists-spots",
        element: <AllTouristsSpot />,
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

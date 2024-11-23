import Admin from "@/pages/admin";
import Home from "@/pages/home";
import Wishes from "@/pages/wishes";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/admin",
        element: <Admin />,
    },
    {
      path: "/wishes",
      element: <Wishes />,
  },
]);

export { router };
import Admin from "@/pages/admin";
import Home from "@/pages/home";
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
]);

export { router };
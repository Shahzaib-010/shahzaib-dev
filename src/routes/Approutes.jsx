import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Work from "../pages/Work";
import RootWrapper from "../components/animations/RootWrapper";
import Perspective from "../pages/Perspective";
import PageLayout from "../layout/PageLayout";



const router = createBrowserRouter([
  {
    element: <RootWrapper />,
    children: [
      {
        element: <PageLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "/work", element: <Work /> },
          { path: "/perspective", element: <Perspective /> },
          { path: "/contact", element: <Contact /> },
          
        ],
      },
    ],
  },
]);

export default router;

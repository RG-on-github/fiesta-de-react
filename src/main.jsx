import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main_pg from "./components/Main_pg.jsx";
import Gallery_pg from "./components/Gallery_pg.jsx";
import Project_pg from "./components/Project_pg.jsx";
import Certification_pg from "./components/Certification_pg.jsx";
import Contact_pg from "./components/Contact_pg.jsx";
import Error_pg from "./components/Error_pg.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_pg />,
    errorElement: <Error_pg/>
  },
  {
    path: "/gallery",
    element: <Gallery_pg />,
  },
  {
    path: "/projects",
    element: <Project_pg />,
  },
  {
    path: "/certifications",
    element: <Certification_pg />,
  },
  {
    path: "/contacts",
    element: <Contact_pg />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

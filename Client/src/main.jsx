import "./styles/index.scss";
// DEPENDANCIES
import ReactDOM from "react-dom/client";
import { Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { StrictMode } from "react";

// ROUTES
import HomePage from "./Routes/Home/home.jsx";
import LandingPage from "./Routes/Landing/Landing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

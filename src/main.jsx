import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import App from "./App";

// 👇 NEW IMPORT (we will create this file next)
import MacPortfolioScreen from "./components/macbook/MacPortfolioScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // your 3D portfolio
  },
  {
    path: "/macbook",
    element: <MacPortfolioScreen />, // MacBook screen
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

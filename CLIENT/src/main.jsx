import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { store } from "./Redux/Store.js";
import { Provider } from "react-redux";

import Layout from "./Pages/Layout/Layout.jsx";
import SignIn from "./Pages/SignIn/SignIn.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Students from "./Pages/Students/Students.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Students",
        element: <Students />,
      },
    ],
  },

  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { store } from "./Redux/Store.js";
import { Provider } from "react-redux";

import Layout from "./Pages/Layout.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Student from "./Pages/Student.jsx";
import  Home  from "./Pages/Home.jsx";
import Class from "./Pages/Class.jsx";
import Counselling from "./Pages/Counselling.jsx";
import Statics from "./Pages/Statics.jsx";
import Help from "./Pages/Help.jsx";
import Admin from "./Pages/Admin.jsx";
import Contact from "./Pages/contact_page/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },{
        path: "/class",
        element: <Class />,
      },{
        path: "/Student",
        element: <Student />,
      },{
        path: "/Counselling",
        element: <Counselling/>,
      },
      {
        path: "/Statics",
        element: < Statics/>,
      },
      {
        path: "/help",
        element: < Help/>,
      },
      {
        path: "/admin",
        element: < Admin/>,
      },
      {
        path: "/contact",
        element: < Contact/>,
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

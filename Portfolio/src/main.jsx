import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Home from "./routes/Home";
import Resume from "./routes/Resume";
import Contact from "./routes/Contact";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter ([
  {
    path:"/",
    element: <Home />,
    errorElement: <ErrorPage/>
  },
  {
    path:"/resume",
    element: <Resume/>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/contact",
    element:<Contact/>,
    errorElement: <ErrorPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

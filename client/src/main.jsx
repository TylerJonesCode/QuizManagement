import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom"

import Root from "./routes/Root"
import ErrorPage from "./routes/ErrorPage.jsx"
import Test from "./routes/Test"
import Login from "./routes/Login"
import Signup from "./routes/Signup"
import CreateTest from "./routes/CreateTest"
import TestDashboard from "./routes/TestDashboard"
import Grades from "./routes/Grades"
import CompleteTest from "./routes/CompleteTest"

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "test/create",
        element: <CreateTest />
      },
      {
        path: "test/dashboard",
        element: <TestDashboard />
      },
      {
        path: "grades",
        element: <Grades />
      },
      {
        path: "test/complete",
        element: <CompleteTest />
      }
      

    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

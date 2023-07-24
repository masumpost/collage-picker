import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Collages from './Components/Collages';
import Main from './Components/Main';
import Admission from './Components/Admission';
import MyCollage from './Components/MyCollage';
import Login from './Components/Login';
import Register from './Components/Register';
import ErrorPage from './Components/Errorpage';
import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/collages",
        element: <Collages></Collages>
      },
      {
        path: "/admission",
        element: <Admission></Admission>
      },
      {
        path: "/myCollage",
        element: <MyCollage></MyCollage>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

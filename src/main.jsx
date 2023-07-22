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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path:"/myCollage",
        element: <MyCollage></MyCollage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)

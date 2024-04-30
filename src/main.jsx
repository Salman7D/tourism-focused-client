import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import NotFound from './Components/NotFound';
import Home from './Components/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import AllTouristsSpot from './Components/AllTouristsSpot';
import AddtouristsSpot from './Components/AddtouristsSpot';
import MyList from './Components/MyList';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';
import UpdatedSpot from './Components/UpdatedSpot';
import Details from './Pages/Details';
import ProductsDetails from './Pages/ProductsDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/touristsSpot")
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/allTouristsSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch("http://localhost:5000/touristsSpot")
      },
      {
        path: "/addTouristsSpot",
        element: <PrivateRoutes><AddtouristsSpot></AddtouristsSpot></PrivateRoutes>
      },
      // {
      //   path: "/myList/:email",
      //   element: <PrivateRoutes><MyList></MyList></PrivateRoutes>,
      //   loader: ({params}) => fetch(`http://localhost:5000/myAddedLists/${params.email}`)
      // },
      {
        path: "/myList",
        element: <PrivateRoutes><MyList></MyList></PrivateRoutes>,
        // loader: () => fetch("http://localhost:5000/touristsSpot")
      },
      {
        path: "/updatedSpot/:id",
        element: <PrivateRoutes><UpdatedSpot></UpdatedSpot></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/touristsSpot/${params.id}`)
      },
      {
        path: "/allSpot/:id",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/touristsSpot/${params.id}`)
      },
      {
        path: "/products/:id",
        element: <PrivateRoutes><ProductsDetails></ProductsDetails></PrivateRoutes>
      }
      

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)

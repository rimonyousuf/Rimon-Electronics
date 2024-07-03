import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Cart/Cart";
import AdminRoute from "./AdminRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Contact from "../Pages/Contact/Contact";
import Payment from "../Pages/Dashboard/Payment/Payment";

  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            // normal user routes
            {
                path: "cart",
                element: <Cart/>
            },
            {
                path: "payment",
                element: <Payment/>
            },

            // admin route only
            {
                path: "addItems",
                element: <AdminRoute><AddItems/></AdminRoute>
            },
            {
                path: "manageItems",
                element: <AdminRoute><ManageItems/></AdminRoute>
            },
            {
                path: "updateItem/:id",
                element: <AdminRoute><UpdateItem/></AdminRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/item/${params.id}`)
            },
            {
                path: "users",
                element: <AdminRoute><AllUsers/></AdminRoute>
            },
        ]
    }
  ])
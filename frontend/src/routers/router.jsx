import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckOutPage from "../pages/books/CheckOutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrdersPage from "../pages/books/OrdersPage";
import LoginAdmin from "../components/LoginAdmin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
        {
            path: "/",
            element:<Home/> 
            
        },
        {
            path: "/login",
            element:<Login/>
        },
        {
            path: "/register",
            element:<Register/>
        },
        {
            path: "/cart",
            element:<CartPage/>
        },
        {
            path: "/checkout",
            element:<PrivateRoute> <CheckOutPage/></PrivateRoute>
        },
        {
            path: "/book/:id",
            element:<SingleBook/>
        },
        {
            path: "/orders/:email",
            element:<PrivateRoute><OrdersPage/></PrivateRoute>
        }
      
    ]
    },
    {
            path: "/admin",
            element:<LoginAdmin/>
    },
    {
        path: "/dashboard", 
        element: <h1>DashBoard</h1>,
        children:[
            {
                path: "dashboard-home",
                element:<h1>DashBoard Home</h1>
            },
            {
                path: "add-new-book",
                element:<h1>add new book</h1>
            },
            {
                path: "edit-book/:id",
                element:<h1>edit books</h1>
            },
            {
                path: "manage-books",
                element:<h1>manage books</h1>
            }
        ]
            
    }
    
])

export default router;
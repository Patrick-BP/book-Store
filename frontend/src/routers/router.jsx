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
    
])

export default router;
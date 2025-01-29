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
import DashBoardLayout from "../pages/dashboard/DashBoardLayout";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBook from "../pages/dashboard/editBook/UpdateBook";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import DashBoard from "../pages/dashboard/DashBoard";
import AdminRoute from "./AdminRoute";

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
        element: <AdminRoute><DashBoardLayout/></AdminRoute> ,
        children:[
            {
                path: "",
                element:<AdminRoute><DashBoard/> </AdminRoute>   
            },
            {
                path: "add-new-book",
                element:<AdminRoute><AddBook/></AdminRoute>
            },
            {
                path: "edit-book/:id",
                element:<AdminRoute><UpdateBook/></AdminRoute>
            },
            {
                path: "manage-books",
                element:<AdminRoute><ManageBooks/></AdminRoute>
            }
        ]
            
    }
    
])

export default router;
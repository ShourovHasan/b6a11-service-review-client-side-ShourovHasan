import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddReviews from "../../Pages/AddReviews/AddReviews";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addServices',
                element: <AddServices></AddServices>
            },
            {
                path: '/addReviews',
                element: <AddReviews></AddReviews>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])

export default router;
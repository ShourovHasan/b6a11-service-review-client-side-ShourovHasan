import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Services3 from "../../Pages/Home/Services/Services3";
import Services from "../../Pages/Home/Services/Services";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";



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
                path: '/home',
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
                path: '/services3',
                element: <Services3></Services3>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/service/${params.id}`)
                }
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ],
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])

export default router;
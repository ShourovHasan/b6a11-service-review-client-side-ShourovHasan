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
import AddReview from "../../Pages/Review/AddReview";
import Reviews from "../../Pages/MyReviews/Reviews";
import UpdateReviews from "../../Pages/MyReviews/UpdateReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
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
                path: '/serviceReviews/:id',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/serviceReviews/${params.id}`)
                }
            },
            {
                path: '/updateReviews/:id',
                element: <PrivateRoute><UpdateReviews></UpdateReviews></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/updateReviews/${params.id}`)
                }
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
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
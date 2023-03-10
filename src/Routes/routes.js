import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Mian from "../Layouts/Main";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AddService from "../Pages/Dashboard/AddService/AddService";
import Book from "../Pages/Dashboard/Book/Book";
import PayBook from "../Pages/Dashboard/Book/PayBook";
import BookingList from "../Pages/Dashboard/BookingList/BookingList";
import MakeAdmin from "../Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageReview from "../Pages/Dashboard/ManageReview/ManageReview";
import ManageServices from "../Pages/Dashboard/ManageServices/ManageServices";
import UpdateService from "../Pages/Dashboard/ManageServices/UpdateService";
import OrderList from "../Pages/Dashboard/OrderList/OrderList";
import Review from "../Pages/Dashboard/Review/Review";
import ExploreServices from "../Pages/ExploreServices/ExploreServices";
import ServiceDetails from "../Pages/ExploreServices/ServiceDetails";
import Home from "../Pages/Home/Home/Home";
import MoreTestimonials from "../Pages/Home/Testimonials/MoreTestimonials";
import Login from "../Pages/Login/Login";
import OurTeam from "../Pages/OurTeam/OurTeam";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Mian></Mian>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/explore',
                element: <ExploreServices></ExploreServices>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://jerins-parlour-server-livid.vercel.app/services/${params.id}`)
            },
            {
                path: '/more-testimonials',
                element: <MoreTestimonials></MoreTestimonials>
            },
            {
                path: '/our-team',
                element: <OurTeam></OurTeam>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/dashboard',
        element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
        children: [
            {
                path: '/dashboard/book',
                element: <Book></Book>,
            },
            {
                path: '/dashboard/book/payment/:id',
                loader: ({params}) => fetch(`https://jerins-parlour-server-livid.vercel.app/admin/book/${params.id}`),
                element: <PayBook></PayBook>,
            },
            {
                path: '/dashboard/booking-list',
                element: <BookingList></BookingList>,
            },
            {
                path: '/dashboard/review',
                element: <Review></Review>,
            },
            {
                path: '/dashboard/order-list',
                element: <AdminRoute><OrderList></OrderList></AdminRoute>,
            },
            {
                path: '/dashboard/add-service',
                element: <AdminRoute><AddService></AddService></AdminRoute>,
            },
            {
                path: '/dashboard/make-admin',
                element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>,
            },
            {
                path: '/dashboard/manage-services',
                element: <AdminRoute><ManageServices></ManageServices></AdminRoute>,
            },
            {
                path: '/dashboard/manage-review',
                element: <AdminRoute><ManageReview></ManageReview></AdminRoute>,
            },
            {
                path: '/dashboard/manage-services/update/:id',
                loader: ({params}) => fetch(`https://jerins-parlour-server-livid.vercel.app/services/${params.id}`),
                element: <AdminRoute><UpdateService></UpdateService></AdminRoute>,
            },
        ]
    }
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Mian from "../Layouts/Main";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AddService from "../Pages/Dashboard/AddService/AddService";
import Book from "../Pages/Dashboard/Book/Book";
import BookingList from "../Pages/Dashboard/BookingList/BookingList";
import MakeAdmin from "../Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageServices from "../Pages/Dashboard/ManageServices/ManageServices";
import OrderList from "../Pages/Dashboard/OrderList/OrderList";
import Review from "../Pages/Dashboard/Review/Review";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import OurPortfolio from "../Pages/OurPortfolio/OurPortfolio";
import OurTeam from "../Pages/OurTeam/OurTeam";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
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
                path: '/our-portfolio',
                element: <OurPortfolio></OurPortfolio>
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
                path: '/dashboard/booking-list',
                element: <BookingList></BookingList>,
            },
            {
                path: '/dashboard/review',
                element: <Review></Review>,
            },
            {
                path: '/dashboard/order-list',
                element: <OrderList></OrderList>,
            },
            {
                path: '/dashboard/add-service',
                element: <AddService></AddService>,
            },
            {
                path: '/dashboard/make-admin',
                element: <MakeAdmin></MakeAdmin>,
            },
            {
                path: '/dashboard/manage-services',
                element: <ManageServices></ManageServices>,
            },
        ]
    }
]);

export default router;
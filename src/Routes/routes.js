import { createBrowserRouter } from "react-router-dom";
import Mian from "../Layouts/Main";
import SignUpLayout from "../Layouts/SignUpLayout";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import OurPortfolio from "../Pages/OurPortfolio/OurPortfolio";
import OurTeam from "../Pages/OurTeam/OurTeam";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";

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
        element: <SignUpLayout></SignUpLayout>
    }
]);

export default router;
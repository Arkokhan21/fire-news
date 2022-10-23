import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import News from "../Pages/News/News";
import Profile from "../Pages/Others/Profiles/Profile";
import TermsAndConditions from "../Pages/Others/TermsAndConditions";
import Privateroute from "./Privateroute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://fire-news-server-sage.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://fire-news-server-sage.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <Privateroute><News></News></Privateroute>,
                loader: ({ params }) => fetch(`https://fire-news-server-sage.vercel.app/news/${params.id}`)
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
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <Privateroute><Profile></Profile></Privateroute>
            }
        ]
    },
]);
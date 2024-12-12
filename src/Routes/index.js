import Total from "../Pages/CartsPage";
import LandingPage from "../Pages/WishlisttPage";

export const appRoutes = [
    {
        path: "/", 
        element: <LandingPage/>, 
    },
    {
        path: "/Total-page",
        element: <Total/>,
    },
];

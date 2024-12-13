import Total from "../Pages/CartsPage";
import FinalPage from "../Pages/CheckoutPage";
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
    {
        path:"/Form-page",
        element:<FinalPage/>,
    }
];

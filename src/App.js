import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login";
import RecipeFinder from "./components/RecipeFinder";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "./context/ThemeContext";
import OrderConfirmation from "./components/OrderConfirmation";
import ProtectedRoute from "./components/ProtectedRoute";


const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <ThemeProvider>
                <div className="app min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors duration-500">
                    <ToastContainer />
                    <Header />
                    <Outlet />
                </div>
            </ThemeProvider>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element:(
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                )
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/recipe-finder",
                element:(
                <ProtectedRoute>
                    <RecipeFinder />
                </ProtectedRoute>
                )
            },
            {
                path: "/order-confirmation",
                element: <OrderConfirmation />
            },
        ],
        errorElement: <Error />
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
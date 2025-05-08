import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { auth } from '../utils/firebase'; // Import auth
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import necessary Firebase methods
import { useTheme } from "../context/ThemeContext";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const cartItems = useSelector((store) => store.cart.items);
    const navigate = useNavigate();
    const { isDarkMode, toggleTheme } = useTheme();
    
    useEffect(() => {
        // Set the initial button state based on user's authentication status
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setBtnNameReact("Logout");
            } else {
                setBtnNameReact("Login");
            }
        });

        return () => {
            unsubscribe(); // Cleanup the subscription on unmount
        };
    }, []);

    const handleLoginClick = () => {
        if (btnNameReact === "Login") {
            navigate("/login");
        } else {
            signOut(auth) // Sign out the user
                .then(() => {
                    setBtnNameReact("Login"); // Reset button to "Login"
                    navigate("/"); // Optionally redirect the user after logging out
                })
                .catch((error) => {
                    console.error("Error during logout:", error);
                });
        }
    };

    return (
        <div className={`flex justify-between items-center py-3 px-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200'} shadow-lg transition-all duration-500 ease-in-out`}>
            <div className="flex-1 w-10">
            <Link to="/" > 
                <img 
                    className="w-16 h-auto transition-transform duration-500 hover:rotate-360 hover:scale-110"
                    src={logo} 
                    alt="Logo" 
                />
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="flex flex-wrap space-x-8">
                    <li className={`m-0 px-4 py-3 text-lg font-medium transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-white'} shadow-md rounded-lg hover:translate-x-1`}>
                        <Link to="/" > Home</Link>
                    </li>
                    <li className={`m-0 px-4 py-3 text-lg font-medium transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-white'} shadow-md rounded-lg hover:translate-x-1`}>
                        <Link to="/about"> About Us</Link>
                    </li>
                    <li className={`m-0 px-4 py-3 text-lg font-medium transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-white'} shadow-md rounded-lg hover:translate-x-1`}>
                        <Link to="/contact" > Contact Us</Link>
                    </li>
                    <li className={`m-0 px-4 py-3 text-lg font-medium transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-white'} shadow-md rounded-lg hover:translate-x-1`}>
                        <Link to="/recipe-finder"> Find Recipe</Link>
                    </li>
                    <li className={`m-0 px-4 py-3 text-lg font-medium transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-white'} shadow-md rounded-lg hover:translate-x-1 cursor-pointer`}>
                        <Link to="/cart" >Cart ({cartItems.length} item)</Link>
                    </li>
                    <button 
                        className={`m-0 py-2 px-4 ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-orange-500'} text-white text-lg font-medium transition-colors duration-300 ease-in-out hover:scale-105 shadow-md rounded-lg hover:translate-x-1`}
                        onClick={handleLoginClick}  
                    >
                        {btnNameReact}
                    </button>
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-lg transition-colors duration-300 ${
                            isDarkMode 
                            ? 'bg-gray-700 hover:bg-gray-600 text-yellow-300' 
                            : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
                        }`}
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;

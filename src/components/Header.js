import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { auth } from '../utils/firebase'; // Import auth
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import necessary Firebase methods

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const cartItems = useSelector((store) => store.cart.items);
    const navigate = useNavigate();
    
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
        <div className="flex justify-between items-center py-3 px-4 bg-gray-200 shadow-lg transition-all duration-500 ease-in-out">
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
                    <li className="m-0 px-4 py-3 text-lg font-medium transition-colors duration-300 hover:bg-white shadow-md rounded-lg hover:translate-x-1">
                        <Link to="/" > Home</Link>
                    </li>
                    <li className="m-0 px-4 py-3 text-lg font-medium transition-colors duration-300 hover:bg-white shadow-md rounded-lg hover:translate-x-1">
                        <Link to="/about"> About Us</Link>
                    </li>
                    <li className="m-0 px-4 py-3 text-lg font-medium transition-colors duration-300 hover:bg-white shadow-md rounded-lg hover:translate-x-1">
                        <Link to="/contact" > Contact Us</Link>
                    </li>
                    <li className="m-0 px-4 py-3 text-lg font-medium transition-colors duration-300 hover:bg-white shadow-md rounded-lg hover:translate-x-1 cursor-pointer">
                        <Link to="/cart" >Cart ({cartItems.length} item)</Link>
                    </li>
                    <button 
                        className="m-0 py-2 px-4 bg-blue-500 text-white text-lg font-medium transition-colors duration-300 ease-in-out hover:bg-orange-500 hover:scale-105 shadow-md rounded-lg hover:translate-x-1"
                        onClick={handleLoginClick}  
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;

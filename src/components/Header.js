import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
        <div className="flex justify-between items-center py-3 px-4 bg-gray-200 shadow-lg transition-all duration-500 ease-in-out">
            <div className="flex-1 w-10">
                <img 
                    className="w-20 h-auto transition-transform duration-500 hover:rotate-360 hover:scale-110" // Adjusted width from w-32 to w-24
                    src={LOGO_URL} 
                    alt="Logo" 
                />
            </div>
            <div className="flex items-center">
                <ul className="flex flex-wrap space-x-8">
                    <li className="m-0 px-4 py-3 text-lg font-medium transition-colors duration-300 hover:bg-white shadow-md rounded-lg hover:translate-x-1">
                        <Link to="/"> Home</Link>
                    </li>
                    <li className="m-0 px-4 py-3 text-lg font-medium transition-colors duration-300 hover:bg-white shadow-md rounded-lg hover:translate-x-1">
                        <Link to="/about"> About Us</Link>
                    </li>
                    <li className="m-0 px-4 py-3 text-lg font-medium transition-colors duration-300 hover:bg-white shadow-md rounded-lg hover:translate-x-1">
                        <Link to="/contact"> Contact Us</Link>
                    </li>
                    <li className="m-0 px-4 py-3 text-lg font-medium transition-colors duration-300 hover:bg-white shadow-md rounded-lg hover:translate-x-1 cursor-pointer">
                        Cart
                    </li>
                    <button 
                        className="m-0 py-2 px-4 bg-blue-500 text-white text-lg font-medium transition-colors duration-300 ease-in-out hover:bg-orange-500 hover:scale-105 shadow-md rounded-lg hover:translate-x-1"
                        onClick={() => {
                            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;

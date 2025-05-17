import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setBtnNameReact(user ? "Logout" : "Login");
    });
    return () => unsubscribe();
  }, []);

  const handleLoginClick = () => {
    if (btnNameReact === "Login") {
      navigate("/login");
    } else {
      signOut(auth)
        .then(() => {
          setBtnNameReact("Login");
          navigate("/");
        })
        .catch((error) => console.error("Logout error:", error));
    }
  };

  return (
    <header className={`w-full shadow-md transition-all duration-500 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-16 h-auto" />
        </Link>

        {/* Hamburger button */}
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <nav className="hidden lg:flex space-x-6 items-center">
          <NavLinks
            cartItems={cartItems}
            btnNameReact={btnNameReact}
            handleLoginClick={handleLoginClick}
            toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
          />
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-4">
          <NavLinks
            cartItems={cartItems}
            btnNameReact={btnNameReact}
            handleLoginClick={handleLoginClick}
            toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
            mobile
          />
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ cartItems, btnNameReact, handleLoginClick, toggleTheme, isDarkMode, mobile = false }) => (
  <>
    <Link to="/" className={navLinkClasses(mobile)}>Home</Link>
    <Link to="/recipe-finder" className={navLinkClasses(mobile)}>Find Recipe</Link>
    <Link to="/cart" className={navLinkClasses(mobile)}>
      Cart ({cartItems.length} item{cartItems.length !== 1 ? "s" : ""})
    </Link>
    <button onClick={handleLoginClick} className={`${navLinkClasses(mobile)} bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2`}>
      {btnNameReact}
    </button>
    <button
      onClick={toggleTheme}
      className={`${navLinkClasses(mobile)} p-2 rounded ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-300 text-black'}`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  </>
);

const navLinkClasses = (mobile) =>
  `${mobile ? "block w-full" : "inline-block"} px-4 py-2 font-medium transition hover:scale-105`;

export default Header;

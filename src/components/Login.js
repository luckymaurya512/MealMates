
import { useState } from "react";
// import background from "../assets/bg-netflix.jpg";
import { checkValidData } from "../utils/validate";
import { useRef } from "react";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";
// import {signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignIn, setIsSignIn]= useState(true);

  const navigate = useNavigate(null);

  const email = useRef(null);

  const password = useRef(null)

  const name = useRef(null);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  }

  const [errorMessage, setErrorMessage] = useState(null);

  const handleButtonClick = () =>{
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(message);
    setErrorMessage(message);

    if(message) return;

    if(!isSignIn){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("User registered")
    console.log(user);
    navigate('/')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
    // ..
  });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user logged in")
    navigate('/')
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });
    }

  }

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] ">
      <div className="absolute inset-0 flex items-center justify-center bg-[#FFFFFF] bg-opacity-50 z-10">
        <div className="bg-black bg-opacity-75 px-16 py-12 rounded-lg shadow-lg "style={{ width: '30%' }}>
          <h2 className="text-3xl font-bold text-white mb-6">{isSignIn ? "Sign In" : "Sign Up"}</h2>
          <form onSubmit={(event)=>event.preventDefault()}>
            <div className="mb-4">
              {!isSignIn && <input
                type="text"
                id="name"
                ref={name}
                className="w-full p-3 rounded text-white focus:outline-none focus:ring-2 mb-4 focus:ring-white bg-transparent border opacity-75"
                placeholder="Full Name"
              />}
              <input
                type="text"
                id="email"
                ref={email}
                className="w-full p-3 rounded text-white focus:outline-none focus:ring-2 focus:ring-white bg-transparent border opacity-75"
                placeholder="Email or mobile number"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                ref={password}
                placeholder="Password"
                className="w-full p-3 rounded text-white focus:outline-none focus:ring-2 border bg-transparent opacity-75 focus:ring-white
                "
              />
            </div>
            <p className="text-red-500 text-sm font-semibold mb-4">{errorMessage} </p>
            <button
              type="submit"
              onClick={handleButtonClick}
              className="w-full bg-[#F97316] text-white p-3 rounded-lg font-semibold hover:bg-blue-500 transition duration-300"      
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
          {isSignIn && <h3 className="text-white text-center mt-2">OR</h3>}
          {isSignIn && 
          <div className=" items-center mt-4">
            <button
              type="submit"
              className="w-full bg-[#9ea0a0] opacity-50 text-white p-3 rounded-lg font-semibold hover:bg-[#313434] transition duration-300"      
            >
              <span className="text-white opacity-100">Use a sign-in code</span>
            </button>
            <br/>
            
            <p href="#" className="text-white hover:underline items-center mx-auto hover:text-gray-400 mt-2 ml-24 ">
              Forgot Password?
            </p>
          </div>}
          <div className="flex items-center mt-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-400">
              Remember me
            </label>
          </div>
          <div className="mt-6 text-left">
            {isSignIn ? <p className="text-gray-400">
              New to MealMates?{' '}
              <span href="#" className="text-white hover:underline cursor-pointer" 
              onClick={handleSignIn}>
                Sign up now.
              </span>
            </p> : <p className="text-gray-400">
              Already registered?{' '}
              <span href="#" className="text-white hover:underline cursor-pointer" 
              onClick={handleSignIn}>
                Sign in now.
              </span>
            </p> }
          </div>
          <div className="mt-6 text-left text-gray-400 text-xs">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Learn more.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

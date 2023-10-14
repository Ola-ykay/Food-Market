import React, { useState } from "react";
import loginImage from "../assets/loginImage.png";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const [rememberMe, setRememberMe] = useState(false);

 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email && password) {
      console.log(email, password);
      alert("Logged in successfully");
      navigate('/')
    }
    else{
      alert("Please fill all fields")
    }
    
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

//   const handleForgotPassword = () => {

//     sendPasswordResetEmail( auth, email)
//     .then(() => {
//       alert('A password reset email has been sent to your email address.')
//     })
//     .catch((error) => {
//      alert(error.message);
//     });
// };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="flex justify-center items-center bg-white pt-4 h-full w-full md:flex-col">
      <div className="flex justify-center ">
        <div className="">
          <img
            src={loginImage}
            alt="food"
            className="rounded-tl-2xl rounded-bl-2xl h-[580px] w-[500px]"
          />
        </div>

        <div className="bg-white rounded-tr-2xl rounded-br-2xl h-[580px] w-[500px] p-6 shadow-2xl">
          <div className="pb-2">
            <button className="text-sm">
              <Link to="/register">&lt; Back</Link>
            </button>
          </div>

          <h1 className="font-bold text-xl pt-8">Login</h1>
          <div className="flex gap-2 justify-between w-full py-2">
            <button className="flex  gap-2 justify-center items-center bg-bg-color px-8 py-3 rounded-lg">
              <FcGoogle className="text-lg" />
              <p className="text-xs">Sign up with Google</p>
            </button>

            <button className="flex justify-center items-center gap-2 bg-bg-color px-8 py-3 rounded-lg">
              <FaFacebook className="text-lg" />
              <p className="text-xs">Sign up with Facebook</p>
            </button>
          </div>
          <div className="relative p-">
            <h2 className="text-center px-2">Or</h2>
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[45%] border-t border-gray-400"></span>
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[45%] border-t border-gray-400"></span>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 w-full max-w-md"
          >
           
          
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="abc@gmail.com"
                className="bg-an-gray px-2 py-2 text-sm rounded-md placeholder-my-gray focus-within:outline focus-within:outline-blue-200"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="myPassword"
                className="bg-an-gray px-2 py-2 text-sm  rounded-md placeholder-my-gray focus-within:outline focus-within:outline-blue-200"
                required
              />
            </div>
            <div className="relative">
              <span
                onClick={togglePasswordVisibility}
                className="flex gap-3 font-semibold text-sm justify-center items-center absolute right-5 bottom-6 cursor-pointer"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
                {showPassword ? "hide" : "show"}
              </span>
            </div>

            <div className="flex items-center justify-between">
            <label className="text-xs flex items-center">
              <input
                type="checkbox"
                className="mr-2 h-6 w-6 border border-black text-white-700 focus:text-red-500 focus:outline-none"
                checked={rememberMe}
                onChange={handleRememberMeChange}
  
              />
              
              Remember Me
            </label>
            <Link to="/forgot-password" className="text-xs">
              Forgot Password?
            </Link>
          </div>

            <button
              type="submit"
              className="space-y-2 bg-my-orange text-white px-2 py-2 text-sm w-[400px] m-auto rounded-md"
            >
             Log in
            </button>
          </form>
         
          <div className="text-xs flex gap-2 items-center w-1/2 m-auto py-8">
            <p className="text-my-gray">Don't have an account? </p>
            <button className="text-my-orange">
              <Link to="/register">Sign up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

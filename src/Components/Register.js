import React, { useState } from "react";
import registerImage from "../assets/registerImage.png";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  

  const handleNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullname && email && password) {
      alert("Account created successfully");
      navigate("/login");
    }
    else {
      alert("Please fill all fields")
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center bg-white pt-4 h-full w-full md:flex-col">
      <div className="flex justify-center ">
        <div className="">
          <img
            src={registerImage}
            alt="food"
            className="rounded-tl-2xl rounded-bl-2xl h-[580px] w-[500px]"
          />
        </div>

        <div className="bg-white rounded-tr-2xl rounded-br-2xl h-[580px] w-[500px] p-6 shadow-2xl">
          <div className="pb-2">
            <button className="text-sm">
              <Link to="/login">&lt; Back</Link>
            </button>
          </div>

          <h1 className="font-bold text-xl py-2">Create Account</h1>
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
              <label htmlFor="fullName" className="mt-2 text-my-black2 text-sm">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullname}
                onChange={handleNameChange}
                placeholder="Timi Jane"
                className="bg-an-gray px-2 py-2 text-sm rounded-md placeholder-my-gray focus-within:outline focus-within:outline-blue-200"
              
              />
            </div>
            <div className="flex flex-col space-y-2 ">
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
                className="bg-an-gray px-2 py-2 text-sm rounded-md placeholder-my-gray focus-within:outline focus-within:outline-blue-200"
                
              />
            </div>
            <div className="relative">
              <span
                onClick={togglePassword}
                className="flex gap-3 font-semibold text-sm justify-center items-center absolute right-5 bottom-6 cursor-pointer"
              >
                {showPassword ? <FaEye /> :<FaEyeSlash /> }
                {showPassword ? "hide" : "show"}
              </span>
            </div>

            <button
              type="submit"
              className="bg-my-orange text-white px-2 py-2 text-sm w-[400px] m-auto rounded-md"
            >
              Sign up
            </button>
          </form>
          <div className="text-xs w-[350px] m-auto py-4 text-center">
            <p>
              By signing up you agree to our
              <span className="text-my-orange">
                {" "}
                terms of service, and privacy policy
              </span>
            </p>
          </div>
          <div className="text-xs flex gap-2 items-center w-1/2 m-auto">
            <p className="text-my-gray">Already have an account? </p>
            <button className="text-my-orange">
              <Link to="/login">Log in</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

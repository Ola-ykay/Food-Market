import React, { useState } from "react";
import forgotpassword from "../assets/forgotpassword.png";


import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  


 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <div className="flex justify-center items-center bg-white pt-4 h-full w-full md:flex-col">
      <div className="flex justify-center ">
        <div className="">
          <img
            src={forgotpassword}
            alt="food"
            className="rounded-tl-2xl rounded-bl-2xl h-[580px] w-[500px]"
          />
        </div>

        <div className="bg-white rounded-tr-2xl rounded-br-2xl h-[580px] w-[500px] p-6 shadow-2xl">
          <div className="pb-2">
            <button className="text-sm">
              <Link to="/login">&lt; Back to Login</Link>
            </button>
          </div>

          <h1 className="font-bold text-xl pt-8">Forgot Password</h1>
          <p className="text-xs py-5 text-my-gray">Send a link to your email to reset your password</p>

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

            
            <button
              type="submit"
              className="space-y-2 bg-my-orange text-white px-2 py-2 text-sm w-[400px] m-auto rounded-md"
            >
                <Link to='/reset-password' >
            Send Reset Link
            </Link>
            </button>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

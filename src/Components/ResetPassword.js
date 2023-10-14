import React, { useState } from "react";
import forgotpassword from "../assets/forgotpassword.png";


import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");  
  const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword= (e) => {
    setConfirmPassword(e.target.value)
  }
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
        setPasswordError("");
      // Reset form fields
      setPassword("");
      setConfirmPassword("");
    }
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

          <h1 className="font-bold text-xl pt-8">Reset Password</h1>
          <p className="text-xs py-5 text-my-gray">Please choose your new password</p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 w-full max-w-md"
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>

              <input
                type='password'
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="abc@gmail.com"
                className="bg-an-gray px-2 py-2 text-sm  rounded-md placeholder-my-gray outline-none"
                required
              />
            </div>
           
          
            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className="text-sm">
                confirm Password
              </label>
              <input
                type="password"
                id="email"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                placeholder="abc@gmail.com"
                className="bg-an-gray px-2 py-2 text-sm rounded-md placeholder-my-gray outline-none"
                required
              />
            </div>

            {passwordError && (
          <p className="text-red-500 text-xs italic">{passwordError}</p>
        )}

            
            

            
            <button
              type="submit"
              className="space-y-2 bg-my-orange text-white  px-2 py-2 text-sm w-[400px] m-auto rounded-md"
            >
            Save New Password
            </button>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

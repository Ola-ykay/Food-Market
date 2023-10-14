import React from "react";
import Header from "./Header";
import orangejuice from "../assets/orangejuice.png";
import BreadnBagle from "../assets/BreadnBagle.png";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
    <Navbar />
      <div className="w-full">
        <Header />
        <div className="flex">
          <div className="w-1/2 h-1/4 bg-myGray flex items-center justify-center text-my-black rounded-3xl m-8  p-3">
            <div className="p-5 w-full">
              <p className="text-black font-semibold text-2xl">
                Naranja Natural
              </p>
              <h1 className="text-black font-semibold text-2xl">
                Orange Juice
              </h1>
              <p className="text-xs mt-1 mb-8">
                Best selling fruit juice this summer
              </p>
              <div className="">
                <button className="bg-white px-8 py-2 text-xs">Shop Now</button>
              </div>
            </div>

            <div className="w-full">
              <img src={orangejuice} alt="" className="w-80 " />
            </div>
          </div>
          <div className="w-1/2 h-1/4 bg-my-orange flex items-center justify-center rounded-3xl m-8 ">
            <div className="p-5 w-1/2">
              <p className="font-myFont2 font-semibold text-xl">25% Off</p>
              <h1 className="text-black font-semibold text-2xl">
                Bread and 
              </h1>
              <h1 className="text-black font-semibold text-2xl">Bagle</h1>
              
              <div className="mt-8">
                <button className="bg-white px-8 py-2 text-xs">Shop Now</button>
              </div>
            </div>

            <div>
              <img src={BreadnBagle} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

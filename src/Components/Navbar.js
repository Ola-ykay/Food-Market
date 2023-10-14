import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { PiDotsNine } from "react-icons/pi";
import { BiSolidMessageAltMinus } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("dashboard");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  
  return (
    <header className="flex">
      {/* desktop */}
      <div className="w-64 bg-white h-screen shadow-md h-full py-8 border-r border-gray-300">
        <div className="">
          <a href="/">
          <img src={logo} alt="" className="h-full px-10" />
          </a>
        </div>
        <div className="w-full pt-20 text-#969696 font-myFont">
          <nav className="space-y-2">
            <ul className="">
              <li className="">
                <Link to='/'
                  onClick={() => handleLinkClick("dashboard")}
                  className={`flex item-center justify-center w-full py-3 text-l text-justify ${
                    activeLink === "dashboard"
                      ? "bg-my-orange text-white font-semibold"
                      : "text-my-gray font-semibold"
                  }`}
                >
                  <div className="flex justify-center align-center pt-1">
                    <PiDotsNine className="mr-8" />
                  </div>
                  Dashboard
                  </Link>
              </li>
              <li>
                <Link to='/shopping-cart'
                onClick={() => handleLinkClick("shopping-cart")}
                  className={`flex item-center justify-center w-full py-3 pl-8 text-l text-center ${
                    activeLink === "shopping-cart"
                      ? "bg-my-orange text-white font-semibold"
                      : "text-my-gray font-semibold"
                  }`}
                >
                  <div className="flex justify-center align-center pt-1">
                    <BsCartFill className="mr-8" />
                  </div>
                  Shopping Cart
                  </Link>
              </li>
              <li>
                <Link to='/profile'
                  onClick={() => handleLinkClick("profile")}
                  className={`flex item-left justify-center w-full py-3 text-l  ${
                    activeLink === "profile"
                      ? "bg-my-orange text-white font-semibold"
                      : "font-semibold text-my-gray"
                  }`}
                >
                  <div className="relative justify-center align-center pt-1 ml-1">
                    <FaUser className="absolute right-8" />
                  </div>
                  Profile
                  </Link>
              </li>
              <li>
                <Link to='/order-history'
                  onClick={() => handleLinkClick("order-history")}
                  className={`flex item-center justify-center w-full py-3 pl-9 text-l text-center ${
                    activeLink === "order-history"
                      ? "bg-my-orange text-white font-semibold"
                      : "font-semibold text-my-gray"
                  }`}
                >
                  <div className="relative flex justify-center align-center pt-1 ml-4">
                    <BiSolidMessageAltMinus className="absolute right-7" />
                  </div>
                  Order History
                  </Link>
              </li>
              <li>
                <Link to='/payment'
                onClick={() => handleLinkClick("payment")}
                  className={`flex item-center justify-center w-full py-3 pl-3 text-l text-center ${
                    activeLink === "payment"
                      ? "bg-my-orange text-white font-semibold"
                      : "font-semibold text-my-gray"
                  }`}
                >
                  <div className="relative flex justify-center align-center pt-1">
                    <AiFillDollarCircle className="absolute right-7" />
                  </div>
                  Payment
                  </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Navbar;

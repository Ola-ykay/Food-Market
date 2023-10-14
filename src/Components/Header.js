import React, { useEffect, useState }from "react";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { HiLocationMarker } from "react-icons/hi";


const Header = () => {
  const [countries, setCountries] = useState([])
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedState, setSelectedState] = useState(""); 
    const [selectedCity, setSelectedCity] = useState("");

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
        .then((res) => {
            setCountries(res.data)
        })
        .catch(error => {
            console.log('Error fetching States:', error)
        })
    }, [])

    const handleCountryChange = (e) => {
      const countryName = e.target.value;
      setSelectedCountry(countryName);

      axios.get('https://restcountries.com/v3.1/name/${countryName}')
      .then((res) => {
        const CountryData =res.data[0];
        const stateNames = CountryData?.subregion || [];
        setStates(stateNames);
        setCities([]);
      })
    }

    const handleStateChange =(e) => {
        const stateName = e.target.value
        setSelectedState(stateName);

        axios.get(`https://restcountries.com/v3.1/name/${selectedCountry}`)
        .then((res) =>{
            const countryData = res.data[0];
            const citiesInState = countryData?.subregion[stateName] || []
            setCities(citiesInState);
        })
        .catch(error =>{
            console.log('Error fetching Cities:', error)
        })
    };

    // const handleCityChange = (e) => {
    //     setSelectedCity(e.target.value)
    // }
  return (
    <div className="flex px-6 py-6 item-center justify-space-between gap-8">
      <div className="flex gap-5 bg-white shadow p-3 text-black text-sm font-medium rounded-lg">
        <select id="category" name="category">
          <option value="" disabled selected>
            All Categories
          </option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snacks">Snacks</option>
          <option value="desserts">Desserts</option>
        </select>
        {/* <div className="text-black"></div> */}
        <div className="flex gap-10">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="outline-none bg-white-500"
          />
          <button className="text-xl text-my-gray font-bold">
            <FiSearch />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center text-my-gray">
        <HiLocationMarker  className="text-lg"/>
      <div className="">
      <select
          id="state"
          value={selectedState}
          onChange={handleStateChange}
          className="rounded-md w-16 bg-bg-color outline-none font-bold text-sm"
        >
          <option value="">State</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
<p className="text-lg font-bolder">,</p>
      <div>
      <select
          id="city"
          value={selectedCity}
          className="bg-bg-color w-16 outline-none font-bold text-sm"
          // disabled={!selectedState}
        >
          <option value="">City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      </div>
      <div className="flex gap-3 items-center justify-center text-sm">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="flex gap-2 item-center justify-center">
        <div className="py-4 px-4 rounded-full bg-white text-lg">
          <FaUser />
        </div>
        <div className="py-4 px-4 rounded-full bg-white text-lg">
          <AiFillHeart />
        </div>
        <div className="py-4 px-4 rounded-full bg-white text-lg">
          <BsCartFill />
        </div>
      <div>
        <p className="font-lighter text-my-gray text-sm">Your Cart</p>
        <p className="text-black font-bold text-lg">$3000.50</p>
      </div>
      </div>

    </div>
  );
};

export default Header;

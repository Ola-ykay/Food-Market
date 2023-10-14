import Dashboard from "./Components/Dashboard";
import ShoppingCart from "./Components/ShoppingCart";
import Profile from "./Components/Profile";
import OrderHistory from "./Components/OrderHistory";
import Payment from "./Components/Payment";
import Register from "./Components/Register";
import Login from "./Components/Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";

function App() {
  return (
    <div className="bg-bg-color p-0 m-0 box-border">
     
      <BrowserRouter>
        <div className="flex font-myFont">
        
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

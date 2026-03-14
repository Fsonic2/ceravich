import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./shop/Home";
import Login from "./shop/Login";   // optional separate FAQ page
import Contact from "./shop/Contact"; // optional separate page
import NotFound from "./shop/NotFound";
import Shop from "./shop/Shop";
import Create from "./shop/Create"; // optional separate page for creating new items
import Deals from "./shop/Deals"; // optional separate page for deals and promotions
import Dashboard from "./client/Dashboard"; // optional separate page for admin dashboard
import Order from "./admin/order/Order"; // optional separate page for managing orders
import Checkout from "./shop/Checkout"; // optional separate page for checkout process
import Carts from "./shop/Carts"; // optional separate page for managing carts
import DashboardAdmin from "./admin/Dashboard"; // optional separate page for admin dashboard

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shop/login" element={<Login />} />
      <Route path="/shop/contact" element={<Contact />} />
      <Route path="/shop/create" element={<Create />} />
      <Route path="/shop/shop" element={<Shop />} />
      <Route path="/shop/deals" element={<Deals />} />
      <Route path="/client/dashboard" element={<Dashboard />} />
      <Route path="/admin/order/order" element={<Order />} />
      <Route path="/shop/checkout" element={<Checkout />} />
      <Route path="/shop/carts" element={<Carts />} />
      <Route path="/admin/dashboard" element={<DashboardAdmin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
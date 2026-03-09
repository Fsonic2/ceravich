import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./shop/Home";
import Login from "./shop/Login";   // optional separate FAQ page
import Contact from "./shop/Contact"; // optional separate page
import NotFound from "./shop/NotFound";
import Create from "./shop/Create"; // optional separate page for creating new items

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
     <Route path="/shop/login" element={<Login />} />
      <Route path="/shop/contact" element={<Contact />} />
      <Route path="/shop/create" element={<Create />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
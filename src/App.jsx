import { Routes, Route } from "react-router-dom";

// Shop Pages
import Home from "./shop/Home";
import Login from "./shop/Login";
import Contact from "./shop/Contact";
import NotFound from "./shop/NotFound";
import Shop from "./shop/Shop";
import Create from "./shop/Create";
import Deals from "./shop/Deals";
import Checkout from "./shop/Checkout";
import Cart from "./shop/Cart";

// Admin Pages
import DashboardAdmin from "./admin/Dashboard";

// Order Pages
import Order from "./admin/order/Order";
import AddOrder from "./admin/order/AddOrder";
import EditOrder from "./admin/order/EditOrder";

// Category Pages
import Category from "./admin/category/Category";
import AddCategory from "./admin/category/AddCategory";
import EditCategory from "./admin/category/EditCategory";

// Product Pages
import Product from "./admin/product/Product";
import AddProduct from "./admin/product/AddProduct";
import EditProduct from "./admin/product/EditProduct";

// Customer Pages
import Customer from "./admin/customer/Customer";
import AddCustomer from "./admin/customer/AddCustomer";
import EditCustomer from "./admin/customer/EditCustomer";

// Shipment Pages
import Shipment from "./admin/shipment/Shipment";
import Setting from "./admin/setting/Setting";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop/login" element={<Login />} />
      <Route path="/shop/contact" element={<Contact />} />
      <Route path="/shop/create" element={<Create />} />
      <Route path="/shop/shop" element={<Shop />} />
      <Route path="/shop/deals" element={<Deals />} />
      <Route path="/shop/checkout" element={<Checkout />} />
      <Route path="/shop/cart" element={<Cart />} />

      <Route path="/admin/dashboard" element={<DashboardAdmin />} />

      <Route path="/admin/orders" element={<Order />} />
      <Route path="/admin/orders/add" element={<AddOrder />} />
      <Route path="/admin/orders/edit/:id" element={<EditOrder />} />

      <Route path="/admin/categories" element={<Category />} />
      <Route path="/admin/categories/add" element={<AddCategory />} />
      <Route path="/admin/categories/edit/:id" element={<EditCategory />} />

      <Route path="/admin/products" element={<Product />} />
      <Route path="/admin/products/add" element={<AddProduct />} />
      <Route path="/admin/products/edit/:id" element={<EditProduct />} />

      <Route path="/admin/customers" element={<Customer />} />
      <Route path="/admin/customers/add" element={<AddCustomer />} />
      <Route path="/admin/customers/edit/:id" element={<EditCustomer />} />

      <Route path="/admin/shipments" element={<Shipment />} />

      <Route path="/admin/settings" element={<Setting />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
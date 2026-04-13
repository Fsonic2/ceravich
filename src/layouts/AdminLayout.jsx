import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="d-flex">
      <div
        className={`bg-dark text-white p-3 ${
          sidebarOpen ? "d-block" : "d-none d-md-block"
        }`}
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <h4 className="text-center mb-4">💄 Beauty Admin</h4>

        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/products">
              Products
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/categories">
              Categories
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/orders">
              Orders
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/customers">
              Customers
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/shipments">
              Shipment
            </Link>
          </li>
           <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/settings">
              Setting
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-grow-1">
        <nav className="navbar navbar-light bg-white shadow-sm px-3">
          <button
            className="btn btn-outline-dark d-md-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <div className="ms-auto">
            <span className="fw-semibold">Admin</span>
          </div>
        </nav>

        <div className="p-4 bg-light" style={{ minHeight: "100vh" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
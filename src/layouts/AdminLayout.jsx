<<<<<<< HEAD
import { useState } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> 0270b5f (Add frontend code)
import { Link, useNavigate } from "react-router-dom";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
<<<<<<< HEAD

  // ✅ STATIC LOGOUT
  const handleLogout = () => {
    if (!window.confirm("Are you sure you want to logout?")) return;

    // later replace with real auth logout
    localStorage.removeItem("token");

    navigate("/shop/login");
=======
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    else{
      navigate("/");
    }
  }, []);

  // ✅ STATIC LOGOUT
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
>>>>>>> 0270b5f (Add frontend code)
  };

  return (
    <div className="d-flex">
      {/* SIDEBAR */}
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
            <Link className="nav-link text-white" to="/admin/shipment">
              Shipment
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/messages">
              Messages
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/users">
              Users
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/settings">
              Setting
            </Link>
          </li>

        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-grow-1">

        {/* TOPBAR */}
        <nav className="navbar navbar-light bg-white shadow-sm px-3">

          {/* MOBILE MENU */}
          <button
            className="btn btn-outline-dark d-md-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

          {/* SEARCH */}
          <form className="d-none d-md-flex ms-3" style={{ width: "300px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </form>

          {/* RIGHT SIDE */}
          <div className="ms-auto d-flex align-items-center gap-3">

            {/* NOTIFICATION */}
            <div className="position-relative">
              <i className="bi bi-bell fs-5"></i>
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "10px" }}
              >
                3
              </span>
            </div>

            {/* USER DROPDOWN */}
            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                data-bs-toggle="dropdown"
              >
<<<<<<< HEAD
                Admin
=======
                {user ? (
  <span>{user.username}</span>
) : (
  <a href="/shop/login">Login</a>
)}
                
>>>>>>> 0270b5f (Add frontend code)
              </button>

              <ul className="dropdown-menu dropdown-menu-end">

                <li>
                  <Link className="dropdown-item" to="/admin/dashboard">
                    Dashboard
                  </Link>
                </li>

                <li>
                  <button
<<<<<<< HEAD
                    onClick={handleLogout}
                    className="dropdown-item text-danger"
                  >
=======
                  onClick={logout}
                  className="btn btn-sm btn-light ms-2"
                >
>>>>>>> 0270b5f (Add frontend code)
                    Logout
                  </button>
                </li>

              </ul>
            </div>

          </div>
        </nav>

        {/* PAGE CONTENT */}
        <div className="p-4 bg-light" style={{ minHeight: "100vh" }}>
          {children}
        </div>

      </div>
    </div>
  );
}
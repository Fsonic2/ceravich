import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-info navbar-dark shadow-lg fixed-top">
      <div className="container-fluid px-4 py-2">

        {/* Logo */}
        <a className="navbar-brand fw-bold fs-4 text-white" href="#">
          <img
            src="../assets/logo.webp"
            alt="Ceravich Logo"
            width="150"
            height="50"
            className="d-inline-block align-text-top me-2"
          />
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          {/* Left Menu */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="../shop/shop">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="../shop/Contact">Contact</a>
            </li>

            {/* Mega Menu */}
            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle text-white fw-semibold"
                href="#"
                data-bs-toggle="dropdown"
              >
                Categories
              </a>
              <div className="dropdown-menu w-100 mt-0 border-0 shadow-lg p-4">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <h6 className="fw-bold">Skincare</h6>
                      <a className="dropdown-item" href="#">Cleansers</a>
                      <a className="dropdown-item" href="#">Moisturizers</a>
                      <a className="dropdown-item" href="#">Serums</a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="fw-bold">Makeup</h6>
                      <a className="dropdown-item" href="#">Foundation</a>
                      <a className="dropdown-item" href="#">Lipstick</a>
                      <a className="dropdown-item" href="#">Mascara</a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="fw-bold">Haircare</h6>
                      <a className="dropdown-item" href="#">Shampoo</a>
                      <a className="dropdown-item" href="#">Conditioner</a>
                      <a className="dropdown-item" href="#">Hair Oil</a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="fw-bold">Fragrance</h6>
                      <a className="dropdown-item" href="#">Perfume</a>
                      <a className="dropdown-item" href="#">Body Spray</a>
                      <a className="dropdown-item" href="#">Gift Sets</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="../shop/Deals">Deals</a>
            </li>
          </ul>

          {/* Search */}
          <form className="d-flex mx-lg-4 w-50">
            <input
              className="form-control rounded-start"
              type="search"
              placeholder="Search skincare, makeup..."
            />
            <button className="btn btn-light rounded-end">
              <i className="bi bi-search"></i>
            </button>
          </form>

          {/* Right Menu */}
          <ul className="navbar-nav ms-auto align-items-center">

            {/* ✅ User Dropdown */}
            <li className="nav-item dropdown p-2">
              {user ? (
                <a
                  className="nav-link dropdown-toggle text-white d-flex align-items-center gap-2"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle fs-5"></i>
                  <span className="fw-semibold">{user.username}</span>
                </a>
              ) : (
                <a
                  className="nav-link dropdown-toggle text-white d-flex align-items-center gap-2"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person fs-5"></i>
                  <span className="fw-semibold">Account</span>
                </a>
              )}

              {/* Dropdown Menu */}
              <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2">
                {user ? (
                  <>
                    {/* Logged in header */}
                    <li className="px-3 py-2 border-bottom">
                      <small className="text-muted">Signed in as</small>
                      <p className="fw-bold mb-0">{user.username}</p>
                    </li>
                    <li>
                      <a className="dropdown-item py-2" href="/shop/my-account">
                        <i className="bi bi-person me-2 text-info"></i>
                        My Account
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item py-2" href="/shop/orders">
                        <i className="bi bi-bag me-2 text-info"></i>
                        My Orders
                      </a>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button
                        onClick={logout}
                        className="dropdown-item py-2 text-danger"
                      >
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <a className="dropdown-item py-2" href="/shop/login">
                        <i className="bi bi-box-arrow-in-right me-2 text-info"></i>
                        Login
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item py-2" href="/shop/Create">
                        <i className="bi bi-person-plus me-2 text-info"></i>
                        Create Account
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </li>

            {/* Cart */}
            <li className="nav-item position-relative">
              <a className="nav-link text-white" href="../shop/cart">
                <i className="bi bi-cart3 fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  2
                </span>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-info navbar-dark shadow-lg fixed-top">
      <div className="container-fluid px-4 py-2">

        {/* Logo */}
        <a className="navbar-brand fw-bold fs-4 text-white" href="#">
          <img src="../assets/logo.webp" alt="Ceravich Logo" width="150" height="50" className="d-inline-block align-text-top me-2" />
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
              <a className="nav-link text-white fw-semibold" href="#">Deals</a>
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

            <li className="nav-item">
              <a className="nav-link text-white" href="././login">
                <i className="bi bi-person fs-5"></i> Login
              </a>
            </li>

            <li className="nav-item position-relative">
              <a className="nav-link text-white" href="./cart">
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
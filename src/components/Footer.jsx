export default function Footer() {
  return (
    <footer className="bg-light text-light pt-5 mt-5">

      <div className="container-fluid px-5">

        <div className="row gy-4">

          {/* Brand / About */}
          <div className="col-lg-4 col-md-6 text-muted">
             <a className="navbar-brand fw-bold fs-4 text-white" href="#">
              <img src="../assets/logo.webp" alt="Ceravich Logo" width="300" height="250" className="d-inline-block align-text-top me-2" />
            </a>

             
          </div>

          {/* Shop Links */}
          <div className="col-lg-2 col-md-6 text-muted">
            <h6 className="fw-bold mb-3">Shop</h6>

            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted small footer-link">All Products</a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted small footer-link">New Arrivals</a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted small footer-link">Best Sellers</a>
              </li>

              <li>
                <a href="#" className="text-decoration-none text-muted small footer-link">Deals</a>
              </li>
            </ul>
          </div>

          {/* Customer */}
          <div className="col-lg-2 col-md-6 text-muted">
            <h6 className="fw-bold mb-3">Customer</h6>

            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted small footer-link">My Account</a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted small footer-link">Orders</a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted small footer-link">Wishlist</a>
              </li>

              <li>
                <a href="#" className="text-decoration-none text-muted small footer-link">Track Order</a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-lg-2 col-md-6 text-muted">
            <h6 className="fw-bold mb-3">Help</h6>

            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted small footer-link">Support</a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted small footer-link">Shipping</a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted small footer-link">Returns</a>
              </li>
              <li className="mb-2">
                <a href="" className="text-decoration-none text-muted small footer-link">
Terms of service</a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted small footer-link">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-2 col-md-6 text-muted">
            <h6 className="fw-bold mb-3">Newsletter</h6>

            <p className="text-muted small">
              Get updates about new products and special offers.
            </p>

            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <button className="btn btn-info">
                Join
              </button>
            </div>
            <div className="mt-3">
              <p className="mb-1 small">
                <i className="bi bi-geo-alt me-2"></i>
                Lagos, Nigeria
              </p>

              <p className="mb-1 small">
                <i className="bi bi-envelope me-2"></i>
                info@ceravichshop.com
              </p>

              <p className="small">
                <i className="bi bi-telephone me-2"></i>
                +234 708 780 8116
              </p>
            </div>
            {/* Social */}
            <div className="d-flex gap-3">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-youtube"></i>
            </div>

          </div>

        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom section */}
        <div className="row align-items-center">

          <div className="col-md-6 text-center text-md-start text-muted">
            <small>
              © {new Date().getFullYear()} Ceravich. All rights reserved.
            </small>
          </div>

          <div className="col-md-6 text-center text-md-end">

            <img
              src="../assets/payments/payments.png"
              alt="visa"
              width="250"
              className="me-2"
            />
            </div>

        </div>

      </div>

      {/* Bottom bar */}
      <div className="bg-info text-center py-3 mt-4">
        <small className="text-muted">
          powered by vena tech Ltd
        </small>
      </div>

    </footer>
  );
}
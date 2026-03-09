// src/components/Footer.jsx
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const shopLinks = ["All Products", "New Arrivals", "Best Sellers", "Deals"];
  const customerLinks = ["My Account", "Orders", "Wishlist", "Track Order"];
  const helpLinks = ["Support", "Shipping", "Returns", "Terms", "FAQ"];
  const socialIcons = [
    { icon: "facebook", url: "#" },
    { icon: "instagram", url: "#" },
    { icon: "twitter", url: "#" },
    { icon: "youtube", url: "#" },
  ];

  const renderLinks = (links) =>
    links.map((link) => (
      <li key={link}>
        <a href="#" className="text-decoration-none text-dark small">{link}</a>
      </li>
    ));

  return (
    <footer className="bg-light text-dark pt-5 mt-5">
      <div className="flex px-5">
        <div className="row gy-4">

          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <img src="/assets/logo.webp" alt="Ceravich Logo" width="200" className="mb-3" />
            <p className="small text-muted">
             
            </p>
          </div>

          {/* Shop */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Shop</h6>
            <ul className="list-unstyled">{renderLinks(shopLinks)}</ul>
          </div>

          {/* Customer */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Customer</h6>
            <ul className="list-unstyled">{renderLinks(customerLinks)}</ul>
          </div>

          {/* Help */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Help</h6>
            <ul className="list-unstyled">{renderLinks(helpLinks)}</ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p className="small">Get updates about new products and offers.</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" />
              <button className="btn btn-info">Join</button>
            </div>

            <p className="small mb-1"><i className="bi bi-geo-alt me-2"></i> Lagos, Nigeria</p>
            <p className="small mb-1"><i className="bi bi-envelope me-2"></i> info@ceravichshop.com</p>
            <p className="small"><i className="bi bi-telephone me-2"></i> +234 708 780 8116</p>

            <div className="d-flex gap-3 mt-2">
              {socialIcons.map((social) => (
                <a key={social.icon} href={social.url} className="text-light fs-5">
                  <i className={`bi bi-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <small>© {currentYear} Ceravich. All rights reserved.</small>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <img src="/assets/payments/payments.png" alt="payments" width="200" />
          </div>
        </div>
      </div>

      <div className="bg-info text-center py-3 mt-4">
        <small className="text-dark">Powered by Vena Tech Ltd</small>
      </div>
    </footer>
  );
}
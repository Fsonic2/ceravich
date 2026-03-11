import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Checkout() {
  const [createAccount, setCreateAccount] = useState(false);
  const [billingSame, setBillingSame] = useState(true);
    return (
      <>
      <Navbar />
      <div className="header">
        <div className="container py-5">
          <h1 className="text-center text-white">Checkout</h1>
        </div>  
      </div>
      <div className="flex py-5 mb-5 pt-5 mt-6 px-5">
      <div className="row g-4">
        {/* Left Side */}
        <div className="col-lg-7">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="fw-bold mb-4">Checkout</h2>

              {/* Information */}
              <h5 className="fw-bold mb-3">Information</h5>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Email address <span className="text-danger">*</span>
                </label>
                <input type="email" className="form-control form-control-lg" />
              </div>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="newsletter"
                />
                <label className="form-check-label" htmlFor="newsletter">
                  Sign me up for the newsletter!
                </label>
              </div>

              <p className="small mb-4">
                Already have an account?{" "}
                <a href="/login" className="text-decoration-none">
                  Log in
                </a>
              </p>

              {/* Shipping Address */}
              <h5 className="fw-bold mb-3">Shipping address</h5>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    First name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Last name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold">
                    Company name <span className="text-muted">(optional)</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Phone Number <span className="text-muted">(optional)</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Country / Region <span className="text-danger">*</span>
                  </label>
                  <select className="form-select">
                    <option>Nigeria</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold">
                    Street address <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold">
                    Apartment, suite, unit, etc.{" "}
                    <span className="text-muted">(optional)</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Town / City <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    State <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold">
                    Phone <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="form-check mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="createAccount"
                  checked={createAccount}
                  onChange={() => setCreateAccount(!createAccount)}
                />
                <label className="form-check-label" htmlFor="createAccount">
                  Create an account?
                </label>
              </div>

              {/* Shipping Method */}
              <h5 className="fw-bold mt-5 mb-3">Shipping Method</h5>
              <div className="alert alert-light border rounded-3">
                Enter your address to view shipping options.
              </div>

              <p className="small text-muted mb-2">
                Please be aware that extra charges may be incurred for large
                orders. In such cases, we will reach out to you regarding the
                additional fees before dispatching your order.
              </p>

              {/* Billing Details */}
              <h5 className="fw-bold mt-5 mb-3">Billing details</h5>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="billingAddress"
                  id="sameShipping"
                  checked={billingSame}
                  onChange={() => setBillingSame(true)}
                />
                <label className="form-check-label" htmlFor="sameShipping">
                  Same as shipping address
                </label>
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="billingAddress"
                  id="differentBilling"
                  checked={!billingSame}
                  onChange={() => setBillingSame(false)}
                />
                <label className="form-check-label" htmlFor="differentBilling">
                  Use a different billing address
                </label>
              </div>

              {!billingSame && (
                <div className="border rounded-3 p-3 bg-light">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Billing first name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Billing last name"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Billing address"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Payment */}
              <h5 className="fw-bold mt-5 mb-3">Payment</h5>
              <p className="small text-muted">
                All transactions are secure and encrypted.
              </p>

              <div className="border rounded-4 p-3 mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="paystack"
                    defaultChecked
                  />
                  <label className="form-check-label fw-semibold" htmlFor="paystack">
                    Debit/Credit Cards Paystack Payment Options
                  </label>
                </div>
                <p className="small text-muted mb-0 mt-2">
                  Make payment using your debit and credit cards
                </p>
              </div>

              <p className="small text-muted">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our Privacy policy.
              </p>

              <button className="btn btn-dark btn-lg w-100 rounded-3 mt-3">
                Place Order
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-lg-5 px-5 pt-6 mt-5">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-4">Your order</h5>

              <div className="d-flex justify-content-between align-items-start border-bottom pb-3 mb-3">
                <div>
                  <h6 className="mb-1">
                    Shop the original AUTO-DRAFT in Lagos Nigeria × 1
                  </h6>
                  <small className="text-muted">
                    Saltair Santal Bloom 5% AHA Serum Deodorant 1.70floz
                  </small>
                </div>
                <span className="fw-semibold">₦34,200</span>
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between px-0">
                  <span>Subtotal</span>
                  <strong>₦38,000</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between px-0">
                  <span>
                    Discount{" "}
                    <a href="#" className="text-danger text-decoration-none">
                      [Remove]
                    </a>
                  </span>
                  <strong>-₦3,800</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between px-0">
                  <span>Paystack Transaction Fees</span>
                  <strong>₦647</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between px-0 fs-5">
                  <span className="fw-bold">Total</span>
                  <span className="fw-bold text-success">₦34,847</span>
                </li>
              </ul>

              <div className="mt-4">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Coupon code"
                />
                <button className="btn btn-outline-dark w-100">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
      </>
    );
}


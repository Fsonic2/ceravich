import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Carts() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "TCL",
      image: "/storage/photos/1/Products/TCL65.jpg",
      price: 850250,
      quantity: 1,
    },
  ]);

  const formatPrice = (price) => {
    return `NGN${price.toLocaleString()}`;
  };

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
    <Navbar />  
<div className="container py-5">

      {/* Breadcrumb */}
      <div className="mb-4">
        <a href="/" className="text-decoration-none">Home</a>
        <span className="mx-2">/</span>
        <span className="fw-bold">Cart</span>
      </div>

      <div className="row g-4">

        {/* Cart Table */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body">

              <table className="table align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>

                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "90px",
                            height: "90px",
                            objectFit: "cover",
                          }}
                          className="rounded"
                        />
                      </td>

                      <td className="fw-semibold">{item.name}</td>

                      <td>{formatPrice(item.price)}</td>

                      <td>
                        <div className="d-flex align-items-center gap-2">

                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => decreaseQty(item.id)}
                          >
                            -
                          </button>

                          <input
                            type="text"
                            value={item.quantity}
                            readOnly
                            className="form-control text-center"
                            style={{ width: "60px" }}
                          />

                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => increaseQty(item.id)}
                          >
                            +
                          </button>

                        </div>
                      </td>

                      <td className="fw-bold">
                        {formatPrice(item.price * item.quantity)}
                      </td>

                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Coupon + Update */}
              <div className="row mt-4 g-3">

                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="form-control"
                  />
                </div>

                <div className="col-md-3">
                  <button className="btn btn-outline-dark w-100">
                    Apply Coupon
                  </button>
                </div>

                <div className="col-md-3">
                  <button className="btn btn-dark w-100">
                    Update Cart
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body">

              <h4 className="fw-bold mb-4">Cart Summary</h4>

              <div className="d-flex justify-content-between mb-3">
                <span>Cart Subtotal</span>
                <span className="fw-semibold">{formatPrice(subtotal)}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">You Pay</span>
                <span className="fw-bold text-success">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <div className="d-grid gap-3">
                <a href="/checkout" className="btn btn-dark btn-lg">
                  Checkout
                </a>

                <a href="/shop" className="btn btn-outline-secondary">
                  Continue Shopping
                </a>
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

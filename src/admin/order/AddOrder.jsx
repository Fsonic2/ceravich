import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";

export default function AddOrder() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    order_number: "",
    customer_name: "",
    phone: "",
    total_amount: "",
    payment_status: "pending",
    order_status: "pending",
    date: "",
    address: "",
    note: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.order_number.trim()) newErrors.order_number = "Order number is required";
    if (!form.customer_name.trim()) newErrors.customer_name = "Customer name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.total_amount) newErrors.total_amount = "Total amount is required";
    if (!form.date) newErrors.date = "Order date is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    console.log("Order saved:", form);
    navigate("/admin/orders");
  };

  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="mb-4">
          <h3 className="fw-bold mb-1">Add Order</h3>
          <p className="text-muted mb-0">Create a new customer order</p>
        </div>

        <div className="card shadow-sm border-0">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Order Number</label>
                  <input
                    type="text"
                    name="order_number"
                    className={`form-control ${errors.order_number ? "is-invalid" : ""}`}
                    value={form.order_number}
                    onChange={handleChange}
                    placeholder="ORD-1004"
                  />
                  {errors.order_number && (
                    <div className="invalid-feedback">{errors.order_number}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label">Customer Name</label>
                  <input
                    type="text"
                    name="customer_name"
                    className={`form-control ${errors.customer_name ? "is-invalid" : ""}`}
                    value={form.customer_name}
                    onChange={handleChange}
                    placeholder="Enter customer name"
                  />
                  {errors.customer_name && (
                    <div className="invalid-feedback">{errors.customer_name}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="08012345678"
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label">Total Amount</label>
                  <input
                    type="number"
                    name="total_amount"
                    className={`form-control ${errors.total_amount ? "is-invalid" : ""}`}
                    value={form.total_amount}
                    onChange={handleChange}
                    placeholder="15000"
                  />
                  {errors.total_amount && (
                    <div className="invalid-feedback">{errors.total_amount}</div>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">Payment Status</label>
                  <select
                    name="payment_status"
                    className="form-select"
                    value={form.payment_status}
                    onChange={handleChange}
                  >
                    <option value="pending">Pending</option>
                    <option value="paid">Paid</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label">Order Status</label>
                  <select
                    name="order_status"
                    className="form-select"
                    value={form.order_status}
                    onChange={handleChange}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label">Order Date</label>
                  <input
                    type="date"
                    name="date"
                    className={`form-control ${errors.date ? "is-invalid" : ""}`}
                    value={form.date}
                    onChange={handleChange}
                  />
                  {errors.date && (
                    <div className="invalid-feedback">{errors.date}</div>
                  )}
                </div>

                <div className="col-md-12">
                  <label className="form-label">Delivery Address</label>
                  <textarea
                    name="address"
                    className="form-control"
                    rows="3"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Enter delivery address"
                  ></textarea>
                </div>

                <div className="col-md-12">
                  <label className="form-label">Note</label>
                  <textarea
                    name="note"
                    className="form-control"
                    rows="3"
                    value={form.note}
                    onChange={handleChange}
                    placeholder="Additional note"
                  ></textarea>
                </div>

                <div className="col-12 mt-3">
                  <button type="submit" className="btn btn-dark me-2">
                    Save Order
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => navigate("/admin/orders")}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

export default function Setting() {
  const [form, setForm] = useState({
    shop_name: "Ceravich Cosmetics",
    email: "info@ceravich.com",
    phone: "08012345678",
    address: "12 Allen Avenue, Ikeja, Lagos",
    currency: "NGN",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings saved:", form);
  };

  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="mb-4">
          <h3 className="fw-bold mb-1">Settings</h3>
          <p className="text-muted mb-0">Manage shop settings</p>
        </div>

        <div className="card shadow-sm border-0">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Shop Name</label>
                  <input
                    type="text"
                    name="shop_name"
                    className="form-control"
                    value={form.shop_name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Currency</label>
                  <select
                    name="currency"
                    className="form-select"
                    value={form.currency}
                    onChange={handleChange}
                  >
                    <option value="NGN">NGN</option>
                    <option value="USD">USD</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label">Address</label>
                  <textarea
                    name="address"
                    className="form-control"
                    rows="4"
                    value={form.address}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-dark">
                    Save Settings
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
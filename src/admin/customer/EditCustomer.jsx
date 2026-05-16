import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import { BASE_URL } from "../../config/api";

export default function EditCustomer() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    status: "active",
    contactaddr: "",
    shippingaddr: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // ✅ Fetch customer by ID from API
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/auth/users/customers/${id}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const data = await response.json();
        console.log("Customer data:", data);

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch customer");
        }

        if (data.success) {
          setForm({
            username: data.user.username || "",
            email: data.user.email || "",
            phone: data.user.phone || "",
            status: data.user.status || "active",
            contactaddr: data.user.contactaddr || "",
            shippingaddr: data.user.shippingaddr || "",
          });
        }
      } catch (error) {
        console.error("Fetch customer error:", error);
        setMessage(error.message || "Error fetching customer");
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.username.trim()) newErrors.username = "Customer name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      const response = await fetch(
        `${BASE_URL}/api/auth/users/customers/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update customer");
      }

      setMessage("Customer updated successfully!");
      setTimeout(() => navigate("/admin/customers"), 1500);
    } catch (error) {
      console.error("Update customer error:", error);
      setMessage(error.message || "Failed to update customer");
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="p-4">Loading customer...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="mb-4">
          <h3 className="fw-bold mb-1">Edit Customer</h3>
          <p className="text-muted mb-0">Update customer information</p>
        </div>

        {message && (
          <div
            className={`alert ${
              message.includes("successfully") ? "alert-success" : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}

        <div className="card shadow-sm border-0">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">

                {/* Name */}
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="username"
                    className={`form-control ${errors.username ? "is-invalid" : ""}`}
                    value={form.username}
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Phone */}
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    value={form.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>

                {/* Status */}
                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <select
                    name="status"
                    className="form-select"
                    value={form.status}
                    onChange={handleChange}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                {/* ✅ Contact Address — DB column: contactaddr */}
                <div className="col-12">
                  <label className="form-label">Contact Address</label>
                  <textarea
                    name="contactaddr"
                    className="form-control"
                    rows="3"
                    placeholder="Enter contact address"
                    value={form.contactaddr}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* ✅ Shipping Address — DB column: shippingaddr */}
                <div className="col-12">
                  <label className="form-label">Shipping Address</label>
                  <textarea
                    name="shippingaddr"
                    className="form-control"
                    rows="3"
                    placeholder="Enter shipping address"
                    value={form.shippingaddr}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Buttons */}
                <div className="col-12">
                  <button type="submit" className="btn btn-dark me-2">
                    Update Customer
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => navigate("/admin/customers")}
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
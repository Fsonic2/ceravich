import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BASE_URL } from "../config/api";

export default function MyAccount() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    contactaddr: "",
    shippingaddr: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});

  // ✅ Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      fetchProfile(parsed.id);
    } else {
      window.location.href = "/shop/login";
    }
  }, []);

  // ✅ Fetch full profile from API
  const fetchProfile = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/api/auth/account/${id}`, {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();
      console.log("Profile data:", data);

      if (data.success) {
        setForm({
          username: data.user.username || "",
          email: data.user.email || "",
          phone: data.user.phone || "",
          contactaddr: data.user.contactaddr || "",
          shippingaddr: data.user.shippingaddr || "",
        });
      }
    } catch (error) {
      console.error("Fetch profile error:", error);
      setMessage("Error loading profile");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.username.trim()) newErrors.username = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    return newErrors;
  };

  // ✅ Save updated profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSaving(true);
    try {
      const response = await fetch(
        `${BASE_URL}/api/auth/account/${user.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update profile");
      }

      // ✅ Update localStorage with new details
      const updatedUser = { ...user, username: form.username, email: form.email };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);

      setMessage("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Update error:", error);
      setMessage(error.message || "Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="spinner-border text-info" role="status" />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            {/* Profile Header */}
            <div className="card shadow-sm border-0 mb-4">
              <div
                className="card-body p-4 text-white d-flex align-items-center gap-4"
                style={{ background: "linear-gradient(135deg, #17a2b8, #117a8b)" }}
              >
                <div
                  className="rounded-circle bg-white d-flex align-items-center justify-content-center"
                  style={{ width: "80px", height: "80px", minWidth: "80px" }}
                >
                  <i
                    className="bi bi-person-fill text-info"
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </div>
                <div>
                  <h4 className="fw-bold mb-1">{form.username || "My Account"}</h4>
                  <p className="mb-0 opacity-75">{form.email}</p>
                  <span className="badge bg-white text-info mt-1">Customer</span>
                </div>
              </div>
            </div>

            {/* Message */}
            {message && (
              <div
                className={`alert ${
                  message.includes("successfully") ? "alert-success" : "alert-danger"
                } alert-dismissible`}
              >
                {message}
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setMessage("")}
                ></button>
              </div>
            )}

            {/* Profile Form */}
            <div className="card shadow-sm border-0">
              <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
                <h5 className="fw-bold mb-0">
                  <i className="bi bi-person me-2 text-info"></i>
                  Profile Details
                </h5>
                {!isEditing && (
                  <button
                    className="btn btn-info btn-sm text-white"
                    onClick={() => setIsEditing(true)}
                  >
                    <i className="bi bi-pencil me-1"></i> Edit Profile
                  </button>
                )}
              </div>

              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">

                    {/* Name */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Full Name</label>
                      <input
                        type="text"
                        name="username"
                        className={`form-control ${errors.username ? "is-invalid" : ""}`}
                        value={form.username}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                      {errors.username && (
                        <div className="invalid-feedback">{errors.username}</div>
                      )}
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        value={form.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                        value={form.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="Enter phone number"
                      />
                      {errors.phone && (
                        <div className="invalid-feedback">{errors.phone}</div>
                      )}
                    </div>

                    {/* Account Type - read only */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Account Type</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        value="Customer"
                        disabled
                      />
                    </div>

                    {/* Contact Address */}
                    <div className="col-12">
                      <label className="form-label fw-semibold">Contact Address</label>
                      <textarea
                        name="contactaddr"
                        className="form-control"
                        rows="3"
                        placeholder="Enter your contact address"
                        value={form.contactaddr}
                        onChange={handleChange}
                        disabled={!isEditing}
                      ></textarea>
                    </div>

                    {/* Shipping Address */}
                    <div className="col-12">
                      <label className="form-label fw-semibold">Shipping Address</label>
                      <textarea
                        name="shippingaddr"
                        className="form-control"
                        rows="3"
                        placeholder="Enter your shipping address"
                        value={form.shippingaddr}
                        onChange={handleChange}
                        disabled={!isEditing}
                      ></textarea>
                    </div>

                    {/* Buttons — only show when editing */}
                    {isEditing && (
                      <div className="col-12 d-flex gap-2">
                        <button
                          type="submit"
                          className="btn btn-info text-white"
                          disabled={saving}
                        >
                          {saving ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                              />
                              Saving...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-check-circle me-1"></i>
                              Save Changes
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={() => {
                            setIsEditing(false);
                            setErrors({});
                            setMessage("");
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Quick Links */}
            <div className="row g-3 mt-2">
              <div className="col-md-6">
                <a
                  href="/shop/orders"
                  className="card shadow-sm border-0 text-decoration-none text-dark p-3 d-flex align-items-center gap-3"
                >
                  <div
                    className="rounded-circle bg-info bg-opacity-10 d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <i className="bi bi-bag text-info fs-5"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">My Orders</h6>
                    <small className="text-muted">View your order history</small>
                  </div>
                  <i className="bi bi-chevron-right ms-auto text-muted"></i>
                </a>
              </div>
              <div className="col-md-6">
                <a
                  href="/shop/login"
                  className="card shadow-sm border-0 text-decoration-none text-dark p-3 d-flex align-items-center gap-3"
                  onClick={() => localStorage.removeItem("user")}
                >
                  <div
                    className="rounded-circle bg-danger bg-opacity-10 d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <i className="bi bi-box-arrow-right text-danger fs-5"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">Logout</h6>
                    <small className="text-muted">Sign out of your account</small>
                  </div>
                  <i className="bi bi-chevron-right ms-auto text-muted"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
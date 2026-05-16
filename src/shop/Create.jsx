import { useState } from "react";
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import { BASE_URL } from "../config/api"; // ✅ import from your api.js

export default function Create() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          username: formData.name, // ✅ Name input sent as username to backend
          email: formData.email,
          password: formData.password,
          role: "customer",
        }),
      });

      // ✅ Read as text first to avoid empty JSON crash
      const text = await response.text();
      console.log("Raw response:", text);

      if (!text) {
        throw new Error("Server returned an empty response");
      }

      const data = JSON.parse(text);

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setSuccess("Account created successfully! You can now log in.");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });

    } catch (err) {
      setError(err.message);
      console.error("Error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex vh-50 px-5 pd--5 pt-5 mt-5 align-items-center justify-content-center bg-light">
        <div className="row">
          <div className="card shadow-lg p-md-5" style={{ maxWidth: "800px", width: "100%" }}>
            <h3 className="card-title text-center mb-4 fw-bold">Create Account</h3>

            {success && <div className="alert alert-success">{success}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                </div>
                <a href="#" className="text-decoration-none">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="btn btn-info w-100 mb-3"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

              <div className="text-center">
                <span>Already have an account? </span>
                <a href="./login" className="text-decoration-none fw-semibold">Sign In</a>
              </div>
            </form>
          </div>

          {/* Side Image Card */}
          <div className="col-lg-4 px-0 mt-4 mt-lg-0">
            <div
              className="body-card text-white shadow-lg rounded-4 overflow-hidden position-relative"
              style={{
                backgroundImage: "url('/assets/face-wash-smile.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "900px",
                transition: "transform 0.5s",
              }}
            >
              <div
                className="p-4 position-relative h-10 d-flex flex-column justify-content-between"
                style={{ backgroundColor: "rgba(0,0,0,0.4)", zIndex: 2 }}
              >
                <div></div>
                <h1 className="text-center fw-bold h-100">NEW <br />ARRIVALS</h1>
                <p className="text-center fw-bold">CERAVICH SHOP.</p>
                <button className="btn btn-outline-light w-100 mt-3">
                  Visit Our Store
                </button>
              </div>
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ zIndex: 1, transition: "transform 0.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
<<<<<<< HEAD
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";

export default function Login() {
  return (
     <>
       <Navbar />

       <div className="flex vh-50 px-5 pd--5 pt-5 mt-5 align-items-center justify-content-center bg-light">
         <div class="row">
         <div className="card shadow-lg p-4 p-md-5" style={{ maxWidth: '800px', width: '100%' }}>
           <h3 className="card-title text-center mb-4 fw-bold">Login</h3>

           <form>
             <div className="mb-3">
               <label htmlFor="email" className="form-label fw-semibold">Email address</label>
               <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
             </div>

             <div className="mb-3">
               <label htmlFor="password" className="form-label fw-semibold">Password</label>
               <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
             </div>

             <div className="d-flex justify-content-between align-items-center mb-3">
               <div className="form-check">
                 <input className="form-check-input" type="checkbox" id="rememberMe" />
                 <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
               </div>
               <a href="#" className="text-decoration-none">Forgot password?</a>
             </div>

             <button type="submit" className="btn btn-info w-100 mb-3">Login</button>

             <div className="text-center">
               <span>Don't have an account? </span>
               <a href="./create" className="text-decoration-none fw-semibold">Sign Up</a>
             </div>
           </form>
         </div>
          <div className="col-lg-4 px-0 mt-4 mt-lg-0">
                <div className="body-card text-white shadow-lg rounded-4 overflow-hidden position-relative"
                  style={{
                    backgroundImage: "url('/assets/face-wash-smile.webp')", // Make sure the image is in public/assets/
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "900px", // fixed height
                    transition: "transform 0.5s",
                  }}
                >
                  {/* Overlay for readability */}
                  <div
                    className="p-4 position-relative h-10 d-flex flex-column justify-content-between"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.4)",
                      zIndex: 2,
                    }}
                  >
                    <div>
                      
                    
                    </div>

                  {/* Full-width block button at the bottom */}
                  <h1 className="text-center fw-bold h-100"> NEW <br/>ARRIVALS</h1>
                  <p className='text-center fw-bold'>CERAVICH SHOP.</p>
                  <button className="btn btn-outline-light w-100 mt-3">
                    Visit Our store
                  </button>
                </div>

                {/* Optional hover animation layer */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                zIndex: 1,
                transition: "transform 0.5s",
              }}
            ></div>
          </div>
          </div>
       </div>
      </div>
       <Footer />
     </>
=======
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { email, password } = formData;

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          credentials: "include", //  needed for cookies
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Login failed");
        return;
      }

    setMessage(data.message || "Login successful");
    localStorage.setItem("user", JSON.stringify(data));
    //  ROLE-BASED REDIRECT
    if (data.role === "admin") {
      window.location.href = "/admin/Dashboard";
    } else {
      window.location.href = "/";
    }

  } catch (error) {
    console.error(error);
    setMessage("Server error");
  } finally {
    setLoading(false);
  }
  };

  return (
    <>
      <Navbar />

      <div className="container pt-5 mt-5">
        <div className="row align-items-center justify-content-center g-4">

          {/* LOGIN FORM */}
          <div className="col-lg-6">
            <div
              className="card shadow-lg p-4 p-md-5"
              style={{ maxWidth: "800px", width: "100%" }}
            >
              <h3 className="card-title text-center mb-4 fw-bold">
                Login
              </h3>

              {/* MESSAGE */}
              {message && (
                <div className="alert alert-info">
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email address
                  </label>
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
                  <label className="form-label fw-semibold">
                    Password
                  </label>
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

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <label className="form-check-label">
                      Remember Me
                    </label>
                  </div>

                  <a href="#" className="text-decoration-none">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="btn btn-info w-100 mb-3"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

                <div className="text-center">
                  <span>Don't have an account? </span>
                  <a
                    href="./create"
                    className="text-decoration-none fw-semibold"
                  >
                    Sign Up
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div
              className="body-card text-white shadow-lg rounded-4 overflow-hidden position-relative"
              style={{
                backgroundImage:
                  "url('/assets/face-wash-smile.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px",
              }}
            >
              <div
                className="p-4 h-100 d-flex flex-column justify-content-end"
                style={{
                  backgroundColor: "rgba(0,0,0,0.4)",
                }}
              >
                <h2 className="text-center fw-bold">
                  NEW <br /> ARRIVALS
                </h2>

                <p className="text-center fw-bold">
                  CERAVICH SHOP.
                </p>

                <button className="btn btn-outline-light w-100 mt-3">
                  Visit Our store
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
>>>>>>> 0270b5f (Add frontend code)
  );
}
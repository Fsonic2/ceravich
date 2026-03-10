import Footer from '../components/Footer';
import Navbar from "../components/Navbar";

export default function Create() {
  return (
     <>
       <Navbar />
       
       <div className="flex vh-50 px-5 pd--5 pt-5 mt-5 align-items-center justify-content-center bg-light">
         <div class="row">
         <div className="card shadow-lg p-md-5" style={{ maxWidth: '800px', width: '100%' }}>
           <h3 className="card-title text-center mb-4 fw-bold">Create</h3>

           <form>
             <div className="mb-3">
               <label htmlFor="email" className="form-label fw-semibold">Email address</label>
               <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
             </div>

             <div className="mb-3">
               <label htmlFor="password" className="form-label fw-semibold">Password</label>
               <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
             </div>

                <div className="mb-3">
               <label htmlFor="password" className="form-label fw-semibold">Confirm Password</label>
               <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" required />
             </div>

             <div className="d-flex justify-content-between align-items-center mb-3">
               <div className="form-check">
                 <input className="form-check-input" type="checkbox" id="rememberMe" />
                 <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
               </div>
               <a href="#" className="text-decoration-none">Forgot password?</a>
             </div>

             <button type="submit" className="btn btn-info w-100 mb-3">Create Account</button>

             <div className="text-center">
               <span>Don't have an account? </span>
               <a href="./login" className="text-decoration-none fw-semibold">Sign </a>
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
  );
}
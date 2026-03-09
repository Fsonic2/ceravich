import Footer from '../components/Footer';
import Navbar from "../components/Navbar";

export default function Login() {
  return (
     <>
       <Navbar />

       <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
         <div className="card shadow-lg p-4 p-md-5" style={{ maxWidth: '400px', width: '100%' }}>
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
       </div>

       <Footer />
     </>
  );
}
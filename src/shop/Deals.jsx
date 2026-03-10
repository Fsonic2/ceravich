import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Deals() {
  return (
    <>
    <Navbar />
    <div className="container py-5">
      <h1 className="text-center mb-4">Deals</h1>
      <p className="text-center mb-5">Check out our latest offers and discounts!</p>

      <div className="row g-4">
        <div className="col-md-4 text-center">
          <i className="bi bi-envelope fs-1 text-info mb-3"></i>
          <h5>Email Us</h5>
          <p> </p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-telephone fs-1 text-info mb-3"></i>
          <h5>Call Us</h5>
          <p>+234 123 4567</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-chat-dots fs-1 text-info mb-3"></i>
          <h5>Live Chat</h5>
          <p>Chat with our support team for instant assistance.</p>
        </div>
      </div>

      <div className="text-center mt-5">
        <h5>Follow Us for Exclusive Deals</h5>
        <a href="#" className="mx-2 text-dark"><i className="bi bi-facebook fs-3"></i></a>
        <a href="#" className="mx-2 text-dark"><i className="bi bi-instagram fs-3"></i></a>
        <a href="#" className="mx-2 text-dark"><i className="bi bi-twitter fs-3"></i></a>
      </div>
    </div>
    <Footer />
    </>
  );
}         
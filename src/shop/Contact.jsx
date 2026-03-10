import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
    <Navbar />
    <div className="container py-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="text-center mb-5">Have questions or need assistance? We're here to help! Reach out to us through any of the following methods:</p>

      <div className="row g-4">
        <div className="col-md-8">
            <form >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-info">Send Message</button>
            </form>         
        </div>
        <div className="col-md-4 text-center">
             <i className="bi bi-telephone fs-1 text-info mb-3"></i>
          <h5>Phone</h5>
          <p>+234 123 4567</p>
          <i className="bi bi-envelope fs-1 text-info mb-3"></i>
          <h5>Email</h5>
          <p>info@company.com</p>
          <i className="bi bi-geo-alt fs-1 text-info mb-3"></i>
          <h5>Address</h5>
          <p>123 Beauty St, Lagos, Nigeria</p>
        </div>
      </div>
    </div>
    <div className="container py-5">
        google map here
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4820970765104!2d3.244035873768495!3d6.460440023895487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b866caf1ccdcb%3A0xf26aea9ac338c46e!2sTradefairlagos!5e0!3m2!1sen!2sus!4v1773159238355!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
    </div>
    <Footer />
    </>
  );
}   
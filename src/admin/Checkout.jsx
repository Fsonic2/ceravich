import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Checkout() {
    return (
      <>
      <Navbar />
        <h1 className="text-center mt-5">Checkout</h1>
        <p className="text-center">This is the checkout page where customers can review their cart, enter shipping information, and complete their purchase.</p>
      <Footer />
      </>
    );
}
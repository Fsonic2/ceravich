import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Order() {
    return (
      <>
      <Navbar />
        <h1 className="text-center mt-5">Orders</h1>
        <p className="text-center">Here you can view and manage all customer orders. You can update order statuses, process refunds, and communicate with customers regarding their purchases.</p>
      <Footer />
      </>
    );
}
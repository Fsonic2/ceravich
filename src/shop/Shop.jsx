import Navbar from "../components/Navbar";
import CategoryGrid from "../components/CategoryGrid";
import ProductAutoSlider from "../components/ProductAutoSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  const logos = [
    "/assets/gradswork/dfefed.webp",
    "/assets/gradswork/dgedfged.webp",
    "/assets/gradswork/dtgg.webp",
    "/assets/gradswork/DTGFEDFFE.webp",
    "/assets/gradswork/fghrfgr.webp",
    "/assets/gradswork/DTGEGF.webp",
    "/assets/gradswork/DTGEF.webp",
    "/assets/gradswork/dfgegedf.webp",
  ];

  return (
    <>
      <Navbar />
      <Header />
      <CategoryGrid />

      <div className="container-fluid py-3 bg-white text-center">
        <div className="logo-marquee overflow-hidden">
          <div className="logo-track d-flex gap-4">
            {logos.concat(logos).map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Logo ${i}`}
                className="shadow-sm rounded-3"
                style={{ height: "60px" }}
              />
            ))}
          </div>
        </div>
      </div>
      <ProductAutoSlider />
      <Footer />
      <style jsx>{`
        .logo-marquee { overflow: hidden; width: 100%; }
        .logo-track { display: flex; animation: scroll 15s linear infinite; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </>
  );
}
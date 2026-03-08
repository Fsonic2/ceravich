import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import FlashSale from "../components/FlashSale";
import Faq from "../components/Faq";

export default function Home() {
  const logos = [
    "../assets/gradswork/dfefed.webp",
    "../assets/gradswork/dgedfged.webp",
    "../assets/gradswork/dtgg.webp",
    "../assets/gradswork/DTGFEDFFE.webp",
    "../assets/gradswork/fghrfgr.webp",
    "../assets/gradswork/DTGEGF.webp",
    "../assets/gradswork/DTGEF.webp",
    "../assets/gradswork/dfgegedf.webp",
    "../assets/gradswork/dfgefefe.webp",
    "../assets/gradswork/dfef.webp",
    "../assets/gradswork/fgre.webp",
    "../assets/gradswork/fgrge.webp",
    "../assets/gradswork/fhgr.webp",
  ];

  return (
    <>
      <Hero />
      <CategoryGrid />

      <div className="container-fluid py-3 text-center bg-white">

  <div className="logo-marquee overflow-hidden">
    <div className="logo-track d-flex gap-4">
      {logos.concat(logos).map((logo, i) => (
        <img
          key={i}
          src={logo}
          className="shadow-sm rounded-3"
          alt={`Logo ${i}`}
          style={{ height: "60px" }}
        />
      ))}
    </div>
  </div>
</div>

<style jsx>{`
  .logo-marquee {
    position: relative;
    width: 100%;
  }

  .logo-track {
    display: flex;
    animation: scroll 10s linear infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`}</style>

      <FlashSale />
      <Faq />
    </>
  );
}
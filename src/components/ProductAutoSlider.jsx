import { useEffect, useRef } from "react";

export default function ProductAutoSlider() {
  const trackRef = useRef(null);

  const products = [
    {
      id: 1,
      img: "/assets/ProductAutoSlider/creame.webp",
      title: "Revive & Brighten Body Cream",
    },
    {
      id: 2,
      img: "/assets/ProductAutoSlider/Frame-1715.webp",
      title: "Koji White Soap",
    },
    {
      id: 3,
      img: "/assets/ProductAutoSlider/Frame-1781.webp",
      title: "Fatima Perfume",
    },
    {
      id: 4,
      img: "/assets/ProductAutoSlider/Frame-1786-8.webp",
      title: "Method Body Wash",
    },
    {
      id: 5,
      img: "/assets/ProductAutoSlider/Frame-1787.webp",
      title: "Tree Hut Vitamin C Scrub",
    },
    {
      id: 6,
      img: "/assets/ProductAutoSlider/Frame-1788.webp",
      title: "Beauty Product",
    },
     {
      id: 7,
      img: "/assets/ProductAutoSlider/Frame-1789.webp",
      title: "Beauty Product",
    },
     {
      id: 8,
      img: "/assets/ProductAutoSlider/image-1-12.webp",
      title: "Beauty Product",
    },
     {
      id: 9,
      img: "/assets/ProductAutoSlider/creame1-design-29.webp",
      title: "Beauty Product",
    },
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const interval = setInterval(() => {
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
        track.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        track.scrollBy({
          left: 320,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold mb-0"></h3>

        
      </div>

      <div className="slider-wrapper position-relative">
        <div className="slider-track d-flex gap-3" ref={trackRef}>
          {products.map((product) => (
            <div className="slider-item flex-shrink-0" key={product.id}>
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                <img
                  src={product.img}
                  alt={product.title}
                  className="img-fluid product-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .slider-wrapper {
          overflow: hidden;
        }

        .slider-track {
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 6px;
        }

        .slider-track::-webkit-scrollbar {
          display: none;
        }

        .slider-item {
          width: 250px;
        }

        .product-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .card:hover .product-img {
          transform: scale(1.05);
        }

        .slider-btn {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .slider-item {
            width: 200px;
          }

          .product-img {
            height: 220px;
          }
        }
      `}</style>
    </div>
  );
}

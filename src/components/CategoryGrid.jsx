import { useEffect } from "react";
import { Carousel as BootstrapCarousel } from "bootstrap";
const categories = [
  { name: "Makeup", img: "/assets/makeup/IMG_2330.webp", description: "Enhance your beauty with high-quality makeup essentials.", price: "₦3050" },
  { name: "Makeup", img: "/assets/makeup/IMG_2330.webp", description: "Enhance your beauty with high-quality makeup essentials.", price: "₦4000" },
  { name: "Haircare", img: "/assets/haircare/IMG_2330.webp", description: "Healthy hair solutions for strong and shiny hair.", price: "₦2000" },
  { name: "Fragrance", img: "/assets/fragrance/IMG_2330.webp", description: "Luxury perfumes with long-lasting scent.", price: "₦4000" },
  { name: "Lifestyle", img: "/assets/lifestyle/IMG_2330.webp", description: "Modern lifestyle products for everyday living.", price: "₦3500" },
  { name: "Fragrance", img: "/assets/fragrance/IMG_2330.webp", description: "Luxury perfumes with long-lasting scent.", price: "₦4000" }

];

export default function CategoryCarousel() {
  const chunkSize = 3;
  const slides = [];
  for (let i = 0; i < categories.length; i += chunkSize) {
    const slice = categories.slice(i, i + chunkSize);
    while (slice.length < chunkSize) slice.push(categories[slice.length % categories.length]);
    slides.push(slice);
  }
  useEffect(() => {
    const el = document.getElementById("categoryCarousel");
    if (el) {
      new BootstrapCarousel(el, {
        interval: 3000,
        ride: "carousel",
        wrap: true,
      });
    }
  }, []);

  return (
    <div className="container py-5">
      <h3 className="mb-4 fw-bold text-center"></h3>

      <div className="row">
        <div className="col-lg-8">
      <div
        id="categoryCarousel"
        className="carousel slide position-relative"
      >
        <div className="carousel-inner">
          {Array.from({ length: Math.ceil(categories.length / 6) }).map(
            (_, slideIndex) => (
              <div
                className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
                key={slideIndex}
              >
                <div className="container">
                  <div className="row">
                    {categories
                      .slice(slideIndex * 6, slideIndex * 6 + 6)
                      .map((cat, i) => (
                        <div className="col-lg-4 col-md-4 mb-4" key={i}>
                          <div className="card h-100 shadow-sm rounded-3 d-flex flex-column">
                            <img
                              src={cat.img}
                              className="card-img-top"
                              alt={cat.name}
                              style={{ height: "150px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center flex-grow-1 d-flex flex-column justify-content-between">
                              <div>
                                <h6 className="fw-bold">{cat.name}</h6>
                                <p className="text-muted small">{cat.description}</p>
                                <span className="text-primary fw-bold">{cat.price}</span>
                              </div>
                              <a hreff="./shop/carts" className="btn btn-info mt-3" onClick={() => alert(`${cat.name} added to cart!`)}>
                                Add to Cart
                              </a>
                               
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#categoryCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#categoryCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
       
         <div className="col-lg-4 px-0 mt-4 mt-lg-0">
  <div
    className="body-card text-white shadow-lg rounded-4 overflow-hidden position-relative"
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
      className="p-4 position-relative h-100 d-flex flex-column justify-content-between"
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
  );
}
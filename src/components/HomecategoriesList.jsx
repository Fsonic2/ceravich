import { useMemo, useState } from "react";

const categories = [
  { name: "Makeup", img: "/assets/makeup/IMG_2330.webp", description: "Enhance your beauty with high-quality makeup essentials.", price: "₦3050" },
  { name: "Makeup", img: "/assets/makeup/IMG_2330.webp", description: "Enhance your beauty with high-quality makeup essentials.", price: "₦4000" },
  { name: "Haircare", img: "/assets/haircare/IMG_2330.webp", description: "Healthy hair solutions for strong and shiny hair.", price: "₦2000" },
  { name: "Fragrance", img: "/assets/fragrance/IMG_2330.webp", description: "Luxury perfumes with long-lasting scent.", price: "₦4000" },
  { name: "Lifestyle", img: "/assets/lifestyle/IMG_2330.webp", description: "Modern lifestyle products for everyday living.", price: "₦3500" },
  { name: "Fragrance", img: "/assets/fragrance/IMG_2330.webp", description: "Luxury perfumes with long-lasting scent.", price: "₦4000" },
  { name: "Skincare", img: "/assets/makeup/IMG_2330.webp", description: "Protect and nourish your skin every day.", price: "₦5000" },
  { name: "Bath & Body", img: "/assets/haircare/IMG_2330.webp", description: "Premium bath and body essentials.", price: "₦2500" },
  { name: "Kids Care", img: "/assets/lifestyle/IMG_2330.webp", description: "Gentle products for kids.", price: "₦3000" },
  { name: "Lifestyle", img: "/assets/lifestyle/IMG_2330.webp", description: "Modern lifestyle products for everyday living.", price: "₦3500" },
  { name: "Fragrance", img: "/assets/fragrance/IMG_2330.webp", description: "Luxury perfumes with long-lasting scent.", price: "₦4000" },
  { name: "Skincare", img: "/assets/makeup/IMG_2330.webp", description: "Protect and nourish your skin every day.", price: "₦5000" },
  { name: "Bath & Body", img: "/assets/haircare/IMG_2330.webp", description: "Premium bath and body essentials.", price: "₦2500" },
  { name: "Kids Care", img: "/assets/lifestyle/IMG_2330.webp", description: "Gentle products for kids.", price: "₦3000" },
];

export default function CategoryCarousel() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  const filteredCategories = useMemo(() => {
    return categories.filter((cat) =>
      cat.name.toLowerCase().includes(search.toLowerCase()) ||
      cat.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  const paginatedCategories = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredCategories.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredCategories, currentPage]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container-fluid px-3 px-md-5 py-5">
      <div className="row g-4">
        <div className="col-lg-3 px-0 mt-4 mt-lg-0">
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

        <div className="col-lg-9">
          <h3 className="mb-4 fw-bold">Categories</h3>

          {/* Search */}
          <div className="mb-4">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search category..."
                value={search}
                onChange={handleSearch}
              />
            </div>
          </div>

          {/* Category Cards */}
          <div className="row">
            {paginatedCategories.length > 0 ? (
              paginatedCategories.map((cat, i) => (
                <div className="col-lg-4 col-md-6 mb-4" key={i}>
                  <div className="card h-100 shadow-sm rounded-3 d-flex flex-column border-0">
                    <img
                      src={cat.img}
                      className="card-img-top"
                      alt={cat.name}
                      style={{ height: "180px", objectFit: "cover" }}
                    />

                    <div className="card-body text-center d-flex flex-column">
                      <h6 className="fw-bold">{cat.name}</h6>
                      <p className="text-muted small flex-grow-1">
                        {cat.description}
                      </p>
                      <span className="text-primary fw-bold d-block mb-3">
                        {cat.price}
                      </span>

                      <a
                        href="./shop/carts"
                        className="btn btn-info"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`${cat.name} added to cart!`);
                        }}
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="alert alert-warning text-center">
                  No category found.
                </div>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="mt-4">
              <ul className="pagination justify-content-center flex-wrap">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => goToPage(currentPage - 1)}
                  >
                    Previous
                  </button>
                </li>

                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                    key={index}
                  >
                    <button
                      className="page-link"
                      onClick={() => goToPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}

                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => goToPage(currentPage + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}

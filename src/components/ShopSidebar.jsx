import { useMemo, useState } from "react";
export default function ShopSidebar() {
  const categories = [
    "Bath & Body",
    "Best Deals",
    "Fragrance",
    "Gift Card",
    "Grocery",
    "Hair Care",
    "Health & Wellness",
    "Kids Hair Care",
    "Makeup",
    "No Category",
    "Pad",
    "Photography",
    "Razor",
    "Skincare (Face/Neck)",
    "Spray",
    "Uncategorized",
  ];

  const brands = [
    { name: "Amouage", count: 2 },
    { name: "Abro", count: 1 },
    { name: "Afnan", count: 13 },
    { name: "Air Magic", count: 6 },
    { name: "Aire", count: 1 },
    { name: "Al Haramain", count: 13 },
    { name: "Al Rehab", count: 3 },
    { name: "Al Wataniah Khususi", count: 1 },
    { name: "Alhambra", count: 5 },
    { name: "AR", count: 1 },
    { name: "Arabiyat", count: 2 },
    { name: "Ard Al Zaafaran", count: 9 },
    { name: "Armaf", count: 5 },
    { name: "Asdaaf", count: 2 },
    { name: "Axe", count: 1 },
    { name: "Bath & Body works", count: 12 },
    { name: "Bodycology", count: 8 },
    { name: "Brand Designs", count: 1 },
    { name: "California Scents", count: 1 },
    { name: "Confetti LONDON", count: 6 },
    { name: "Coscharis", count: 3 },
    { name: "Cosmo", count: 3 },
    { name: "Dhamma", count: 3 },
    { name: "DOVE", count: 12 },
    { name: "Dwangi", count: 8 },
    { name: "eos", count: 5 },
    { name: "Era", count: 1 },
    { name: "Febreze", count: 1 },
    { name: "Fragrance World", count: 1 },
    { name: "French Avenue", count: 2 },
    { name: "Garden Collection", count: 6 },
    { name: "Genie Collection", count: 8 },
    { name: "Girl Kids", count: 1 },
    { name: "Great Perfume", count: 1 },
    { name: "Gulf Orchid", count: 10 },
    { name: "Ikeda", count: 4 },
    { name: "Khadlaj", count: 4 },
    { name: "La Roche-Posay", count: 1 },
    { name: "Lattafa", count: 62 },
    { name: "Ministry of Oud", count: 1 },
    { name: "My Dear Kidz", count: 1 },
    { name: "My Perfumes", count: 1 },
    { name: "Nedens", count: 1 },
    { name: "Nivea", count: 17 },
    { name: "Paris Corner", count: 11 },
    { name: "Proud of Nature", count: 1 },
    { name: "Rayhaan", count: 1 },
    { name: "Rue Broca", count: 2 },
    { name: "Saltair", count: 3 },
    { name: "Smart World", count: 1 },
    { name: "Sol de Janeiro", count: 1 },
    { name: "Storm", count: 25 },
    { name: "Sure", count: 15 },
    { name: "Swiss Arabian", count: 7 },
    { name: "Top Breeze", count: 4 },
    { name: "vaseline", count: 3 },
    { name: "Via Pinky", count: 12 },
    { name: "Victoria's secret", count: 33 },
    { name: "Xerjoff", count: 1 },
  ];

  const [search, setSearch] = useState("");
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState(50000);

  const filteredCategories = useMemo(() => {
    return categories.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const filteredBrands = useMemo(() => {
    return brands.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const visibleBrands = showAllBrands
    ? filteredBrands
    : filteredBrands.slice(0, 12);

  return (
    <div className="col-lg-3">
      <aside className="shop-sidebar bg-white shadow-sm rounded-4 p-3 p-md-4">
        {/* Search */}
        <div className="mb-4">
          <h5 className="sidebar-title mb-3">Search</h5>
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search category or brand"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-4">
          <h5 className="sidebar-title mb-3">Product Categories</h5>
          <ul className="list-unstyled sidebar-list mb-0">
            {filteredCategories.map((category, index) => (
              <li key={index} className="mb-2">
                <button
                  className={`sidebar-link btn w-100 text-start ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span>{category}</span>
                  <i className="bi bi-chevron-right small"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price */}
        <div className="mb-4">
          <h5 className="sidebar-title mb-3">Price</h5>
          <input
            type="range"
            className="form-range"
            min="1000"
            max="200000"
            step="1000"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
          <div className="d-flex justify-content-between small text-muted">
            <span>₦1,000</span>
            <span>₦200,000</span>
          </div>
          <div className="mt-2 fw-semibold">Selected: ₦{Number(priceRange).toLocaleString()}</div>
        </div>

        {/* Brands */}
        <div className="mb-2">
          <h5 className="sidebar-title mb-3">Brands</h5>
          <ul className="list-unstyled sidebar-list mb-0">
            {visibleBrands.map((brand, index) => (
              <li key={index} className="mb-2">
                <button
                  className={`sidebar-link btn w-100 text-start ${
                    selectedBrand === brand.name ? "active" : ""
                  }`}
                  onClick={() => setSelectedBrand(brand.name)}
                >
                  <span>{brand.name}</span>
                  <span className="badge rounded-pill bg-light text-dark">
                    {brand.count}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {filteredBrands.length > 12 && (
            <button
              className="btn btn-outline-dark btn-sm mt-3 w-100"
              onClick={() => setShowAllBrands(!showAllBrands)}
            >
              {showAllBrands ? "Show Less -" : "Show All +"}
            </button>
          )}
        </div>
      </aside>

      <style>{`
        .shop-sidebar {
          position: sticky;
          top: 20px;
          border: 1px solid #f1f1f1;
        }

        .sidebar-title {
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #222;
          border-bottom: 2px solid #f3f3f3;
          padding-bottom: 10px;
        }

        .sidebar-list {
          max-height: 350px;
          overflow-y: auto;
          padding-right: 4px;
        }

        .sidebar-list::-webkit-scrollbar {
          width: 6px;
        }

        .sidebar-list::-webkit-scrollbar-thumb {
          background: #ddd;
          border-radius: 20px;
        }

        .sidebar-link {
          border: none;
          background: #fff;
          padding: 10px 12px;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
          color: #333;
          font-size: 0.95rem;
        }

        .sidebar-link:hover {
          background: #f8f9fa;
          transform: translateX(4px);
          color: #000;
        }

        .sidebar-link.active {
          background: #212529;
          color: #fff;
        }

        .sidebar-link.active .badge {
          background: rgba(255,255,255,0.2) !important;
          color: #fff !important;
        }

        @media (max-width: 991px) {
          .shop-sidebar {
            position: static;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}

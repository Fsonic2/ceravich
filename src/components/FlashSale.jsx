const flashProducts = [
  { name: "Flash Product 1", price: "₦2,500", img: "../assets/fragrance/dtgg.webp" },
  { name: "Flash Product 2", price: "₦1,800", img: "../assets/flashsale/dtgg.webp" },
  { name: "Flash Product 3", price: "₦3,000", img: "../assets/flashsale/dtgg.webp" },
  { name: "Flash Product 4", price: "₦3,000", img: "../assets/flashsale/dtgg.webp" },
];

export default function FlashSale() {
  return (
    <div className="container py-5 bg-light">
      <h3 className="mb-4 text-center fw-bold">Flash Sale</h3>
      <div className="row g-4">
        {flashProducts.map((product, i) => (
          <div className="col-6 col-md-3" key={i}>
            <div className="card shadow-sm">
              <img src={product.img} className="card-img-top" alt={product.name} />
              <div className="card-body text-center">
                <h6>{product.name}</h6>
                <p className="fw-bold text-danger">{product.price}</p>
                <button className="btn btn-warning btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
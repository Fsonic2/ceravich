const products = [
  { name: "Product 1", price: "₦5,000", img: "https://via.placeholder.com/200?text=Product+1" },
  { name: "Product 2", price: "₦7,500", img: "https://via.placeholder.com/200?text=Product+2" },
  { name: "Product 3", price: "₦3,200", img: "https://via.placeholder.com/200?text=Product+3" },
  { name: "Product 4", price: "₦4,800", img: "https://via.placeholder.com/200?text=Product+4" },
];

export default function ProductList() {
  return (
    <div className="container py-5">
      <h3 className="mb-4">Featured Products</h3>
      <div className="row g-4">
        {products.map((product, i) => (
          <div className="col-6 col-md-3" key={i}>
            <div className="card h-100 shadow-sm">
              <img src={product.img} className="card-img-top" alt={product.name} />
              <div className="card-body text-center">
                <h6 className="card-title">{product.name}</h6>
                <p className="card-text fw-bold">{product.price}</p>
                <button className="btn btn-primary btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function ProductCard({product}) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card border-0 shadow-sm h-100">

        <img
          src={product.image}
          className="card-img-top"
        />

        <div className="card-body text-center">
          <h6>{product.name}</h6>

          <p className="fw-bold text-success">
            ₦{product.price}
          </p>

          <button className="btn btn-outline-dark btn-sm">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  )
}
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";

export default function Product() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Vitamin C Face Serum",
      category: "Skincare",
      price: 12000,
      stock: 20,
      status: "active",
    },
    {
      id: 2,
      name: "Matte Lipstick",
      category: "Makeup",
      price: 8000,
      stock: 35,
      status: "active",
    },
    {
      id: 3,
      name: "Luxury Perfume",
      category: "Fragrance",
      price: 25000,
      stock: 8,
      status: "inactive",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const keyword = search.toLowerCase();
      return (
        item.name.toLowerCase().includes(keyword) ||
        item.category.toLowerCase().includes(keyword) ||
        item.status.toLowerCase().includes(keyword)
      );
    });
  }, [products, search]);

  const handleDelete = (id) => {
    if (!window.confirm("Delete this product?")) return;
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <div>
            <h3 className="fw-bold mb-1">Products</h3>
            <p className="text-muted mb-0">Manage your cosmetic shop products</p>
          </div>
          <Link to="/admin/products/add" className="btn btn-dark">
            Add Product
          </Link>
        </div>

        <div className="card shadow-sm border-0">
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search product..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Status</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                      <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>₦{Number(product.price).toLocaleString()}</td>
                        <td>{product.stock}</td>
                        <td>
                          <span
                            className={`badge ${
                              product.status === "active"
                                ? "bg-success"
                                : "bg-secondary"
                            }`}
                          >
                            {product.status}
                          </span>
                        </td>
                        <td className="text-end">
                          <Link
                            to={`/admin/products/edit/${product.id}`}
                            className="btn btn-sm btn-outline-primary me-2"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="btn btn-sm btn-outline-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center py-4 text-muted">
                        No products found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
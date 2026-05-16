import { BASE_URL } from "../../config/api";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(`${BASE_URL}/api/product/listproducts`, {
        method: "GET",
        credentials: "include",
      });

      const rawText = await response.text();
      console.log("Raw product response:", rawText);

      let data = {};
      try {
        data = rawText ? JSON.parse(rawText) : {};
      } catch {
        throw new Error(`Server did not return JSON. Response was: ${rawText}`);
      }

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch products");
      }

      setProducts(data.productall || []);
    } catch (error) {
      console.error("Fetch products error:", error);
      setMessage(error.message || "Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const keyword = search.toLowerCase().trim();
    return products.filter((item) => {
      const productName = (item.productname || "").toLowerCase();
      const categoryName = (item.category || "").toLowerCase();
      const status = (item.status || "").toLowerCase();
      return (
        productName.includes(keyword) ||
        categoryName.includes(keyword) ||
        status.includes(keyword)
      );
    });
  }, [products, search]);

  // ✅ Fixed handleDelete — now calls the API
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/api/product/delprod/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error("Invalid server response");
      }

      if (!response.ok) {
        throw new Error(data?.message || "Failed to delete product");
      }

      setMessage("Product deleted successfully");
      // ✅ Remove from state after successful API delete
      setProducts((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Delete product error:", error);
      setMessage(error?.message || "Error deleting product");
    } finally {
      setLoading(false);
    }
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

        {/* ✅ Show success or error message */}
        {message && (
          <div
            className={`alert ${
              message.includes("successfully") ? "alert-success" : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}

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
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Status</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="8" className="text-center py-4 text-muted">
                        Loading products...
                      </td>
                    </tr>
                  ) : filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                      <tr key={product.id ?? index}>
                        <td>{index + 1}</td>
                        <td>
                          {product.image ? (
                            <img
                              src={`${BASE_URL}/uploads/${product.image}`}
                              alt={product.productname}
                              style={{
                                width: "50px",
                                height: "50px",
                                objectFit: "cover",
                                borderRadius: "6px",
                              }}
                            />
                          ) : (
                            "No image"
                          )}
                        </td>
                        <td>{product.productname}</td>
                        <td>{product.category}</td>
                        <td>₦{Number(product.price || 0).toLocaleString()}</td>
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
                      <td colSpan="8" className="text-center py-4 text-muted">
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
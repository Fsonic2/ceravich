import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";

export default function EditProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "Vitamin C Face Serum",
    category: "Skincare",
    price: 12000,
    stock: 20,
    status: "active",
    description: "Brightening serum for glowing skin.",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Product name is required";
    if (!form.category.trim()) newErrors.category = "Category is required";
    if (!form.price) newErrors.price = "Price is required";
    if (!form.stock) newErrors.stock = "Stock is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    console.log("Updated product:", form);
    alert("Product updated successfully!");

    navigate("/admin/products");
  };

  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="mb-4">
          <h3 className="fw-bold mb-1">Edit Product</h3>
          <p className="text-muted">Update product information</p>
        </div>

        <div className="card shadow-sm border-0">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">

                <div className="col-md-6">
                  <label className="form-label">Product Name</label>
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    value={form.name}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{errors.name}</div>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Category</label>
                  <input
                    type="text"
                    name="category"
                    className={`form-control ${errors.category ? "is-invalid" : ""}`}
                    value={form.category}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{errors.category}</div>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Price</label>
                  <input
                    type="number"
                    name="price"
                    className={`form-control ${errors.price ? "is-invalid" : ""}`}
                    value={form.price}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{errors.price}</div>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Stock</label>
                  <input
                    type="number"
                    name="stock"
                    className={`form-control ${errors.stock ? "is-invalid" : ""}`}
                    value={form.stock}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{errors.stock}</div>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <select
                    name="status"
                    className="form-select"
                    value={form.status}
                    onChange={handleChange}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label">Description</label>
                  <textarea
                    name="description"
                    className="form-control"
                    rows="4"
                    value={form.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 mt-3">
                  <button type="submit" className="btn btn-dark me-2">
                    Update Product
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => navigate("/admin/products")}
                  >
                    Cancel
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
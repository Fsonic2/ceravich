import { BASE_URL } from "../../config/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";

export default function AddProduct() {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    status: "active",
    description: "",
    imageFile: null,
  });

  const [categories, setCategories] = useState([]);
  const [fetchingCategories, setFetchingCategories] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setFetchingCategories(true);
      setMessage("");

      const response = await fetch(`${BASE_URL}/api/product/categorylist`, {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch categories");
      }

      setCategories(data.categoryall || []);
    } catch (error) {
      console.error("Fetch categories error:", error);
      setMessage(error.message || "Error fetching categories");
    } finally {
      setFetchingCategories(false);
    }
  };

  const addprod = async (formData) => {
    const response = await fetch(`${BASE_URL}/api/product/addprod`, {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || "Failed to add product");
    }

    return data;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm((prev) => ({
        ...prev,
        imageFile: files && files[0] ? files[0] : null,
      }));

      setErrors((prev) => ({
        ...prev,
        image: "",
      }));

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Product name is required";
    if (!form.category) newErrors.category = "Category is required";
    if (!form.price) newErrors.price = "Price is required";
    if (!form.stock) newErrors.stock = "Stock is required";
    if (!form.status) newErrors.status = "Status is required";
    if (!form.imageFile) newErrors.image = "Product image is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setSubmitting(true);

      const formData = new FormData();
      formData.append("productname", form.name.trim());
      formData.append("category_id", form.category);
      formData.append("price", form.price);
      formData.append("stock", form.stock);
      formData.append("created_by", user?.username || "");
      formData.append("status", form.status);
      formData.append("description", form.description);
      formData.append("image", form.imageFile);

      const res = await addprod(formData);

      setMessage(res.message || "Product registered successfully");

      setForm({
        name: "",
        category: "",
        price: "",
        stock: "",
        status: "active",
        description: "",
        imageFile: null,
      });

      navigate("/admin/products");
    } catch (err) {
      console.error("Add product error:", err);
      setMessage(err.message || "Server error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="mb-4">
          <h3 className="fw-bold mb-1">Add Product</h3>
          <p className="text-muted mb-0">Create a new cosmetic product</p>
        </div>

        {message && <div className="alert alert-info">{message}</div>}

        <div className="card shadow-sm border-0">
          <div className="card-body">
            {fetchingCategories ? (
              <p>Loading categories...</p>
            ) : (
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
                      placeholder="Enter product name"
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Category</label>
                    <select
                      name="category"
                      className={`form-select ${errors.category ? "is-invalid" : ""}`}
                      value={form.category}
                      onChange={handleChange}
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.catname}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <div className="invalid-feedback">{errors.category}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Price</label>
                    <input
                      type="number"
                      step="0.01"
                      name="price"
                      className={`form-control ${errors.price ? "is-invalid" : ""}`}
                      value={form.price}
                      onChange={handleChange}
                      placeholder="Enter price"
                    />
                    {errors.price && (
                      <div className="invalid-feedback">{errors.price}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Stock</label>
                    <input
                      type="number"
                      name="stock"
                      className={`form-control ${errors.stock ? "is-invalid" : ""}`}
                      value={form.stock}
                      onChange={handleChange}
                      placeholder="Enter stock quantity"
                    />
                    {errors.stock && (
                      <div className="invalid-feedback">{errors.stock}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Status</label>
                    <select
                      name="status"
                      className={`form-select ${errors.status ? "is-invalid" : ""}`}
                      value={form.status}
                      onChange={handleChange}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    {errors.status && (
                      <div className="invalid-feedback">{errors.status}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Product Image</label>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      className={`form-control ${errors.image ? "is-invalid" : ""}`}
                      onChange={handleChange}
                    />
                    {errors.image && (
                      <div className="invalid-feedback">{errors.image}</div>
                    )}
                  </div>

                  <div className="col-12">
                    <label className="form-label">Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      rows="4"
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Enter product description"
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-dark me-2"
                      disabled={submitting}
                    >
                      {submitting ? "Saving..." : "Save Product"}
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
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
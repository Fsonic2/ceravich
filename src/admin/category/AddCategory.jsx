<<<<<<< HEAD
import { useState } from "react";
=======
import { BASE_URL } from "../../config/api";
import React, { useState } from "react";
>>>>>>> 0270b5f (Add frontend code)
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";

export default function AddCategory() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
<<<<<<< HEAD
    name: "",
=======
    catname: "",
>>>>>>> 0270b5f (Add frontend code)
    slug: "",
    status: "active",
  });

  const [errors, setErrors] = useState({});
<<<<<<< HEAD

  const generateSlug = (value) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setForm((prev) => ({
        ...prev,
        name: value,
        slug: generateSlug(value),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Category name is required";
    if (!form.slug.trim()) newErrors.slug = "Slug is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    console.log("Category saved:", form);

    navigate("/admin/categories");
=======
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // validate form
  const validateForm = () => {
    const newErrors = {};

    if (!form.catname.trim()) {
      newErrors.catname = "Category name is required";
    }

    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // API call inside same file
  const addCategory = async (payload) => {
    const response = await fetch(`${BASE_URL}/api/product/addcat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to add category");
    }

    return data;
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) return;

    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    
    setLoading(true);

    try {
      const res = await addCategory({
        catname: form.catname,
        created_by: user.username,
         
      });

      setMessage(res.message || "Category registered successfully");

      setForm({
        catname: "",
       
        
      });
    } catch (err) {
      setMessage(err.message || "Server error");
    } finally {
      setLoading(false);
    }
>>>>>>> 0270b5f (Add frontend code)
  };

  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="mb-4">
          <h3 className="fw-bold mb-1">Add Category</h3>
          <p className="text-muted mb-0">Create a new cosmetic category</p>
        </div>

<<<<<<< HEAD
=======
        {message && (
          <div className="alert alert-info" role="alert">
            {message}
          </div>
        )}

>>>>>>> 0270b5f (Add frontend code)
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Category Name</label>
                  <input
                    type="text"
<<<<<<< HEAD
                    name="name"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter category name"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label">Slug</label>
                  <input
                    type="text"
                    name="slug"
                    className={`form-control ${errors.slug ? "is-invalid" : ""}`}
                    value={form.slug}
                    onChange={handleChange}
                    placeholder="category-slug"
                  />
                  {errors.slug && (
                    <div className="invalid-feedback">{errors.slug}</div>
                  )}
                </div>

=======
                    name="catname"
                    className={`form-control ${
                      errors.catname ? "is-invalid" : ""
                    }`}
                    value={form.catname}
                    onChange={handleChange}
                    placeholder="Enter category name"
                  />
                  {errors.catname && (
                    <div className="invalid-feedback">{errors.catname}</div>
                  )}
                </div>

                
>>>>>>> 0270b5f (Add frontend code)
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

                <div className="col-12 mt-3">
<<<<<<< HEAD
                  <button type="submit" className="btn btn-dark me-2">
                    Save Category
                  </button>
=======
                  <button
                    type="submit"
                    className="btn btn-dark me-2"
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save Category"}
                  </button>

>>>>>>> 0270b5f (Add frontend code)
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => navigate("/admin/categories")}
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